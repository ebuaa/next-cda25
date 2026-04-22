import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["cypress/**/*", "**/*.cy.*", ".next/**/*", "node_modules/**/*", "next.config.js"],
  },
];
