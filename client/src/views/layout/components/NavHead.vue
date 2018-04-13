<template>
<div>
  <el-menu router :default-active="headerIndex" class="nav" mode="horizontal" @select="handleSelect">
  
  <el-menu-item index="/index">首页</el-menu-item>
  
  <el-submenu index="2">

      <template slot="title">
        课程列表
      </template>
 
    <el-menu-item class="navitem" index="/courselist">全部课程</el-menu-item>
    <el-menu-item class="navitem" v-for="(item,index) in courseClass" :key="item.id" :index="index+'2'">{{item.course_class_name}}</el-menu-item>
  </el-submenu>

  <el-submenu index="3">
    <template slot="title">资讯列表</template>
    <el-menu-item v-for="(item,index) in newsType" :key="item.id" :index="index+'3'">{{item.news_type_name}}</el-menu-item>
  </el-submenu>

  <el-menu-item index="4">消息中心</el-menu-item>

  <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>

<script>
import { courseClassList, getNewsType } from "@/api/type";
export default {
  props:{
    headerIndex:String
  },
  data() {
    return {
      activeIndex: '',  // 传给activeIndex的值必须是子组件的index,值动态绑定到组件里
      courseClass: [],
      newsType: []
    };
  },
  components: {},
  created() {
    this.fetchCourseClass();
    this.fetchNewsType();
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    fetchCourseClass() {
      courseClassList().then(response => {
        this.courseClass = response.data;
      });
    },
    fetchNewsType() {
      getNewsType().then(response => {
        this.newsType = response.data;
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav {
  width: 1126px;
  margin: 0 auto;
}
</style>

