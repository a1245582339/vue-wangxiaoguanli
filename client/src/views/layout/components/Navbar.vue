<template>
<div>
  <el-menu class="navbar" mode="horizontal">
    <!-- 侧边栏折叠按钮 -->
    <div style="width:1126px;margin:0 auto">
  <img style="height:40px;width:40px" :src="logo" alt="">
     <el-dropdown v-if="isLogin" class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
           返回首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 右侧的退出按钮 -->
    <div v-else class="avatar-container">
      <div style="margin-top:0" class="avatar-wrapper" >
        <span style="margin-right: 20px" @click="login">登录</span>
        <span style="margin-right: 20px" @click="register">注册</span>
        
      </div>
    </div>
    </div>
    
  </el-menu>
  
  <!-- ******************************** -->
<el-dialog title="登录" :visible.sync="loginVisible" center>
       <el-form :model="form" label-width="30px" >

         <!-- ***********************头像****************************** -->
         <!-- <el-form-item  label="label.avatar" :label-width="formLabelWidth">
           <el-upload
              class="avatar-uploader"
              ref="image"
              :auto-upload="false"
              action="actionUrl"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-change="AvatarChange">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
         </el-form-item> -->

         <el-form-item label="选择类型" :label-width="formLabelWidth">
           <el-select v-model="form.category_id" placeholder="请选择模块类型">
              <el-option label="基础组件" value="0"></el-option>
              <el-option label="可选组件" value="1"></el-option>
              <el-option label="独立组件" value="2"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="模块名称" :label-width="formLabelWidth">
           <el-input v-model="form.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块介绍" :label-width="formLabelWidth">
           <el-input type="textarea" autosize v-model="form.desp" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块价格" :label-width="formLabelWidth">
           <el-input v-model="form.price" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块系数" :label-width="formLabelWidth">
           <el-input v-model="form.coefficient" auto-complete="off"></el-input>
         </el-form-item>
         
       </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="">确 定</el-button>
      </div>
</el-dialog>
 <el-dialog title="注册" :visible.sync="regVisible" center>
       <el-form :model="form" label-width="30px" >
         <el-form-item label="选择类型" :label-width="formLabelWidth">
           <el-select v-model="form.category_id" placeholder="请选择模块类型">
              <el-option label="基础组件" value="0"></el-option>
              <el-option label="可选组件" value="1"></el-option>
              <el-option label="独立组件" value="2"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="模块名称" :label-width="formLabelWidth">
           <el-input v-model="form.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块介绍" :label-width="formLabelWidth">
           <el-input type="textarea" autosize v-model="form.desp" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块价格" :label-width="formLabelWidth">
           <el-input v-model="form.price" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块系数" :label-width="formLabelWidth">
           <el-input v-model="form.coefficient" auto-complete="off"></el-input>
         </el-form-item>
         
       </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="">确 定</el-button>
      </div>
</el-dialog>
</div>
</template>

<script>
import logo from "@/assets/vue.png";
import { mapGetters } from "vuex";

export default {
  data() {
    const checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("模块名不能为空"));
      }
    };
    const checkDesp = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("模块描述不能为空"));
      }
    };
    const checkCoefficicent = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("系数不能为空"));
      }
      setTimeout(() => {
        if (Number.isNaN(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须为正数"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    const checkPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("价格不能为空"));
      }
      setTimeout(() => {
        if (Number.isNaN(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须为正数"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    return {
      logo,
      loginVisible: false,
      regVisible: false,
      isLogin: false,
      form: {
        category_id: "",
        name: "",
        price: "",
        coefficient: "",
        desp: "",
        is_deleted: 0
      },
      formLabelWidth: "80px",
      rules: {
        name: [{ validator: checkName, trigger: "change" }],
        desp: [{ validator: checkDesp, trigger: "change" }],
        price: [{ validator: checkPrice, trigger: "change" }],
        coefficient: [{ validator: checkCoefficicent, trigger: "change" }]
      }
    };
  },
  components: {

  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  created(){
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
    login() {
      this.loginVisible = true;
    },
    register() {
      this.regVisible = true;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  background-color: #60626b;
  color: #fff;
  .avatar-container {
    height: 50px;
    float: right;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

