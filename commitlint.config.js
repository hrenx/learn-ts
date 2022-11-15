// https://gitee.com/help/articles/4231#article-header1
module.exports = {
  rules: {
    // Header
    "header-max-length": [2, "always", 72],
    // <type>枚举
    "type-enum": [
      2,
      "always",
      ["🌻Feat", "🐞Fix", "🚀Performance", "🚧Doing", "🔨Refactor", "⚠️ Delete", "🧪Test", "📝Docs", "⚙️ Config", "💩Shit", "🔀Merge", "⏫Upgrade", "⏬Downgrade", "🔃Revert"],
    ],
    // <type> 不能为空
    "type-empty": [2, "always"],
    // <scope> 不能为空
    "scope-empty": [2, "always"],
    // <subject> 不能为空
    "subject-empty": [2, "always"],
    // 可选值
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case
    // "subject-case": [2, "never", []],
    // <body> 以空行开头
    // "body-leading-blank": [1, "always"],
    // <footer> 以空行开头
    // "footer-leading-blank": [1, "always"],
  },
  extends: ["@commitlint/config-conventional", "cz"],
}
