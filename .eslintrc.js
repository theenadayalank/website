module.exports = {
  parser: "babel-eslint",
  extends: [
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      }
    ]
  },
}