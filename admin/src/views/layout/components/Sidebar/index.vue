<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" :default-openeds='[showname]'   :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  // data 的数据是为了让导航默认展开
  // data() {
  //     return {
  //         showname: 'Example'
  //     }
  // },
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scope> 
</style>
