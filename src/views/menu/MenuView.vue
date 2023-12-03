<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header style="font-size:40px;background-color: rgb(238, 241, 246)">Tutorial管理</el-header>
      <el-container>
        <el-aside width="200px">

          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
              <el-menu-item index="1-1">
                <router-link to="/tutorials">Tutorial管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/emp">测试</router-link>
              </el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>