<template>
  <div class="desc-item">
    <div class="desc-item-label">{{label}}：</div>
    <div class="desc-item-value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'desc-item',
  props: {
    label: String
  }  
}
</script>

<style lang="less" scoped>
.desc-item{
  display: flex;
  padding: 10px;
  .desc-item-label{
    color: rgba(0,0,0,.85);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .desc-item-value{
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 20px;
  }
}
</style>