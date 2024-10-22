import tsParser from "@typescript-eslint/parser";
import tseslint from 'typescript-eslint';
import path from "node:path";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslint.configs.recommended,
    allConfig: eslint.configs.all
});

export default [ ...compat.extends("plugin:@typescript-eslint/strict"), {
    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "@typescript-eslint/no-unused-vars": "off",
	"lines-between-class-members": "warn",
        "no-unused-vars": "off",
    },
}, ...tseslint.configs.stylistic];
