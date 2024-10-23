module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    "node/no-unsupported-features/es-syntax": "off",
    "import/no-unresolved": "off",
  },
};
