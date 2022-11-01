<template>
  <el-container>
    <!--左侧栏 SliderContainer -->
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu default-active="1" router>
          <el-sub-menu index="1">
            <template #title>TypeScript</template>
            <el-menu-item index="/home">home</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!--右侧 MainContainer -->
    <el-main>
      <div id="main-container">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script setup name="layout">
// import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.el-menu {
  min-height: 100vh;
}
</style>
