module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    // extends: [
    //     "eslint:recommended",
    //     "plugin:@typescript-eslint/recommended",
    //     "plugin:storybook/recommended",
    //     "prettier"
    // ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        // indent: ["error", 4, { MemberExpression: 1 }],
        indent: "off",
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ]
    }
};
