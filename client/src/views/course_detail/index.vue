<template>
  <div v-loading="listLoading">
    <el-card class="course">
      <!-- ************面包屑************ -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'courselist' }">视频课程</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'courselist' , params:{classid:course.course_class_id}}">{{course.course_class_name}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{course.course_name}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="course-content">
        <img class="course-cover" :src="course.cover" alt="">
        <div class="course-text">
          <div class="text">
            <h1>{{course.course_name}}</h1>
            <div class="price">
              <span>价 格</span>
              <span class="price-val">￥{{course.course_price}}</span>
            </div>
            <el-row class="course-btn">
              <el-button v-if="haveBought" type="primary">开始学习</el-button>
              <el-button v-else type="danger">立即购买</el-button>
              <el-button v-if="course.isDel==1" type="info" disabled>已下架</el-button>
            </el-row>
            <p class="course-desp">{{course.course_desp}}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getCourseById } from "@/api/course";
import { checkOrder } from "@/api/order";
export default {
  name: "course",
  data() {
    return {
      course: [],
      courseClass: [],
      courseRow: [],
      radio: -1,
      listLoading: false,
      haveBought:false, // 此课程是否已被当前用户购买，默认为未购买
    };
  },
  computed: {},
  created() {
    var vm = this;
    var course_id = this.getQueryVariable("courseid");
    this.fetchCourse(course_id);
    this.$emit("listenActiveIndex", "course");
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  watch:{
    isLogin(val1,val2){
      if(val1){
        var course_id = this.getQueryVariable("courseid");
        this.fetchOrder(course_id, this.$store.state.user_info.stu_id);
      }
      
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
    fetchCourse(id) {
      var vm = this;
      vm.listLoading = true;
      getCourseById({
        id: id
      }).then(response => {
        vm.course = response.data;
        vm.listLoading = false;
      });
    },
    fetchOrder(course_id, stu_id) {
      var vm = this
      checkOrder({course_id:course_id, stu_id:stu_id}).then(response=>{
        vm.haveBought = response.data.haveBought
      })
    }
  },
  mounted() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.course-content {
  margin-top: 30px;
  .course-cover {
    width: 500px;
    height: 300px;
  }
  .course-text {
    float: right;
    width: 500px;
    .text {
      float: left;
      .price {
        height: 40px;
        width: 480px;
        background-color: #f5f5f5;
        line-height: 40px;
        padding-left: 10px;
        .price-val {
          color: #f56c6c;
          margin-left: 30px;
          font-size: 26px;
        }
      }
      .course-btn {
        margin-top: 20px;
      }
      .course-desp {
        letter-spacing: 1px;
        text-indent: 25px;
      }
    }
  }
}
</style>
