<template>
    <div>
 <!-- 弹出框***************************************************** -->
    <el-dialog title="编辑模块" :visible.sync="dialogFormVisible" center>
       <el-form :model="form" label-width="30px" class="dialog-form" :rules="rules">
         <!-- <el-form-item label="修改模块" :label-width="formLabelWidth">
           <el-input v-model="form.oldname" auto-complete="off" :disabled="true"></el-input>
         </el-form-item> -->
         <el-form-item label="模块名称" :label-width="formLabelWidth" prop="name">
           <el-input v-model="form.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item   label="模块介绍" :label-width="formLabelWidth" prop="desp">
           <el-input type="textarea" autosize  v-model="form.desp" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块价格" :label-width="formLabelWidth" prop="price">
           <el-input v-model.number="form.price" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="模块系数" :label-width="formLabelWidth" prop="coefficient">
           <el-input v-model.number="form.coefficient" auto-complete="off"></el-input>
         </el-form-item>
         
       </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noshow()">取 消</el-button>
        <el-button type="primary" @click="commitForm()">确 定</el-button>
      </div>
    </el-dialog>
  
    </div>
</template>

<script>
    export default {
        props: {
           form: Object
        },
      
        data() {
            const checkName = (rule,value,callback) => {
                     if(!value) {
                       return callback(new Error('模块名不能为空'))
                     }
            };
            const checkDesp = (rule,value,callback) => {
                     if(!value) {
                       return callback(new Error('模块描述不能为空'))
                     }
            };
            const checkCoefficicent = (rule,value,callback) => {
                     if (!value) {
                              return callback(new Error('系数不能为空'));
                            }
                            setTimeout(() => {
                              if (Number.isNaN(value) ) {
                                callback(new Error('请输入数字值'));
                              } else {
                                if (value < 0) {
                                  callback(new Error('必须为正数'));
                                } else {
                                  callback();
                                }
                              }
                            }, 100);
            };
            const checkPrice = (rule, value, callback) => {
                            if (!value) {
                              return callback(new Error('价格不能为空'));
                            }
                            setTimeout(() => {
                              if (Number.isNaN(value)) {
                                callback(new Error('请输入数字值'));
                              } else {
                                if (value < 0) {
                                  callback(new Error('必须为正数'));
                                } else {
                                  callback();
                                }
                              }
                            }, 100);
            };
            return {
                 dialogFormVisible: false,
                 formLabelWidth: '80px',
                 rules: { 
                          name: [
                            {validator: checkName, trigger: 'change'}
                          ],
                          desp: [
                            { validator: checkDesp, trigger: 'change' }
                          ],
                          price: [
                            { validator: checkPrice, trigger: 'change' }
                          ],
                          coefficient: [
                            { validator: checkCoefficicent, trigger: 'change' }
                          ],
                        }
            }
        },
        methods: {
           noshow() {
               this.dialogFormVisible = !this.dialogFormVisible
           },
           commitForm() {
             this.$emit('commitform')
           }
        }
    }
</script>

<style scoped>
.dialog-form{
    
    /* border: 1px solid #000; */
    text-align: center;
}

</style>