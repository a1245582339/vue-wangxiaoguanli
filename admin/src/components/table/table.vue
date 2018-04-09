<template>
  <div class="app-container">
    <el-table :data="list"   border fit highlight-current-row >
     <!-- ID列表 -->
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <!-- 模块名称 -->
      <el-table-column label="模块名称" width="110">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <!-- 模块描述 -->
      <el-table-column label="模块描述"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.desp}}</span>
        </template>
      </el-table-column>
      <!-- 价格 -->
      <el-table-column label="价格" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <!-- 模块系数 -->
     <el-table-column label="模块系数" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.coefficient}}
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
      <!-- <el-table-column align="center" prop="created_at" label="类型">
        <template slot-scope="scope"> -->
          <!-- <i class="el-icon-time"></i> -->
          <!-- <span>{{type}}</span>
        </template>
      </el-table-column> -->
    </el-table>

  </div>
</template>


<script>
    export default {
        props: {
                list: Array,
                form: Object,
                updateRow: Function,
                deleteRow: Function,
                dialogFormVisible: Boolean
        },
        data() {
            return {
                type: '手机',
                formLabelWidth: '120px'
            }
        }

    }
</script>

<style scoped>

</style>