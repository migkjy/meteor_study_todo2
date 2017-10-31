module.exports = {
    "extends": [
        "airbnb", 
        "eslint:recommended", 
        "plugin:meteor/recommended"
    ],
    "plugins": ["meteor"],
    rules:{
        "linebreak-style": [0],
        "no-console": 0,
    },
    env: {
        "jquery": true,
    },
};