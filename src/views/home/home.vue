<template>
  <div>Homepage</div>
</template>

<script setup lang="ts" name="Home">
import { ref, reactive, computed, watch, onMounted } from "vue"
import { b } from "./类型声明"
console.log("b", b)

function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x, point.y, point.z?.toFixed())
}

type IdType = string | number | boolean

function printId(id: IdType) {
  console.log(id)
}
</script>
