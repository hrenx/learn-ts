<template>
  <div class="Home">
    <el-input v-model="ceshi" placeholder="请输入"></el-input>
    <el-button type="primary" @click="handleClick">测试</el-button>
    <el-button type="primary" @click="getRequest">发送请求</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { ElMessage } from "element-plus"
import { http } from "@/service/http"

const ceshi = ref("")

function handleClick() {
  ElMessage.error(ceshi.value)
}

interface DataType {
  headers: Object
}

async function getRequest() {
  // const res = await http.request<DataType>({
  //   method: "GET",
  //   url: "/get",
  // })
  const res = await http.get<DataType>("/get", { ceshi: "123" })
  console.log("res", res.data)
}
</script>
<style scoped>
.Home {
  display: flex;
}
</style>
