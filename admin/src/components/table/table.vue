<template>
  <div class="app-container">
    <el-table :data="list"  border fit highlight-current-row >
     <!-- 序列号 -->
      <el-table-column v-if="!isMe" align="center" label='序号' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <!-- 模块ID -->
      <el-table-column v-if="label.moudleId" :label="label.moudleId" width="110">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
       <!-- 模块ID -->
      <el-table-column v-if="label.avatar" :label="label.avatar" width="110">
        <template slot-scope="scope">
          <img style="height:80px;width:80px" :src="scope.row.avatar" alt="">
        </template>
      </el-table-column>
      <!-- 模块名称 -->
      <el-table-column v-if="label.moduleName" :label="label.moduleName" width="110">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <!-- 模块描述 -->
      <el-table-column v-if="label.moduleDesp" :label="label.moduleDesp"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.desp}}</span>
        </template>
      </el-table-column>
      <!-- 模块数量 -->
      <el-table-column v-if="label.moduleCount" :label="label.moduleCount" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.count}}
        </template>
      </el-table-column>
      <!-- 价格 -->
      <el-table-column v-if="label.moudlePrice" :label="label.moudlePrice" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <!-- 模块系数 -->
     <el-table-column v-if="label.moudleCoefficient" :label="label.moudleCoefficient" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.coefficient}}
        </template>
      </el-table-column>
      <!-- 访问量 -->
     <el-table-column v-if="label.PageView" :label="label.PageView" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.pageView}}
        </template>
      </el-table-column>
      <!-- 模块手机号 -->
     <el-table-column v-if="label.moudleTel" :label="label.moudleTel" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.tel}}
        </template>
      </el-table-column>
      <!-- 模块密码 -->
     <el-table-column v-if="label.moudlePassword" :label="label.moudlePassword" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.password}}
        </template>
      </el-table-column>
      <!-- 预览 -->
      <el-table-column  v-if="label.canPreview" label="预览" width="110" align="center">
        <template slot-scope="scope">
          <el-button
          @click="preview(scope.row.url)"
          type="text"
          size="small">
          预览
        </el-button>
        </template>
      </el-table-column>
      <!-- 修改 -->
      <el-table-column v-if="!cannotEdit||!cannotDel" class-name="status-col" label="操作" width="110" align="center">
      <template slot-scope="scope">
        <el-button v-if="!cannotEdit"
          @click="updateRow(scope.$index, list)"
          type="text"
          size="small">
          编辑
        </el-button>
         <el-button v-if="currentId!=scope.row.id&&!cannotDel"
        @click.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
      </el-table-column>
      <!-- 类型 -->
      <el-table-column v-if="label.moudleType" align="center" :label="label.moudleType">
        <template slot-scope="scope">
          <span  :value="scope.row.typeVal">{{scope.row.type}}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="label.moudleCreatTime" align="center" :label="label.moudleCreatTime">
        <template slot-scope="scope">
          <span>{{scope.row.create_time}}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="label.vedio" align="center" :label="label.vedio">
        <template slot-scope="scope">
          <el-upload
          class="vedio-uploader"
          :auto-upload="true"
          :show-file-list="true"
          :on-success="VedioSuccess"
          :on-change="vedioChange"
          action="http://127.0.0.1:3000/updateCourseVedio">
          <el-button size="small" type="primary">点击上传视频</el-button>
  <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
</el-upload>
        </template>
      </el-table-column>

       <el-table-column v-if="label.moudleCheck" align="center"  :label="label.moudleCheck">
        <template slot-scope="scope">
          <el-button
          @click="check(scope.$index, list)"
          type="text"
          size="small">
          {{scope.row.ischecked}}
        </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  props: {
    list: Array,
    form: Object,
    label: Object,
    updateRow: Function,
    deleteRow: Function,
    preview:Function,
    check:Function,
    dialogFormVisible: Boolean,
    currentId:Number,
    isMe:Boolean,
    cannotEdit:Boolean,
    cannotDel:Boolean
  },
  data() {
    return {
      formLabelWidth: "120px",
    };
  },
  methods:{
    vedioChange(file){
      const name=file.name
      const isMP4 = (name.indexOf('.mp4')> -1)||(name.indexOf('.MP4')> -1)
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isMP4) {
        this.$message.error("上传视频只能是 MP4 格式!");
        return isMP4
      }
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过 10MB!");
        return isLt10M
      }
    },
    VedioSuccess(res, file) {
      //this.form.url=res.data.url
      //this.$emit("commitform");
    }
  }
};
</script>

<style scoped>

</style>