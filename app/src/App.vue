<template>
  

<div id="app" style="height: 100%">
    <header>敏行报价系统</header>
    <main>
      <el-form ref="form" :model="form">
<!-- *********第一步***************** -->
      <section v-if="step === 1">
          <div class="step">
              <p class="step-title">第一步：选择服务器类型和人数</p>
              <p class="title">1、选择服务器类型</p>
              <el-radio-group v-model="form.servertype">
                <el-radio  label="1"  border>单服务器版</el-radio>
                <el-radio  label="2"  border>高可用版</el-radio>
                <el-radio  label="3"  border>集群版</el-radio>
              </el-radio-group>
          </div>
          <div class="step">
            <p class="title">2、所选服务器使用人数范围</p>
            <span v-show="form.servertype === '0'" style="padding-left: 40px">请选择服务器类型</span>
          <el-radio-group v-model="form.personnum">
                <el-radio v-show="personnum1" label="1" border>100~1000人</el-radio>
                <el-radio v-show="personnum2" label="2" border>1001～10000</el-radio> 
                <el-radio v-show="personnum2" label="3" border>10001～100000</el-radio>
                <el-radio v-show="form.servertype ===  '3'" label="4" border>100001以上</el-radio> 
          </el-radio-group>
          </div>
          <div class="thirdstep step">
                <p class="title">3、请输入使用人数</p>
                  <el-form-item
                    label=""
                    prop="truenum"
                    :rules="[
                      { required: true, message: '使用人数不能为空'},
                      { type: 'number', message: '使用人数必须为数字值'}
                    ]"
                  >
                <el-input label='请输入使用人数'  v-model.number="form.truenum" style="width: 300px"></el-input>
             </el-form-item>
          </div>
          <div class="btn-wrap">
            <el-button    type="primary" @click="nestStep" :disabled='firststepBtn'>下一步</el-button>
          </div>
      </section>
<!-- *************第二步************** -->
      <section v-if="step === 2">
          <p class="step-title">第二步：选择基础模块</p>
          <div class="firststep step">
              <p class="title">所有基础模块</p>
               <button class="base-box base-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 0"   disabled  :label="item.id" border>{{item.name}}</button>
             <!-- <el-checkbox-group v-model="form.haha">
                <el-checkbox class="base-box" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 0"  checked="checked" disabled  :label="item.id" border>{{item.name}}</el-checkbox>
            </el-checkbox-group> -->
          </div>
          <div class="btn-wrap">
            <el-button type="primary" @click="lastStep">上一步</el-button>
            <el-button type="primary" @click="nestStep">下一步</el-button>
          </div>
      </section>
<!-- ************第三步*************** -->
        <section v-if="step === 3">
      <p class="step-title">第三步：可选模块</p>
      <div class="firststep step">
           <p class="title">可选模块(至少选一项)</p>
        <el-checkbox-group v-model="form.choosemodules">
          <el-checkbox class="base-box" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 1"    :label="item.id" border>{{item.name}}</el-checkbox>
         </el-checkbox-group>
      </div>
     
       <div class="btn-wrap">
        <el-button type="primary" @click="lastStep">上一步</el-button>
        <el-button type="primary" @click="nestStep">下一步</el-button>
       </div>

        </section>
<!-- **************第四步****************** -->
    <section v-if="step === 4">
      <p class="step-title">第四步：独立模块</p>
      <div class="firststep step">
           <p class="title">所有独立的模块</p>
         <el-checkbox-group v-model="form.ownmodules">
           <el-checkbox class="base-box"  v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 2"    :label="item.id" border>{{item.name}}</el-checkbox>
         </el-checkbox-group>
      </div>
    
       <div class="btn-wrap">
          <el-button type="primary" @click="lastStep">上一步</el-button>
          <el-button type="primary" @click="commitOrder">提交</el-button>
       </div>
    </section>

    <!-- ************第五步****************** -->
      <section v-if="step === 5">
      <div class="step" id="pdf-order">

            <p class="order-head">订单详情</p>
            <p class="order-title">基础模块</p>
         
             <button class="base-box base-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 0"  >{{item.name}}</button>
       
             <p class="order-title">可选模块</p>
         
             <button class="base-box base-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 1 && showMoudelsC(item)"  >{{item.name}}</button>

             <p class="order-title">独立子模块</p>
         
             <button class="base-box base-item" v-for=" item in alllist" :key="item.id"   v-if="item.category_id === 2 && showMoudelsO(item)"  >{{item.name}}</button>

        
              <p class="order-text" style="margin-top:60px"><span>订单编号：</span> {{order_no}}</p>
              <p class="order-text"><span>订单总金额：</span>{{totalPrices}}元</p>
            
      </div>
    
       <div class="btn-wrap">
          <el-button type="primary" @click="lastStep">上一步</el-button>
          <el-button type="primary" @click="getPdf">下载</el-button>
       </div>
    </section>
</el-form>
    </main>
   

</div>

</template>
<script>
import {getList, addOrder} from '../src/api/axios'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
  export default {
  created() {
    this.fetchData()
  },
    data () {
      return {
        form: {
           servertype: '0',
           personnum: '',
           truenum: '',
           basemodules: [],
           choosemodules: [],
           ownmodules: [],
           haha: []
        },
        step: 1,
        alllist: '',
        totalPrices: '',
        order_no: '',
      };
    },
    computed: {
          firststepBtn() {
            let btn1 = this.form.personnum && this.form.servertype && this.form.truenum;
            return btn1 ? false : true ; 
          },
          personnum1() {
            let num1 =  this.form.servertype === '1' || this.form.servertype === '2' || this.form.servertype === '3';
            return num1 ? true : false;
          },
          personnum2() {
            let num1 =  this.form.servertype === '2' || this.form.servertype === '3';
            return num1 ? true : false;
          }
    },
    methods: {
        lastStep(){
            this.step--;
            console.log(this.step)
        },
        nestStep(){
            this.step++;
            console.log(this.step)
        },
        fetchData() {
          this.listLoading = true
          getList().then(response => {
            let alldata = response.data.data;
            alldata.forEach(item => {
                 if(item.category_id === 0){
                   this.form.basemodules.push(item.id)
                 }
            });
            this.alllist = alldata;
            console.log('请求的所有模块数据=>>>',alldata)
          })
        },
        commitOrder() {
          let order = this.form;
          console.log('提交订单:',order)
          addOrder(order).then(response => {
            console.log('返回的订单编号和订单总价=>>>',response.data)
            this.step++;
            this.order_no = response.data.order_no;
            this.totalPrices = response.data.sum;

          })
        },
        showMoudelsC(item) {
            return this.form.choosemodules.indexOf(item.id) !== -1
        },
        showMoudelsO(item) {
            return this.form.ownmodules.indexOf(item.id) !== -1
        },
        getPdf() {
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
              PDF.save(_this.order_no + '.pdf')
              
            });
          
            // html2Canvas()
          }
    }
  }
</script>
<style>
html,body{
    height: 100%!important;
    background-color: #E9EEF3;
  
}
#app{
   height: 100%;
   background-color: #E9EEF3;
   position: relative;
}
header{
  text-align: center;
  line-height: 60px;
  background-color:#B3C0D1;
  font-size: 20px;
  color: #000;
}
main{
  margin: 0 auto 200px;
  padding: 30px;
  width: 60%;
  background-color: #E9EEF3;
  min-height: 70%;

}
section{
   position: relative;
   border: 1px solid #ccc;
   padding: 30px 30px;
  
   min-height: 460px;
}

.step-title{
   font-size: 18px;
   color: #000;
   text-align: left;
   line-height: 30px;
}
.base-box{
  width: 30%;
  color: #000;
  text-align: center;
  margin: 5px 5px!important;
  box-sizing: border-box;
  /* background-color: #fff; */
}
.base-item{
  height: 40px;
  padding: 5px;
  cursor: not-allowed;

}
.btn-wrap{
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 100%;
  text-align: center;
}
.title{
  line-height: 36px;
  font-size: 16px;
  color: rgb(42, 17, 82);
}
.order-head{
  text-align: center;
  font-size: 20px;
}
.order-title{
  line-height: 24px;
  font-size: 18px;
}
.order-text{
   text-align: left;
   font-size: 18px;
}
</style>