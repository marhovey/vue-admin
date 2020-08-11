<template>
  <div class="custom-description">
    <el-row :gutter="10">
      <el-col
        v-for="item of descList"
        :key="item.key"
        :xs="rowConfig.xs"
        :md="rowConfig.md"
        :sm="rowConfig.sm"
        :lg="rowConfig.lg"
        :xl="rowConfig.xl">
        <desc-item :label="item.label">
          {{item.value}}
        </desc-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import descItem from './descItem';
export default {
  name: 'descriptions',
  props: {
    rowConfig: {
      type: Object,
      default(){
        return {
          lg: 8,
          md: 8,
          sm: 8,
          xs: 8,
          xl: 8
        }
      }
    },
    descList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    'desc-item': descItem
  }
}
</script>

<style lang="less" scoped>

</style>