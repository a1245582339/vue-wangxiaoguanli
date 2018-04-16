<template>
  <div v-loading="listLoading">
    <el-card class="news">
      <!-- ************面包屑************ -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'news' }">新闻资讯</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'news' , params:{typeid:news.news_type_id}}">{{news.news_type_name}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{news.news_name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- ************资讯************ -->
      <div class="news">
          <h1 class="news-title">{{news.news_name}}</h1>
          <p class="news-desp">简介：{{news.news_desp}}</p>
          <img class="news-cover" :src="news.cover" alt="">
          <div v-html="news.content"></div>
      </div>

    </el-card>

  </div>
</template>

<script>
import { getNewsById } from "@/api/news";
export default {
  name: "news",
  data() {
    return {
      news: [],
      listLoading: false,
    };
  },
  computed: {},
  created() {
    var vm = this;
    var news_id = this.getQueryVariable("newsid");
    if (!news_id) {
      this.$router.push("/404");
    } else {
      this.fetchNews(news_id);
      this.$emit("listenActiveIndex", "news");
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    userInfo() {
      return this.$store.state.user_info;
    }
  },
  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
    fetchNews(id) {
      var vm = this;
      vm.listLoading = true;
      getNewsById({
        id: id
      }).then(response => {
        vm.news = response.data;
        vm.listLoading = false;
      });
    },
  },
  mounted() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.news{
  margin-top: 50px;
  .news-title{
    text-align: center;
  }
  .news-desp{
    color: #606266;
    font-size: 14px
  }
  .news-cover{
    display: block;
    width: 500px;
    height: 300px;
    margin: 0 auto
  }
}

</style>
