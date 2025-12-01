import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-key": "warn",
      "react/no-unescaped-entities": "off",
		},
	},
]);
