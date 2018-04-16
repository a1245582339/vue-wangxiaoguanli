<template>
  <div class="app-container" v-loading.body="listLoading">
    <echarts :options="line"></echarts>
  </div>

</template>

<script>
import { getNewsVisitLog } from "@/api/news";
import echarts from "vue-echarts/components/ECharts";
export default {
  components: {
    echarts
  },
  data() {
    let data = [];
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      listLoading: false,
      line: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 添加新资讯
    addNews() {
      this.$refs.dial.noshow();
    },
    // 获取数据
    fetchData() {
      var vm = this;
      this.listLoading = true;
      getNewsVisitLog({ duration: 604800 }).then(response => {
        //一周秒值
        console.log(response.data);
        vm.listLoading = false;
      });
    }
  }
};
</script>
