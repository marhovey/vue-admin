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
  </div>
</template>

<script>
import { Liquid, Gauge, Area, Progress } from '@antv/g2plot';

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
    }
  }
}
</script>

<style scoped lang="less">
.home{
  .grid-content{
    background-color: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
  }
}
</style>