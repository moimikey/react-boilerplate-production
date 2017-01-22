# 💋 react-boilerplate-production [![CircleCI](https://circleci.com/gh/moimikey/react-boilerplate-production.svg?style=svg)](https://circleci.com/gh/moimikey/react-boilerplate-production)

> production ready React boilerplate with HMR

😲 _*49kb* production bundle tree-shaked and gzipped !_ 😱

# Start
```
yarn install && ./node_modules/.bin/lerna bootstrap
```

# Run
```
npm run web:build        # ./scripts/web:build
npm run web:lint         # ./scripts/web:lint
npm run web:server:prod  # ./scripts/web:start:prod
npm run web:start        # ./scripts/web:start:dev
npm run web:test         # ./scripts/web:test
```

# Packages
Domain-based, Lerna (https://lernajs.io) powered:
```
* packages/
  * base-eslint/   # base eslint configuration
  * base-react/    # base React factory
  * base-utility/  # base utilities factory
  * base-webpack/  # base webpack configuration (webpack2, hmr)
  * web/           # web client (react, eslint, webpack, cssmodules)
```

## Only use what you need
```
...
"base-react": "*",
"base-webpack": "*",
...
```

# License
MIT
