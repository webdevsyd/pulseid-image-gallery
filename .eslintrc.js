module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "airbnb",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 9,
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "rules": {
      "no-console": "warn",        // console should be allowable
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/prefer-default-export": ["off"]
    }
}