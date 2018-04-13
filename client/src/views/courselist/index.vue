<template>
  <div>
      <el-select v-model="value" clearable placeholder="请选择课程类型">
    <el-option
      v-for="item in courseClass"
      :key="item.id"
      :label="item.course_class_name"
      :value="item.id">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import { getCourse } from "@/api/course";
import { courseClassList } from "@/api/type";

export default {
  name: "course",
  data() {
    return {
      course: [],
      courseClass: [],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
  },
  computed: {},
  created() {
    this.$emit('listenActiveIndex','2')
    this.fetchCourse();
    this.fetchCourseClass();
  },
  methods: {
    fetchCourse() {
      getCourse().then(response => {
        this.course = response.data;
      });
    },
    fetchCourseClass() {
      courseClassList().then(response => {
        this.courseClass = response.data;
      });
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
.read-more {
  float: right;
  color: #0366d6;
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
    clear: both;
  }
  .card-title {
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .card-desp {
    font-size: 14px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
}
.el-col-offset-2 {
  margin-left: 65px;
}
</style>
