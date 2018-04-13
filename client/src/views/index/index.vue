<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="300px">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <router-link class="banner" to='/a'>
            <img :src="item.cover" alt="">
              <div class="banner-title">
                <h3>{{item.course_name}}</h3>
              </div>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-card class="course">
      <div slot="header" class="clearfix">
        <span>最新课程</span>
        <router-link class="read-more" to="/a">查看更多>></router-link>
      </div>
      <el-row>
        <el-col :span="7" v-for="(o, index) in course" :key="o.id" :offset="index > 0 ? 2 : 0">
          <el-card class="course-card" :body-style="{ padding: '0px' }">
            <img :src="o.cover" class="image">
            <div style="padding: 14px;">
              <p class="card-title">{{o.course_name}}</p>
              <p class="card-desp">{{o.course_desp}}</p>
              <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </el-card>

  <el-card class="course">
      <div slot="header" class="clearfix">
        <span>最新资讯</span>
        <router-link class="read-more" to="/a">查看更多>></router-link>
      </div>
      <el-row>
        <el-col :span="7" v-for="(o, index) in news" :key="o.id" :offset="index > 0 ? 2 : 0">
          <el-card class="course-card" :body-style="{ padding: '0px' }">
            <img :src="o.cover" class="image">
            <div style="padding: 14px;">
              <p class="card-title">{{o.news_name}}</p>
              <p class="card-desp">{{o.news_desp}}</p>
              <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </el-card>
  
  </div>
</template>

<script>
import { getBanner } from "@/api/banner";
import { getIndexCourse } from "@/api/course";
import { getIndexNews } from "@/api/news";
export default {
  name: "welcome",
  data() {
    return {
      banner: [],
      course: [],
      news:[]
    };
  },
  computed: {},
  created() {
    this.fetchBanner();
    this.fetchIndexCourse();
    this.fetchIndexNews();
  },
  methods: {
    fetchBanner() {
      getBanner().then(response => {
        this.banner = response.data;
      });
    },
    fetchIndexCourse(){
      getIndexCourse().then(response=>{
        this.course = response.data;
      })
    },
    fetchIndexNews(){
      getIndexNews().then(response=>{
        this.news = response.data;
      })
    }
  },
  mounted() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.block {
  width: 1126px;
  margin: 0 auto;
}
.banner {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .banner-title {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    text-align: center;
    h3 {
      margin: 0;
      color: #fff;
      line-height: 30px;
    }
  }
}
.read-more{
  float: right;
  color: #0366d6
}
.course {
  width: 1126px;
  margin: 30px auto 0;
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .card-title{
    overflow: hidden;
     white-space: nowrap;
     -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  }
  .card-desp{
    font-size: 14px;
    color: #999;
     overflow: hidden;
     white-space: nowrap;
     -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  }
}
.el-col-offset-2{
  margin-left: 65px
}
</style>
