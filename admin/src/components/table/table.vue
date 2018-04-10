<template>
  <div class="app-container">
    <el-table :data="list"  border fit highlight-current-row >
     <!-- 序列号 -->
      <el-table-column align="center" label='序号' width="95">
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
      <!-- 预览 -->
      <el-table-column  v-if="label.canPreview" label="预览" width="110" align="center">
        <template slot-scope="scope">
          <el-button
          @click="preview(scope.row.coefficient)"
          type="text"
          size="small">
          预览
        </el-button>
        </template>
      </el-table-column>
      <!-- 修改 -->
      <el-table-column class-name="status-col" label="操作" width="110" align="center">
      <template slot-scope="scope">
        <el-button
          @click="updateRow(scope.$index, list)"
          type="text"
          size="small">
          编辑
        </el-button>
         <el-button
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
          <span>{{scope.row.reg_time}}</span>
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
    dialogFormVisible: Boolean
  },
  data() {
    return {
      formLabelWidth: "120px",
    };
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>