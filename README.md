# react-boilerplate (production)

# Build
```
yarn install && npm run web:build
```

# Develop
The packages directory is treated as a repository of modules. Unless these are
present in a repository, they'll need to be linked:
```
cd packages/base-eslint && yarn link && cd ..
cd packages/base-react && yarn link && cd ..
cd packages/base-utility && yarn link && cd ..
cd packages/base-webpack && yarn link && cd ..
cd packages/web
yarn link eslint-config-base-eslint
yarn link base-react
yarn link base-utility
yarn link base-webpack
cd ../..
npm run start
```

# Architecture
## Packages (blocks)
Package-based, with isolated `package.json` entry points:
```
* packages/
  * base-eslint/   # base eslint configuration
  * base-react/    # base React factory
  * base-utility/  # base utilities factory
  * base-webpack/  # base webpack configuration
  * web/           # client-side entry point
```
This allows for shareable configuration that is extensible and reusable.

## Environment Driven
To be as 12-factor as possible, configuration happens at the environment-level,
using command-line switches/flags (see `./scripts/*`). This strategy allows for
large-scale projects to avoid exponentially increasing per-environment configs.

## Friendly Development
Jump starting development is as simple as `npm run start`, which launches a
highly configured instance of `nodemon`. `nodemon` will watch for all changes,
including newly added dependencies, ensuring smooth restarts of the start
process, while avoiding conflicting file watchers (ex. webpack).

## Docker
Environment is dockerized to allow easy developer on-boarding.

# License
MIT
