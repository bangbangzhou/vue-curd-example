
<template>
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
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="日期"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style>

</style>