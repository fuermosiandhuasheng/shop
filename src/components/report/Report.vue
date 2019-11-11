<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 为echarts准备一个盒子 -->
      <div id="main" style="width:600px;height:400px;">

      </div>
    </el-card>
  </div>
</template>

<script>
// 导入echarts
import echarts from 'echarts'
import _ from 'lodash'
export default {
  data() {
    return {
      // 需要合并的数据
      options: {
        title: {
          text: '用户来源'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  created() {

  },
  methods: {

  },
  // dom创建之后在初始化
  async mounted() {
    // 基于基本好的dom 初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))
    // 获取数据
    const { data: res } = await this.$http.get('reports/type/1')
    if (res.meta.status !== 200) {
      return this.$message.error('获取折线图数据失败！')
    }
    // 合并对象
    const result = _.merge(res.data, this.options)
    // 5. 展示数据
    myChart.setOption(result)
  }
}
</script>

<style lang="less" scoped>
</style>
