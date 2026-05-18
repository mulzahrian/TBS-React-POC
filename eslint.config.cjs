/* eslint-env node */
const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-plugin-prettier");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: {
            prettier,
        },
        extends: [js.configs.recommended],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module", // ⬅️ ganti ini
            globals: { 
                ...globals.browser, // ⬅️ pakai browser, bukan node
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // ⬅️ INI YANG PENTING
                },
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
            eqeqeq: "warn",
            semi: ["warn", "always"],
            quotes: "off",
            "prettier/prettier": [
                "warn",
                {
                    semi: true,
                    singleQuote: false,
                    trailingComma: "es5",
                    printWidth: 100,
                    tabWidth: 4,
                    endOfLine: "auto",
                },
            ],
        },
    },
]);