# Changelog

## [3.5.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.4.2...v3.5.0) (2024-07-23)


### Features

* **src/app.ts:** added cross origin request middleware to accomodate frontend requests ([5118802](https://github.com/devosu/research-mentorship-backend-lite/commit/5118802585d048dfc550d367c7d895882ab9472c))

## [3.4.2](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.4.1...v3.4.2) (2024-07-23)

## [3.4.1](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.4.0...v3.4.1) (2024-07-20)

## [3.4.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.3.0...v3.4.0) (2024-07-19)


### Features

* **v0batchuserscontroller.js:** combined read all controller with read w/out query params ([9cee0d7](https://github.com/devosu/research-mentorship-backend-lite/commit/9cee0d7e336370fceddad6e333f7c8c10c040885))

## [3.3.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.2.0...v3.3.0) (2024-07-19)


### Features

* **/v0/v0usersrouter:** refactored user schema to include timestamps, added all working controllers ([068554e](https://github.com/devosu/research-mentorship-backend-lite/commit/068554eb2aac4ab74f27da2c35e39383be685817)), closes [#27](https://github.com/devosu/research-mentorship-backend-lite/issues/27)

## [3.2.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.1.0...v3.2.0) (2024-07-16)


### Features

* **defaultapiresponse:** added isProductionData (default true and nullable) flag to default res obj ([17e17da](https://github.com/devosu/research-mentorship-backend-lite/commit/17e17dacb736c3fde39f42e3e62f1a5ffaf8fc80))

## [3.1.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v3.0.0...v3.1.0) (2024-07-15)


### Features

* **all:** enforced unified res, implemented /batch route, found bugs with single/multi same route ([2dd0729](https://github.com/devosu/research-mentorship-backend-lite/commit/2dd0729c07b1fb0198f827ae0921f959d265ec67)), closes [#18](https://github.com/devosu/research-mentorship-backend-lite/issues/18)


### Bug Fixes

* **.husky/pre-commit:** moved lint:fix before git add --all to avoid dirty working dir post commit ([537178f](https://github.com/devosu/research-mentorship-backend-lite/commit/537178f43ee3d0847ca779611b3ba459768b67b3))

## [3.0.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v2.0.2...v3.0.0) (2024-07-14)


### ⚠ BREAKING CHANGES

* **all:** sunset /v0/mentors, base route / now tmp redir to /healthcheck to reduce
redundancy, mentor schema now requires non-empy array field of proficient languages

### Features

* **all:** sunset /v*/mentors route, complete redesign and implement /v0/users route ([bfb70ac](https://github.com/devosu/research-mentorship-backend-lite/commit/bfb70acfe306e8ca0fc896961e8a292144f979a8)), closes [#18](https://github.com/devosu/research-mentorship-backend-lite/issues/18)

## [2.0.2](https://github.com/devosu/research-mentorship-backend-lite/compare/v2.0.0...v2.0.2) (2024-07-08)


### Bug Fixes

* **.husky/post-commit:** added multi cmd husky disable to prevent hook looping by release-it ([0ec9d2b](https://github.com/devosu/research-mentorship-backend-lite/commit/0ec9d2b676984c7e7cfd980782ea7025a73b7899))
* **.release-it.json:** corrected commit config with official release-it doc ([e76db6e](https://github.com/devosu/research-mentorship-backend-lite/commit/e76db6edec238de81724a36bf093b288e33a8805))

## [2.0.1](https://github.com/devosu/research-mentorship-backend-lite/compare/v2.0.0...v2.0.1) (2024-07-08)


### Bug Fixes

* **.release-it.json:** corrected commit config with official release-it doc ([e76db6e](https://github.com/devosu/research-mentorship-backend-lite/commit/e76db6edec238de81724a36bf093b288e33a8805))

## [2.0.0](https://github.com/devosu/research-mentorship-backend-lite/compare/v1.0.0...v2.0.0) (2024-07-08)


### ⚠ BREAKING CHANGES

* **controllers dir:** adopted zod for schema validating, also adopted middleware and controller for http
request handling, removed placeholder data as it is no longer schema-compliant, all previous code
will NOT work

### Features

* **controllers dir:** separated model file functions, and adopted zod for schema validation ([6cf41a0](https://github.com/devosu/research-mentorship-backend-lite/commit/6cf41a0ab261a76e481b248d63e2fca5fbfa145c)), closes [#19](https://github.com/devosu/research-mentorship-backend-lite/issues/19)
* **routes/v1/mentors.ts:** implemented hard-coded version of the all approved mentors route ([556dd4f](https://github.com/devosu/research-mentorship-backend-lite/commit/556dd4fff4fc3ecdc330ec4d1cc631ad3b1ca9e6))


### Bug Fixes

* **,release-it.json:** added --ci flag to husky post-commit and removed -y flag from release-it ([9ea06e8](https://github.com/devosu/research-mentorship-backend-lite/commit/9ea06e8bd3535c71628758d266e77fd1076383a6))
* **.husky/post-commit:** added ci env (true) to prevent release-it triggering husky ([9fde99c](https://github.com/devosu/research-mentorship-backend-lite/commit/9fde99c094ca079e6990d6191e849a713abdf8fd))

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
