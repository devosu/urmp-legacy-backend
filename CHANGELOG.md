# Changelog

## [1.0.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.3.3...v1.0.0) (2024-06-23)


### ⚠ BREAKING CHANGES

* **app.ts:** entrypoint changed from index.ts to app.ts, plus index routing is no longer defined
in app.ts but rather has its own router and jest tests

### Features

* **app.ts:** modularization, testing, and config update ([8bde716](https://github.com/devosu/research-mentorship-backend-lite/commit/8bde716acba1e697f00c4afab2779e53201c22ef))
* **src/routes/users.ts:** added read (all, specific) and create ops to /v1/users endpoint ([8613aef](https://github.com/devosu/research-mentorship-backend-lite/commit/8613aefeda2b64db6877df76377a0211c61efce0))

## [0.3.3](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.3.2...v0.3.3) (2024-06-20)


### Bug Fixes

* **package.json:** enforced pnpm version, added reminder to update all locations ([6e46a52](https://github.com/devosu/research-mentorship-backend-lite/commit/6e46a528fc8c233fa89c01dfe8ae07159e3a232a))

## [0.3.2](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.3.1...v0.3.2) (2024-06-19)


### Bug Fixes

* **.github/workflows/jekyll-deploy.yml:** removed download artifact job, simplified workflow ([35bb527](https://github.com/devosu/research-mentorship-backend-lite/commit/35bb527d0c73100982f078b1d02f9499feddb363))
* **jekyll-deploy.yml:** added back specific artifact name to prevent `not found` bug ([1e13a7e](https://github.com/devosu/research-mentorship-backend-lite/commit/1e13a7e50ece9962a97e4f178b7686ec0c6c5049))
* **jekyll-deploy.yml:** added conditionals to prevent comment when no PR is in context ([3faf454](https://github.com/devosu/research-mentorship-backend-lite/commit/3faf454c25f6c4b3dff87edc965a9c2e5b2a1735))
* **jekyll-deploy.yml:** reordered deployment workflow to debug `artifact not found` bug ([93fc7a2](https://github.com/devosu/research-mentorship-backend-lite/commit/93fc7a24b6b4ccb3e0551305677b9b00290a4dbe))


### Reverts

* **users.md and jekyll-deploy.yml:** reverted back to using GH native md pages instead of hosting ([e0b62b9](https://github.com/devosu/research-mentorship-backend-lite/commit/e0b62b98bc1145ce5e85f077963294a9ab279072))

## [0.3.1](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.3.0...v0.3.1) (2024-06-19)


### Bug Fixes

* **./docs/_config.yml:** added config file for jekyll build to further prevent pathing bugs ([6f70324](https://github.com/devosu/research-mentorship-backend-lite/commit/6f70324c8443ae2280b9b98d66e7c53bd85ffdc1))
* **jekyll-deploy.yml:** added id-token write to fine-grain ctrl of pages deploy job ([337cbaf](https://github.com/devosu/research-mentorship-backend-lite/commit/337cbafce2b123fd9d56a6124bcd44d05f133a4b))
* **jekyll-deploy.yml:** added path param  to `actions/upload-pages-artifact@v3` ([7126bf1](https://github.com/devosu/research-mentorship-backend-lite/commit/7126bf1aea6d12679313c93d4244a1228bb65ed9))
* **jekyll-deploy.yml:** removed requirement to deploy to pages per PR, now only per push to main ([ede99b4](https://github.com/devosu/research-mentorship-backend-lite/commit/ede99b407d0be0056b49b0a95dcda55e211dd7ab))

## [0.3.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.5...v0.3.0) (2024-06-19)


### Features

* **docs/index.md:** created and stakeholder-reviewed user schema for backend rest api ([1fca723](https://github.com/devosu/research-mentorship-backend-lite/commit/1fca723c61e50f599dc80f5c824a4617a882c51f))


### Bug Fixes

* **gcp-deploy.yml:** gave action runner permissions to create PR comments and issues ([062703d](https://github.com/devosu/research-mentorship-backend-lite/commit/062703d21a30d0d871f1caa2ef2268ca69b2dbb1))
* **node-ci.yml:** updated to use specific pnpm ver to avoid ver incompatibility issue ([dbda552](https://github.com/devosu/research-mentorship-backend-lite/commit/dbda5522197220a8767a10a98f422ce1c75d9425))

## [0.2.5](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.4...v0.2.5) (2024-06-16)


### Bug Fixes

* **.github/workflows/node-ci.yml:** now use exact ver of pnpm for setup as 'latest' may not update ([5df8be2](https://github.com/devosu/research-mentorship-backend-lite/commit/5df8be26d77e8728774fb9a3aa570996c90cad3c))
* **deployment and node-ci:** further removed leftover Firebase app config that causes ci issues ([4e25f48](https://github.com/devosu/research-mentorship-backend-lite/commit/4e25f48c9e646fdc5f32c9c545918d1d5f797e23))

## [0.2.4](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.3...v0.2.4) (2024-06-16)


### Bug Fixes

* **.release-it.json:** fixed missing closing quote echo message for release-it hook ([92707b8](https://github.com/devosu/research-mentorship-backend-lite/commit/92707b8e808f5e14376e12cdbf20b9cc3b127427))

## [0.2.3](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.2...v0.2.3) (2024-06-16)

## [0.2.2](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.1...v0.2.2) (2024-06-16)


### Bug Fixes

* **.release-it.json:** debugged and added the missing `echo` to output script ([c15643e](https://github.com/devosu/research-mentorship-backend-lite/commit/c15643e04092aeb43ba8d0e24950f76870953816))

## [0.2.1](https://github.com/devosu/research-mentorship-backend-lite/compare/v0.2.0...v0.2.1) (2024-06-16)


### Bug Fixes

* **.release-it.json:** removed buggy echo command from release-it config ([f52cd4a](https://github.com/devosu/research-mentorship-backend-lite/commit/f52cd4a2dce0eec01816922bfb0a05b8a1fd0018))

## 0.2.0 (2024-06-16)


### Features

* **release-it:** replaced git-cliff (no auto ver) with release-it (yes) ([e990e85](https://github.com/devosu/research-mentorship-backend-lite/commit/e990e850c2d4a0165a3ca9c086db28225cdc1c00))


### Bug Fixes

* **package.json:** added `pnpm run release` script to package.json ([810ff25](https://github.com/devosu/research-mentorship-backend-lite/commit/810ff25ce1a7b8e6283a3952e82a189b594a63e7))
