<template>
  <div>
    <el-input v-model="ceshi" placeholder="请输入"></el-input>
    <el-button type="primary" @click="handleClick">测试</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { ElMessage } from "element-plus"

const ceshi = ref("")

function handleClick() {
  ElMessage.error("测试")
}
</script>
