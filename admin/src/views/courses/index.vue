<template>
  <div class="app-container" v-loading.body="listLoading">
   <el-button type="primary" plain @click="addCourse">添加课程</el-button>
   <Moduletable :list="list" :label="label" :update-row='updateRow' :delete-row='deleteRow' :preview='preview'></Moduletable>
   <Dialogtable :actionUrl="actionUrl" :list="list" :type="type" :form="form" :label="label" ref="dial" @commitform='commitForm'></Dialogtable>
   <Vediodialog :vedioUrl="vedioUrl" ref="vedio"></Vediodialog>
  
  </div>

</template>

<script>
import { getCourseList, getAll, getCourseClass } from "@/api/table";
import { updateCourse, delCourse } from "@/api/do";
import Moduletable from "@/components/table/table";
import Dialogtable from "@/components/tabledialog";
import Vediodialog from "@/components/vediodialog";
export default {
  components: {
    Moduletable,
    Dialogtable,
    Vediodialog
  },
  data() {
    return {
      list: [],
      type: [],
      listLoading: true,
      currentType:'',
      vedioUrl:'',
      actionUrl:"http://127.0.0.1:3000/updateCourseCover",
      label: {
        moudleId:"课程ID",
        moduleName: "课程名称",
        moduleDesp: "课程描述",
        moudlePrice: "课程价格",
        moudleType: "课程类型",
        avatar:"封面",
        canPreview:true
      },

      form: {
        name: "",
        price: "",
        coefficient: "",
        desp: "",
        oldname: ""
      }
    };
  },
  created() {
    this.fetchData();
    this.getClass();
  },
  methods: {
    // 添加新课程
    addCourse(){
      this.$refs.dial.noshow();
    },
    // 获取课程类型
    getClass() {
      var vm = this;
      this.listLoading = true;
      var arr = [];
      getCourseClass().then(response => {
        response.data.map((item,index)=>{
          arr[index]={
            id:item.id,
            name:item.course_class_name
          }
        })
      });
      this.type=arr;
    },
    // 获取数据
    fetchData() {
      var vm = this;
      this.listLoading = true;
      var data = [];
      getCourseList().then(response => {
        response.data.map((item, index) => {
          data[index] = {
            id: item.id,
            name: item.course_name,
            price: item.course_price,
            desp: item.course_desp,
            url: item.video_url,
            type: item.course_class_name,
            typeVal: item.course_class_id,
            avatar: item.cover,
            isBanner:item.isBanner
          };
        });
        vm.list=data;
        this.listLoading = false;
      });
    },
    // 删除模块
    deleteRow(index, rows) {
      let data = rows[index].id; //删除管理员
      this.$confirm("是否确定将该课程删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delCourse(data).then(response => {
          if (response.code == 20000) {
            rows.splice(index, 1);
            this.$message({
              message: "删除成功",
              type: "success"
            });
          } else {
            this.$message({
              message: "删除失败",
              type: "success"
            });
          }
        });
      }).catch(()=>{
        this.$message({
            type: 'info',
            message: '已取消删除'
          });  
      })
    },
    // 修改
    updateRow(index, rows) {
      // 获取当前行的内容  rows[index]
      // console.log(rows[index])
      this.form.id = rows[index].id;
      this.form.name = rows[index].name;
      this.form.oldname = rows[index].name;
      this.form.typeName = rows[index].type;
      this.form.type = rows[index].typeVal;
      this.form.price = rows[index].price;
      this.form.url = rows[index].url;
      this.form.desp = rows[index].desp;
      this.form.avatar = rows[index].avatar;
      this.form.avatar = rows[index].avatar;
      this.form.isBanner = rows[index].isBanner;
      this.$refs.dial.noshow();
      console.log("执行更改程序");
    },
    commitForm() {
      // 更改模块的表单提交
      console.log(JSON.stringify(this.form) );
      let data = this.form;

      updateCourse(data).then(response => {
        this.$refs.dial.noshow();
        this.fetchData();
        this.$message({
          message: "修改成功",
          type: "success"
        });
      });
    },
    preview(url){
      this.vedioUrl=url
      this.$refs.vedio.noshow();
    }
  }
};
</script>
