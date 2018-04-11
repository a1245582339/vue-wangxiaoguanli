<template>
    <div>
 <!-- 弹出框***************************************************** -->
    <el-dialog title="预览" :visible.sync="dialogFormVisible" center>
       

       <div class="news-article" ></div>
        
    </el-dialog>
  
    </div>
</template>

<script>
import VideoPlayer from "vue-video-player";
import $ from "jquery";
export default {
  props: {
    articleUrl: String
  },
  computed: {},
  data() {
    var vm = this;
    console.log("vm.vedioUrl", vm.articleUrl);
    return {
      dialogFormVisible: false
    };
  },
  methods: {
    noshow() {
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.dialog-form {
  /* border: 1px solid #000; */
  text-align: center;
}
</style>