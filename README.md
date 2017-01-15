```
yarn install
```

```
// dev
cd packages/base-eslint
yarn link
cd ..
cd packages/base-webpack
yarn link
cd ..
cd packages/web
yarn link base-webpack
yarn link eslint-config-base-eslint
cd ../..
```
