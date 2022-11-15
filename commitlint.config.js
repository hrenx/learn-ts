module.exports = {
  extents: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["Feat", "Fix", "Performance", "Doing", "Refactor", "Delete", "Test", "Docs", "Config", "Shit", "Merge", "Upgrade", "Downgrade", "Revert"]],
    "header-max-length": [2, "never", 72],
    "type-empty": [2, "never"],
    "scope-empty": [2, "never"],
    "scope-max-length": [2, "never", 50],
    "subject-empty": [2, "never"],
    "subject-max-length": [2, "never", 72],
    "body-empty": [2, "always"],
    "body-max-length": [2, "never", 200],
    "body-max-line-length": [2, "never", 20],
    "footer-empty": [2, "always"],
    "footer-max-length": [2, "never", 200],
    "footer-max-line-length": [2, "never", 20],
    "scope-enum": [2, "always", []],
  },
}
