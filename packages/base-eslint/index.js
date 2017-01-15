module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {},
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "shared-node-browser": true
  },
  "plugins": [
    "babel",
    "react"
  ],
  "modules": true,
  "root": true,
  "globals": {}
}
