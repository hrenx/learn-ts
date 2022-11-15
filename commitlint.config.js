module.exports = {
  extents: ["@commitlint/config-conventional"],
  rules: {
    // "body-leading-blank": [1, "always"],
    // "footer-leading-blank": [1, "always"],
    // "header-max-length": [2, "always", 72],
    // "scope-case": [2, "always", "lower-case"],
    // "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    // "subject-empty": [2, "never"],
    // "subject-full-stop": [2, "never", "."],
    // "type-case": [2, "always", "lower-case"],
    // "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["🌻Feat", "🐞Fix", "🚀Performance", "🚧Doing", "🔨Refactor", "⚠️ Delete", "🧪Test", "📝Docs", "⚙️ Config", "💩Shit", "🔀Merge", "⏫Upgrade", "⏬Downgrade", "🔃Revert"],
    ],
  },
}
