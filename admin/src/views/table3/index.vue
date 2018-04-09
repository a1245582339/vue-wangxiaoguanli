<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
     <!-- ID列表 -->
      <el-table-column align="center" label='订单编号'>
        <template slot-scope="scope">
          {{scope.row.order_no}}
        </template>
      </el-table-column>
      <!-- 模块名称 -->
      <el-table-column label="创建时间" >
        <template slot-scope="scope">
          {{scope.row.created_at| tonumber | date-string}}
          <!-- {{scope.row.created_at}} -->
        </template>
      </el-table-column>
      <!-- 模块描述 -->
      <el-table-column label="创建者姓名"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.real_name}}</span>
        </template>
      </el-table-column>
      <!-- 价格 -->
      <el-table-column label="订单金额" align="center">
        <template slot-scope="scope">
          {{scope.row.total}}
        </template>
      </el-table-column>
      <!-- 模块系数 -->
     <el-table-column label="订单人数"  align="center">
        <template slot-scope="scope">
          {{scope.row.quantity}}
        </template>
      </el-table-column>
      <!-- 修改 -->
      <el-table-column class-name="status-col" label="操作"  align="center">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="printRow(scope.$index, list)"
          type="text"
          size="small">
          保存
        </el-button>
         <el-button
          @click.native.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
      </el-table-column>
    </el-table>
 <el-dialog title="订单详情预览" :visible.sync="ordershow" center>
      <div id="pdf-order"  v-if="ordershow" class="pdf-wrap">

             <h3 class="order-head">订单详情</h3>
             <p class="title">基础模块</p>
               <button class="btn-item" v-for=" item in baselist" :key="item.id" >{{item.name}}</button>
             <p class="title">可选模块</p>      
               <button class="btn-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 1"  >{{item.name}}</button>
             <p class="title">独立子模块</p>
               <button class="btn-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 2"  >{{item.name}}</button>
             <p><span>订单编号：</span>{{order_no}}</p>
             <p><span>订单总金额：</span>{{total}}</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ordershow=false">取 消</el-button>
        <el-button type="primary" @click="doprint">保存</el-button>
      </div>
</el-dialog>
  
  </div>
</template>

<script>
import { getOrder,orderPrint } from '@/api/table'
import { delorder } from '@/api/do'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      baselist: [],
      alllist: [],
      ordershow: false,
      total: '',
      order_no: ''

    }
  },
  created() {
    this.fetchData()
  },
  filters:{
      tonumber(v) {
          return parseInt(v);
      }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getOrder(this.listQuery).then(response => {
        console.log('订单列表=>>>',response)
        this.list = response.data  
        this.listLoading = false
      })
    },
    // 删除
    deleteRow(index, rows) {
      let data = rows[index].order_no;
      console.log("删除订单:",data)
      delorder(data).then(response => {
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
    printRow(index,rows){
       let data = rows[index].order_no;
        this.order_no = rows[index].order_no;
        this.total = rows[index].total;
       console.log('订单编号=>>>',rows[index].order_no);
       orderPrint(data).then(res => {
          //  console.log(res)
          this.baselist = res.base;
          this.alllist  = res.nobase;
          this.ordershow = true;
          console.log('非基础模块=>>>',this.alllist)
        
       })
    },
    doprint() {
            let _this = this
            
            html2Canvas(document.querySelector("#pdf-order")).then(canvas => {
                // document.body.appendChild(canvas)
              let contentWidth  = canvas.width
              let contentHeight = canvas.height
              let pageHeight    = contentWidth / 592.28 * 841.89
              let leftHeight    = contentHeight
              let position      = 0
              let imgWidth      = 555.28
              let imgHeight     = 552.28 / contentWidth * contentHeight
        
              let pageData      = canvas.toDataURL('image/jpeg', 1.0)
        
              let PDF           = new JsPDF('', 'pt', 'a4')
        
              if (leftHeight < pageHeight) {
                  PDF.addImage(pageData, 'JPEG', 20, 60, imgWidth, imgHeight)
              } else {
                  while (leftHeight > 0) {
                    PDF.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight
                    position   -= 841.89
                  if (leftHeight > 0) {
                    PDF.addPage()
                  }
              }
              }
              PDF.save(this.order_no + '.pdf')
              // setTimeout(() => {
              //    _this.ordershow = false;
              // },1000)
            });
    }
  }
}
</script>
<style scoped>
.pdf-wrap{
  /* border: 1px solid #000; */
  width: 100%;
}
.order-head{
  text-align: center;
  font-size: 18px;
}
.title{
   font-size: 16px;
}
.btn-item{
   height: 30px;
   width: 33%;
   margin: 5px 1px;
}
p{
  margin: 5px!important;
}
</style>

