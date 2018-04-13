<template>
  <div class="app-container" v-loading.body="listLoading">

   <Moduletable :list="list"  :update-row='updateRow' :delete-row='deleteRow'></Moduletable>
   <Dialogtable  :form="form" ref="dial" @commitform='commitForm'></Dialogtable>
  
  </div>

</template>

<script>
import { getCList,getAll } from '@/api/table'
import { update , dellist} from '@/api/do'
import Moduletable from '@/components/table/table'
import Dialogtable from '@/components/tabledialog'
export default {
  components: {
     Moduletable,
     Dialogtable
  },
  data() {
    return {
      list: null,
      listLoading: true,
      type: '手机',
      form: {
        name: '',
        price: '',
        coefficient: '',
        desp: '',
        oldname: ''
       }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 获取数据
    fetchData() {
      this.listLoading = true
      getCList().then(response => {
        console.log(response)
        this.list = response.data
        this.listLoading = false
      })
    },
    // 删除模块
    deleteRow(index, rows) {
      let data = rows[index].name;
      console.log("要删除的模块name:",data)
      dellist(data).then(response => {
        console.log(response)
        if(response.code == 20000) {
              rows.splice(index, 1);
              this.$message({
                message: '删除成功',
                type: 'success'
              });
        }else{
              this.$message({
                  message: '删除失败',
                  type: 'success'
              });
        } 
    }).catch(err => {
       this.$message({
          message: '删除失败',
          type: 'success'
        });
    })
    },
    // 修改
    updateRow(index,rows) {
      // 获取当前行的内容  rows[index]
        // console.log(rows[index])
         this.form.name = rows[index].name;
         this.form.oldname = rows[index].name;
         this.form.price = rows[index].price;
         this.form.coefficient = rows[index].coefficient;
         this.form.desp = rows[index].desp;
         this.form.category_id = rows[index].category_id;
         this.$refs.dial.noshow();
         console.log('执行更改程序')
    },
    commitForm(){
      // 更改模块的表单提交
        console.log(this.form);
        let data = this.form;
        update(data).then(response => {
           this.$refs.dial.noshow();
           this.fetchData()
           this.$message({
              message: '修改成功',
              type: 'success'
           });
        })

    }
  }
}
</script>
