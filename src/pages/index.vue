<template>
  <el-container>
    <el-aside
      width="auto"
      class="page-aside">
      <NavMenu :collapse="collapse" />
    </el-aside>
    <el-container>
      <el-header class="top-header">
        <div @click="handleFold" class="fold-icon">
          <i :class="{'el-icon-s-unfold': collapse, 'el-icon-s-fold': !collapse}"></i>
        </div>
        <div class="top-place">
        </div>
        <div class="top-menu">
          <div class="avatar">
            <el-dropdown trigger="click">
              <span class="avatar-info">
                <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" class="">
                <span>username</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                <el-dropdown-item divided icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-header class="top-nav">
      </el-header>
      <el-main class="container">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '../components/navMenu';
export default {
  name: 'Index',
  components: {
    NavMenu
  },
  data: () => {
    return {
      collapse: false,
      activeIndex: '1'
    }
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    handleFold() {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style lang="less">
  .page-aside{
    height: 100vh;
    background-color: #001529;
    overflow: hidden auto;
  }
  .top-header{
    display: flex;
    background-color: #ffffff;
    align-items: center;
    height: 48px !important;
    line-height: 48px;
    position: relative;
    z-index: 2;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .fold-icon{
      font-size: 20px;
      color: rgba(0, 0, 0, .85);
      cursor: pointer;
    }
    .top-place{
      flex: 1;
      padding-left: 24px;
    }
    .top-menu{
      display: flex;
      height: 48px;
      .avatar{
        img{
          width: 24px;
          padding: 0 8px;
        }
        cursor: pointer;
        .avatar-info {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .top-nav{
    height: 32px !important;
    border-bottom: 1px solid rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    position: relative;
    z-index: 1;
    overflow-x: auto;
  }
  .container{
    height: calc(100vh - 92px);
    .page-content{
      background-color: #ffffff;
      padding: 24px;
    }
  }
</style>