module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    },
    "import/no-extraneous-dependencies": [
        "error", {
            "devDependencies": false,
            "optionalDependencies": false,
            "peerDependencies": false,
            "packageDir": "./"
        }
    ],
    "settings": {
        "import/resolver": "webpack"
    }
};