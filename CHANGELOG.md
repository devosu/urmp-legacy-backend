# Changelog

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
