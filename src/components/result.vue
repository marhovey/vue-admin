<template>
  <div class="result">
    <div class="status">
      <i v-if="icon" :class="icon"></i>
      <div v-else class="">
        <i v-if="status === 'error'" class="el-icon-error error"></i>
        <i v-if="status === 'info'" class="el-icon-info info"></i>
        <i v-if="status === 'warning'" class="el-icon-warning warning"></i>
        <i v-else class="el-icon-success success"></i>
      </div>
    </div>
    <div class="title">{{title}}</div>
    <div class="sub-title">{{subTitle}}</div>
    <div class="extra-buttons">
      <slot name="extra"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: {
    title: String,
    status: {
      type: String,
      default: 'success'
    },
    icon: String,
    subTitle: String
  }
}
</script>

<style lang="less" scoped>
.result{
  .status{
    font-size: 72px;
    line-height: 72px;
    text-align: center;
    margin-bottom: 20px;
    .error{
      color: #f56c6c;
    }
    .success{
      color: #67c23a;
    }
  }
  .title{
    color: rgba(0,0,0,.85);
    font-size: 24px;
    line-height: 44px;
    text-align: center;
  }
  .sub-title{
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
  .extra-buttons{
    display: flex;
    justify-content: center;
    margin: 30px 0 0;
  }
  .content{
    margin-top: 20px;
    padding: 20px 40px;
    background-color: #fafafa;
  }
}
</style>