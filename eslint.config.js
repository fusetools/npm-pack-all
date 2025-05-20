const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const prettier = require("eslint-plugin-prettier");
const json = require("eslint-plugin-json");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.commonjs,
            ...globals.jest,
        },

        ecmaVersion: 2017,
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends("eslint:recommended", "eslint-config-prettier"),

    plugins: {
        prettier,
        json,
    },

    rules: {
        "prettier/prettier": "error",
        "no-console": "off",
        "no-useless-escape": "off",
        "prefer-const": "warn",
        "prefer-template": "warn",
    },
}, globalIgnores(["**/node_modules"])]);
