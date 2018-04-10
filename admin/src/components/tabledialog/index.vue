<template>
    <div>
 <!-- 弹出框***************************************************** -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible" center>
       <el-form :model="form" label-width="30px" class="dialog-form" :rules="rules">
         <!-- <el-form-item label="修改模块" :label-width="formLabelWidth">
           <el-input v-model="form.oldname" auto-complete="off" :disabled="true"></el-input>
         </el-form-item> -->
         <el-form-item v-if="label.moduleName" :label="label.moduleName" :label-width="formLabelWidth" prop="name">
           <el-input v-model="form.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item   v-if="label.moduleDesp" :label="label.moduleDesp" :label-width="formLabelWidth" prop="desp">
           <el-input type="textarea" autosize  v-model="form.desp" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item v-if="label.moudlePrice" :label="label.moudlePrice" :label-width="formLabelWidth" prop="price">
           <el-input v-model="form.price" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item v-if="label.moudleType" :label="label.moudleType" :label-width="formLabelWidth" prop="coefficient">
           <span>{{form.typeName}}</span>
           <el-select @change="changeType" v-model="typeValue" auto-complete="off">
             <el-option v-for="item in type" :key="item.id" :label="item.name" :value="item.id"></el-option>  
           </el-select>
         </el-form-item>
         <el-form-item v-if="label.moudleCoefficient" :label="label.moudleCoefficient" :label-width="formLabelWidth" prop="coefficient">
           <el-input v-model="form.coefficient" auto-complete="off"></el-input>
         </el-form-item>
         
       </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noshow()">取 消</el-button>
        <el-button type="primary" @click="commitForm()" :disabled="isdisabled">确 定</el-button>
      </div>
    </el-dialog>
  
    </div>
</template>

<script>
export default {
  props: {
    form: Object,
    label: Object,
    type: Array,
    list: Array
  },

  data() {
    var vm = this;
    const checkName = (rule, value, callback) => {
      if (!value) {
        vm.isdisabled = true;
        return callback(new Error("模块名不能为空"));
      } else {
        vm.isdisabled = false;
        callback();
      }
    };
    const checkDesp = (rule, value, callback) => {
      if (!value) {
        vm.isdisabled = true;
        return callback(new Error("模块描述不能为空"));
      } else {
        vm.isdisabled = false;
        callback();
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
      var r = /^\+?[1-9][0-9]*$/;
      if (!value && value !== 0) {
        vm.isdisabled = true;
        return callback(new Error("价格不能为空"));
      } else if(!r.test(value)){
        vm.isdisabled = true;
        callback(new Error("请输入数字值"));
      } else if(value < 0){
        vm.isdisabled = true;
        callback(new Error("必须为正数"));
      }else{
        vm.isdisabled = false;
        callback();
      }
    };
    return {
      dialogFormVisible: false,
      formLabelWidth: "80px",
      typeValue: "",
      isdisabled: true,
      rules: {
        name: [{ validator: checkName, trigger: "change" }],
        desp: [{ validator: checkDesp, trigger: "change" }],
        price: [{ validator: checkPrice, trigger: "change" }],
        coefficient: [{ /*validator: checkCoefficicent,*/ trigger: "change" }]
      }
    };
  },
  methods: {
    noshow() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    commitForm() {
      this.$emit("commitform");
    },
    changeType() {
      this.form.type = this.typeValue;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped>
.dialog-form {
  /* border: 1px solid #000; */
  text-align: center;
}
</style>