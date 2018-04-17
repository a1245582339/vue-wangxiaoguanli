<template>
  <div class="app-container">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="收藏夹ID" width="180">
      </el-table-column>
      <el-table-column prop="time" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="name" :label="label" width="400">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="deleteRow(scope.$index, scope.row ,label)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  props: {
    tableData: Array,
    deleteRow: Function,
    label:String
  },
  data() {
    return {
      
    };
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>