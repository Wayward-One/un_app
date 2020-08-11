module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // VUE 官方的推荐设置
    "@vue/standard",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "no-proto": "off",
    "no-control-regex": "off",
    "no-useless-escape": "off",

    // 使用2个空格缩进 https://cn.eslint.org/docs/rules/indent
    indent: ["error", 2],

    // 使用双引号 https://cn.eslint.org/docs/rules/quotes
    quotes: ["error", "double", { allowTemplateLiterals: true }],

    // 使用分号 https://cn.eslint.org/docs/rules/semi
    semi: ["error", "always"],

    // 使用Unix换行符
    // "linebreak-style": [ "error", "unix" ],

    // 行的最大长度: https://cn.eslint.org/docs/rules/max-len
    "max-len": ["error", { code: 100, ignorePattern: "\\w+" }],

    // 大括号风格 https://cn.eslint.org/docs/rules/brace-style
    "brace-style": "error",

    // 驼峰命名： https://cn.eslint.org/docs/rules/camelcase
    // "camelcase": [ "error", { "properties": "always" }],
    camelcase: "off",

    // 多行时不使用拖尾逗号: https://cn.eslint.org/docs/rules/comma-dangle
    // "comma-dangle": ["error", "only-multiline"]
    "comma-dangle": "off",

    // 标识符匹配: https://cn.eslint.org/docs/rules/
    // "id-match": ["error", "^[a-zA-Z$]+[a-zA-Z0-9$_]{0,31}$"],

    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",

    // HTML缩进设置：
    // https://vuejs.github.io/eslint-plugin-vue/rules/html-indent.html
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],

    // 每行最多属性个数：
    // https://bit.ly/2RrnPRJ
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],

    "vue/v-on-style": ["warn", "shorthand"],
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-multi-spaces": "off",
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
    "vue/valid-v-bind": "off",
    "vue/no-parsing-error": "off"
  }
};
