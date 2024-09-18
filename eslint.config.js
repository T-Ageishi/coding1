import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        parser: "@typescript-eslint/parser",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      storybook: storybook,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/strict-boolean-expressions": "error",
      //https://eslint.org/docs/latest/rules/no-implicit-coercion
      "no-implicit-coercion": "error",
      //https://typescript-eslint.io/rules/restrict-plus-operands/
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          skipCompoundAssignments: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          allowAny: false,
        },
      ],
      //文字列同士の+による連結を禁止
      "prefer-template": "error",
      //union型の全ケースをSwitch文で網羅できているかどうかをチェックする
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      //一部のグローバル変数の使用を禁止
      "no-restricted-globals": [
        "error",
        { name: "isFinite", message: "Use Number.isFinite instead." },
        { name: "isNaN", message: "Use Number.isNaN instead." },
      ],
      //Method Signature を禁止し Property Signature を使うよう促す
      "@typescript-eslint/method-signature-style": "error",
      //React hooks を使う上で依存リストの過不足が無いかや、
      //そもそも React hooks を使用できない場所で使っていないかを静的検査する
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",

      //ここより上に記載する
      ...eslintConfigPrettier.rules,
    },
  }
);
