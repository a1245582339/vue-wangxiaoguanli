<template>
  <div class="app-container" v-loading.body="listLoading">
   <el-button type="primary" plain @click="addNews">添加资讯</el-button>
   <Moduletable  :list="list" :label="label" :update-row='updateRow' :delete-row='deleteRow' :preview='preview'></Moduletable>
   <Dialogtable :list="list" :type="type" :form="form" :label="label" ref="dial" @commitform='commitForm'></Dialogtable>
   <Articledialog :articleUrl="articleUrl" ref="article"></Articledialog>
  </div>

</template>

<script>
import { getNewsList, getNewsType, updateNews, delNews ,getHTML} from "@/api/news";
import Moduletable from "@/components/table/table";
import Dialogtable from "@/components/tabledialog";
import Articledialog from "@/components/articledialog";
import Vediodialog from "@/components/vediodialog";
export default {
  components: {
    Moduletable,
    Dialogtable,
    Articledialog,
    Vediodialog
  },
  data() {
    return {
      list: [],
      type: [],
      listLoading: true,
      currentType:'',
      articleUrl:'',
      vedioUrl:'',
      label: {
        moudleId:"资讯ID",
        moduleName: "资讯标题名称",
        moduleDesp: "资讯描述",
        moudleType: "课程类型",
        PageView: "访问量",
        //canPreview:true
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
    addNews(){
      this.$refs.dial.noshow();
    },
    // 获取课程类型
    getClass() {
      var vm = this;
      this.listLoading = true;
      var arr = [];
      getNewsType().then(response => {
        response.data.map((item,index)=>{
          arr[index]={
            id:item.id,
            name:item.news_type_name
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
      getNewsList().then(response => {
        response.data.map((item, index) => {
          data[index] = {
            id: item.id,
            name: item.news_name,
            pageView: item.page_view,
            desp: item.news_desp,
            url: item.article_url,
            type: item.news_type_name,
            typeVal: item.news_type_id
          };
        });
        vm.list=data;
        this.listLoading = false;
      });
    },
    // 删除模块
    deleteRow(index, rows) {
      let data = rows[index].id; //删除新闻
      this.$confirm("是否确定将该条资讯删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delNews(data).then(response => {
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
      this.form.coefficient = rows[index].coefficient;
      this.form.url = rows[index].url;
      this.form.desp = rows[index].desp;
      this.form.category_id = rows[index].category_id;
      this.$refs.dial.noshow();
      console.log("执行更改程序");
    },
    commitForm() {
      // 更改模块的表单提交
      console.log(JSON.stringify(this.form) );
      let data = this.form;

      updateNews(data).then(response => {
        this.$refs.dial.noshow();
        this.fetchData();
        this.$message({
          message: "修改成功",
          type: "success"
        });
      });
    },
    preview(url){
      this.articleUrl=url
      this.$refs.article.noshow();
      getHTML(url)
    }
  }
};
</script>
