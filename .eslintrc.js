module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-param-reassign": "off",
    "arrow-body-style": "off",
    "consistent-return": "off",
    "max-len": "off"
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
