<template>
   <!-- 设置最外层容器高度为700px,在加上一个很细的边框 -->
   <el-container style="height: 700px; border: 1px solid #eee">

    <el-header style="font-size:40px;background-color: rgb(238, 241, 246)">Tutorial管理</el-header>
    <el-main>
        <!-- 表单 -->
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="标题">
                <el-input v-model="searchForm.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item label="发布">
                <el-select v-model="searchForm.published" clearable placeholder="发布">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>            
        <el-button type="primary"  @click="dialogFormVisible = true">添加</el-button>

        <!-- 表格 -->
        <el-table :data="tableData">
                  <el-table-column prop="title" label="标题" width="180"></el-table-column>
                  <el-table-column prop="description" label="描述" width="180"></el-table-column>
                  <el-table-column prop="published" label="发布" width="140">
                      <template slot-scope="scope">
                          {{scope.row.published==1?"是":"否"}}
                      </template>
                  </el-table-column>
                  <el-table-column label="操作">
                      <template slot-scope="scope">
                          <el-button
                          size="mini"
                          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                          <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                      </template>
                  </el-table-column>
              </el-table>
              <el-dialog title="添加" :visible.sync="dialogFormVisible">
                    <el-form ref="addTutorial" :model="addTutorial" label-width="80px">
                        <el-form-item label="标题">
                            <el-input v-model="addTutorial.title" placeholder="标题"></el-input>
                        </el-form-item>
                        <el-form-item label="发布">
                            <el-select v-model="addTutorial.published" clearable placeholder="发布">
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="addTutorial.description"></el-input>
                        </el-form-item>
                    
                        <el-form-item>
                            <el-button type="primary" @click="saveTutorial">确认</el-button>
                            <el-button  @click="onCancle">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
                <!-- 编辑 -->
                <el-dialog title="编辑" :visible.sync="dialogEditVisible">
                    <el-form ref="editTutorial" :model="addTutorial" label-width="80px">
                        <el-form-item label="标题">
                            <el-input v-model="editTutorial.title" placeholder="标题"></el-input>
                        </el-form-item>
                        <el-form-item label="发布">
                            <el-select v-model="editTutorial.published" clearable placeholder="发布">
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="editTutorial.description"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="editTutorials">确认</el-button>
                            <el-button  @click="onEditCancle">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
    </el-main>
  </el-container>
</template>
  
<script>
  import TutorialDataService from "@/api/TutorialDataService";
  export default {
    data() {

      return {
        //编辑
        editTutorial: {
            title: '',
            published: '',
            description: ''
        },
        dialogEditVisible:false,
        // 添加
        addTutorial: {
              title: '',
              published: '',
              description: ''
          },
        dialogFormVisible:false,
        tableData: [],
        searchForm:{
              title:'',
              published:''
          },
      }
    },
    methods:{
        // 删除
        handleDelete(index, row) {
            TutorialDataService.delete(row.id).then(()=>{
                this.onSubmit()
            }).catch(e => {
                console.log(e);
                })
        },        
        //编辑
        handleEdit(index, row) {
            this.dialogEditVisible=true
            TutorialDataService.get(row.id).then(res=>{
                this.editTutorial=res.data
            })            .catch(e => {
            console.log(e);
            }).finally(()=>{
                //关闭对话框
                this.dialogEditVisible=true
            })
        },
        editTutorials(){
        TutorialDataService.update(this.editTutorial.id,this.editTutorial).then(()=>{
            this.onSubmit()
            }).catch(e => {
            console.log(e);
            }).finally(()=>{
                //关闭对话框
                this.onEditCancle()
            })
        },
        onEditCancle(){
            this.dialogEditVisible = false
            this.editTutorial={}
        },
        //添加
        onSubmit:function(){
            TutorialDataService.findByTutorial(this.searchForm)
                  .then(response => {
                  this.tableData = response.data;
                  console.log(response.data);
                  })
                  .catch(e => {
                  console.log(e);
                  });
        },
        // 添加数据
        saveTutorial() {
          TutorialDataService.create(this.addTutorial)
              .then(() => {
                 this.onSubmit()
              })
              .catch(e => {
              console.log(e);
              }).finally(()=>{
                  //关闭对话框
                  this.onCancle();
              })
          },
          onCancle(){
              this.dialogFormVisible = false
              this.addTutorial={}
          },
    }
  };
</script>
  
  <style>
  
  </style>