<template>
  <div class="app-container" v-loading.body="listLoading">
   <Moduletable :list="list" :label="label" :update-row='updateRow' :delete-row='deleteRow'></Moduletable>
   <Dialogtable :type="type" :form="form" :label="label" ref="dial" @commitform='commitForm'></Dialogtable>
  
  </div>

</template>

<script>
import { getCourseList, getAll, getCourseClass } from "@/api/table";
import { update, delCourse } from "@/api/do";
import Moduletable from "@/components/table/table";
import Dialogtable from "@/components/tabledialog";
export default {
  components: {
    Moduletable,
    Dialogtable
  },
  data() {
    return {
      list: [],
      type: [],
      listLoading: true,
      type: "手机",
      label: {
        moudleId:"课程ID",
        moduleName: "课程名称",
        moduleDesp: "课程描述",
        moudlePrice: "课程价格",
        moudleCoefficient: "课程视频",
        moudleType: "课程类型"
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
    // 获取课程类型
    getClass() {
      var vm = this;
      this.listLoading = true;
      var data = [];
      getCourseClass().then(response => {
        response.data.map((item,index)=>{
          data[index]=item.course_class_name
        })
      });
      this.type=data;
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
            coefficient: item.video_url,
            type: item.course_class_name
          };
        });
        vm.list=data;
        this.listLoading = false;
      });
    },
    // 删除模块
    deleteRow(index, rows) {
      let data = rows[index].id; //根据课程id删除课程
      console.log("要删除的模块name:", data);
      delCourse(data)
        .then(response => {
          console.log(response);
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
        })
        .catch(err => {
          this.$message({
            message: "删除失败",
            type: "success"
          });
        });
    },
    // 修改
    updateRow(index, rows) {
      // 获取当前行的内容  rows[index]
      // console.log(rows[index])
      this.form.name = rows[index].name;
      this.form.oldname = rows[index].name;
      this.form.price = rows[index].price;
      this.form.coefficient = rows[index].coefficient;
      this.form.desp = rows[index].desp;
      this.form.category_id = rows[index].category_id;
      this.$refs.dial.noshow();
      console.log("执行更改程序");
    },
    commitForm() {
      // 更改模块的表单提交
      console.log(this.form);
      let data = this.form;
      update(data).then(response => {
        this.$refs.dial.noshow();
        this.fetchData();
        this.$message({
          message: "修改成功",
          type: "success"
        });
      });
    }
  }
};
</script>
