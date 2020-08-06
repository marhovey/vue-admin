<template>
  <el-container>
    <el-aside
      width="auto"
      class="page-aside">
      <div class="brand">
        <i class="el-icon-picture"></i>
        <span :class="{ hide: collapse}" class="brand-name">Brand</span>
      </div>
      <el-menu
        class="el-menu-nav"
        background-color="#001529"
        text-color="#ffffffa6"
        :collapse="collapse"
        :default-active="activeIndex"
        active-text-color="#ffffff"
      >
        <el-menu-item index="1"><i class="el-icon-s-data"></i><span slot="title">首页</span></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-document"></i><span slot="title">表单</span></template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-order"></i><span slot="title">列表</span></template>
          <el-menu-item-group>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-s-custom"></i><span slot="title">账户</span></template>
          <el-menu-item-group>
            <el-menu-item index="4-1">个人中心</el-menu-item>
            <el-menu-item index="4-2">个人设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="top-header">
        <div @click="handleFold" class="fold-icon">
          <i :class="{'el-icon-s-unfold': collapse, 'el-icon-s-fold': !collapse}"></i>
        </div>
        <div class="top-place">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
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
      <el-header class="tabs">
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
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
    .brand{
      padding: 20px;
      font-size: 24px;
      color: #ffffff;
      .brand-name{
        transition: all .3s;
        opacity: 1;
        display: inline-block;
        &.hide{
          opacity: 0;
          width: 0;
        }
      }
    }
    .el-menu-nav{
      border: none;
      &:not(.el-menu--collapse) {
        width: 200px;
      }
      .el-menu-item,
      .el-submenu__title {
        i {
          color: inherit;
        }
      }
    }
  }
  .el-menu-item:hover,
  .el-submenu__title:hover{
    color: #ffffff !important;
  }
  .el-menu-item.is-active{
    background-color: #409eff !important;
  }
  .top-header{
    display: flex;
    background-color: #ffffff;
    align-items: center;
    line-height: 60px;
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
      height: 60px;
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
</style>