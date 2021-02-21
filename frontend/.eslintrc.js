module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["prettier", "react", "react-hooks"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
