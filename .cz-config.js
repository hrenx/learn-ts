"use strict"
module.exports = {
  types: [
    { value: "🌻Feat", name: "🌻 Feat 一个新的特性" },
    { value: "🐞Fix", name: "🐞 Fix 修复一个Bug" },
    { value: "🚀Performance", name: "🚀 Performance 性能优化" },
    { value: "🚧Doing", name: "🚧 Doing 开发进行中" },
    { value: "🔨Refactor", name: " 🔨 Refactor 代码重构, 注意和feat、fix区分开" },
    { value: "⚠️ Delete", name: "⚠️  Delete 删除代码/文件" },
    { value: "🧪Test", name: "🧪 Test 测试" },
    { value: "📝Docs", name: "📝 Docs 变更的只有文档" },
    { value: "⚙️ Config", name: "⚙️  Config 配置修改(如vite/eslint/prettier)" },
    { value: "💩Shit", name: "💩 Shit 临时脏代码" },
    { value: "🔀Merge", name: "🔀 Merge 合并代码" },
    { value: "⏫Upgrade", name: "⏫ Upgrade 升级或新增依赖" },
    { value: "⏬Downgrade", name: "⏬ Downgrade 降级或删除依赖" },
    { value: "🔃Revert", name: "🔃 Revert 回滚代码" },
  ],
  // scopes: [{ name: "模块1" }, { name: "模块2" }, { name: "模块3" }, { name: "模块4" }],
  messages: {
    type: "选择一种你的提交类型:",
    scope: "请输入作用范围:",
    customScope: "Denote the SCOPE of this change:",
    subject: "短说明:\n",
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: "非兼容性说明 (可选):\n",
    footer: "关联关闭的issue，例如：#31, #34(可选):\n",
    confirmCommit: "确定提交说明?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["特性", "修复"],
  // limit subject length
  subjectLimit: 100,
}
