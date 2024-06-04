# ./Dockerfile
# ./.dockerignore
#
# Multi-stage Docker image build instructions
# for Node.js backend app using pnpm as package manager.

# Stage 1. Def base, switch user, and install deps.
FROM node:22-alpine AS base
WORKDIR /app

# When using pnpm, make sure to install globally
# with root privilege before switching back to the node user.
USER root
RUN npm install --global pnpm@latest
RUN chown --recursive node:node /app

# When using pnpm, make sure to include
# pnpm-lock.yaml and .npmrc instead of package-lock.json.
USER node
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node .npmrc ./
RUN pnpm install

# Stage 2. Install dependencies and build the app.
# (Must use pnpm install instead of pnpm install --prod because
# dev dependencies are needed for the build process.)
FROM base AS build
USER node
COPY --chown=node:node . .
RUN pnpm run build:tsc

# Stage 3.A Optimize for production, only install production dependencies,
# then load the env vars and start the ExpressJS server via /dist dir from build stage.
FROM node:22-alpine AS production
WORKDIR /app

USER root
RUN npm install --global pnpm@latest
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node .npmrc ./
RUN pnpm install --prod

# Copy over only the production files.
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/.env.example ./

# Accept incoming firebase env vars only at runtime,
# latest Firebase app config no longer needs measurement id.
ENV FIREBASE_API_KEY=
ENV FIREBASE_AUTH_DOMAIN=
ENV FIREBASE_PROJECT_ID=
ENV FIREBASE_STORAGE_BUCKET=
ENV FIREBASE_MESSAGING_SENDER_ID=
ENV FIREBASE_APP_ID=
ENV FIRESTORE_DATABASE_ID=

# Make NextJS's default 3000 port editable via build arg.
ENV PORT=5000
EXPOSE $PORT

# Add a healthcheck to the ExpressJS server.
# (Note: for node:22-alpine, curl is not installed by default,
# make sure to install it as root user.)
USER root
RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:$PORT || exit 1

# 3.C Start the ExpressJS production server as non-root node user.
USER node
CMD ["pnpm", "start"]
