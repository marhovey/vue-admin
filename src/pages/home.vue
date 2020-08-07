<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6">
        <div class="grid-content">
          <div id="liquid"></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6">
        <div class="grid-content">
          <div id="gauge"></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6">
        <div class="grid-content">
          <div id="areaPlot"></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6">
        <div class="grid-content">
          <div id="progress"></div>
        </div>
      </el-col>
    </el-row>
    <div class="data-center">
      <div id="line"></div>
    </div>
    <div class="data-center">
      <div id="pie"></div>
    </div>
  </div>
</template>

<script>
import { Liquid, Gauge, Area, Progress, Line, Pie } from '@antv/g2plot';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  mounted() {
    this.renderLiquid()
    this.renderGuage()
    this.renderArea()
    this.renderProgress()
    this.renderLine()
    this.renderPie()
  },
  methods: {
    renderLiquid() {
      const liquidPlot = new Liquid('liquid', {
        min: 0,
        width: 200,
        forceFit: true,
        height: 200,
        max: 100,
        value: 68,
      });
      liquidPlot.render();
    },
    renderGuage() {
      const gaugePlot = new Gauge('gauge', {
        value: 64,
        min: 0,
        max: 100,
        width: 200,
        forceFit: true,
        height: 200,
        range: [0, 25, 50, 75, 100],
        color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
      });
      gaugePlot.render();
    },
    renderArea() {
      const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
      const areaPlot = new Area('areaPlot', {
            data,
            xField: 'year',
            yField: 'value',
            width: 200,
            forceFit: true,
            height: 200,
          });
      areaPlot.render();
    },
    renderProgress() {
      const progress = new Progress('progress', {
        percent: 0.5,
        width: 200,
        forceFit: true,
        height: 200
      });
      progress.render();
    },
    renderLine() {
      const data = [
        {
          date: '2018/8/1',
          type: 'download',
          value: 4623,
        },
        {
          date: '2018/8/1',
          type: 'register',
          value: 2208,
        },
        {
          date: '2018/8/1',
          type: 'bill',
          value: 182,
        },
        {
          date: '2018/8/2',
          type: 'download',
          value: 6145,
        },
        {
          date: '2018/8/2',
          type: 'register',
          value: 2016,
        },
        {
          date: '2018/8/2',
          type: 'bill',
          value: 257,
        },
        {
          date: '2018/8/3',
          type: 'download',
          value: 508,
        },
        {
          date: '2018/8/3',
          type: 'register',
          value: 2916,
        },
        {
          date: '2018/8/3',
          type: 'bill',
          value: 289,
        },
        {
          date: '2018/8/4',
          type: 'download',
          value: 6268,
        },
        {
          date: '2018/8/4',
          type: 'register',
          value: 4512,
        },
        {
          date: '2018/8/4',
          type: 'bill',
          value: 428,
        },
        {
          date: '2018/8/5',
          type: 'download',
          value: 6411,
        },
        {
          date: '2018/8/5',
          type: 'register',
          value: 8281,
        },
        {
          date: '2018/8/5',
          type: 'bill',
          value: 619,
        },
        {
          date: '2018/8/6',
          type: 'download',
          value: 1890,
        },
        {
          date: '2018/8/6',
          type: 'register',
          value: 2008,
        },
        {
          date: '2018/8/6',
          type: 'bill',
          value: 87,
        },
        {
          date: '2018/8/7',
          type: 'download',
          value: 4251,
        },
        {
          date: '2018/8/7',
          type: 'register',
          value: 1963,
        },
        {
          date: '2018/8/7',
          type: 'bill',
          value: 706,
        },
        {
          date: '2018/8/8',
          type: 'download',
          value: 2978,
        },
        {
          date: '2018/8/8',
          type: 'register',
          value: 2367,
        },
        {
          date: '2018/8/8',
          type: 'bill',
          value: 387,
        },
        {
          date: '2018/8/9',
          type: 'download',
          value: 3880,
        },
        {
          date: '2018/8/9',
          type: 'register',
          value: 2956,
        },
        {
          date: '2018/8/9',
          type: 'bill',
          value: 488,
        },
        {
          date: '2018/8/10',
          type: 'download',
          value: 3606,
        },
        {
          date: '2018/8/10',
          type: 'register',
          value: 678,
        },
        {
          date: '2018/8/10',
          type: 'bill',
          value: 507,
        },
        {
          date: '2018/8/11',
          type: 'download',
          value: 4311,
        },
        {
          date: '2018/8/11',
          type: 'register',
          value: 3188,
        },
        {
          date: '2018/8/11',
          type: 'bill',
          value: 548,
        },
        {
          date: '2018/8/12',
          type: 'download',
          value: 4116,
        },
        {
          date: '2018/8/12',
          type: 'register',
          value: 3491,
        },
        {
          date: '2018/8/12',
          type: 'bill',
          value: 456,
        },
        {
          date: '2018/8/13',
          type: 'download',
          value: 6419,
        },
        {
          date: '2018/8/13',
          type: 'register',
          value: 2852,
        },
        {
          date: '2018/8/13',
          type: 'bill',
          value: 689,
        },
        {
          date: '2018/8/14',
          type: 'download',
          value: 1643,
        },
        {
          date: '2018/8/14',
          type: 'register',
          value: 4788,
        },
        {
          date: '2018/8/14',
          type: 'bill',
          value: 280,
        },
        {
          date: '2018/8/15',
          type: 'download',
          value: 445,
        },
        {
          date: '2018/8/15',
          type: 'register',
          value: 4319,
        },
        {
          date: '2018/8/15',
          type: 'bill',
          value: 176,
        },
      ];
      const linePlot = new Line('line', {
        title: {
          visible: true,
          text: '多折线图',
        },
        description: {
          visible: true,
          text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势。',
        },
        padding: 'auto',
        forceFit: true,
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
          label: {
            // 数值格式化为千分位
            formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
          },
        },
        legend: {
          position: 'right-top',
        },
        seriesField: 'type',
        responsive: true,
      });
      linePlot.render();
    },
    renderPie() {
      const data = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其它',
          value: 5,
        },
      ];

      const piePlot = new Pie('pie', {
        forceFit: true,
        title: {
          visible: true,
          text: '饼图-图形标签蜘蛛布局',
        },
        description: {
          visible: true,
          text:
            '当把饼图label的类型设置为spider时，标签分为两组，在图表两侧拉线对齐显示。一般来说，蜘蛛布局的label更不容易相互遮挡。',
        },
        radius: 0.8,
        data,
        angleField: 'value',
        colorField: 'type',
        label: {
          visible: true,
          type: 'spider',
        },
      });
      piePlot.render();
    }
  }
}
</script>

<style scoped lang="less">
.home{
  background-color: #f0f2f5;
  .grid-content{
    background-color: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
  }
  .data-center{
    background-color: #ffffff;
    margin-bottom: 24px;
  }
}
</style>