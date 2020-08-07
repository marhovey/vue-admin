<template>
  <el-menu
    class="el-menu-nav"
    background-color="#001529"
    text-color="#ffffffa6"
    :collapse="collapse"
    :default-active="$route.path"
    active-text-color="#ffffff"
  >
    <template v-for="route of navRoutes">
      <el-menu-item @click="changePage(route.path)" v-if="!route.children" :key="route.id" :index="route.path"><i :class="route.icon"></i><span slot="title">{{route.name}}</span></el-menu-item>
      <el-submenu v-if="route.children" :key="route.id" :index="route.name">
        <template slot="title">
          <i :class="route.icon"></i>
          <span slot="title">{{route.name}}</span>
        </template>
        <el-menu-item @click="changePage(route.path + child.path)" v-for="child in route.children" :key="child.id" :index="route.path + child.path"><span slot="title">{{child.name}}</span></el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import {navRoutes} from '../router/navRoutes';

export default {
  name: 'navMenu',
  props: {
    collapse: Boolean
  },
  data() {
    return {
      navRoutes
    }
  },
  methods: {
    changePage(path) {
      this.$router.push({path: path})
    }
  }
}
</script>
<style lang="less">
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
.el-menu-item:hover,
.el-submenu__title:hover{
  color: #ffffff !important;
}
.el-menu-item.is-active{
  background-color: #409eff !important;
}
</style>