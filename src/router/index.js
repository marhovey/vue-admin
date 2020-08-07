import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/pages/index');
const Login = () => import('@/pages/login');
const Home = () => import('@/pages/home');
const BaseForm = () => import('@/pages/baseForm');
const StepForm = () => import('@/pages/stepForm');
const BaseList = () => import('@/pages/baseList');
const CardList = () => import('@/pages/cardList');
const Setting = () => import('@/pages/setting');
const UserCenter = () => import('@/pages/userCenter');

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: Login,
    name: '登录'
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '',
        component: Home,
        name: '首页'
      },
      {
        path: 'baseForm',
        component: BaseForm,
        name: '基础表格'
      },
      {
        path: 'stepForm',
        component: StepForm,
        name: '分步表格'
      },
      {
        path: 'userCenter',
        component: UserCenter,
        name: '个人中心'
      },
      {
        path: 'setting',
        component: Setting,
        name: '设置'
      },
      {
        path: 'baseList',
        component: BaseList,
        name: '基础列表'
      },
      {
        path: 'cardList',
        component: CardList,
        name: '卡片表格'
      }
    ]
  }
]
export default new Router({
  routes
})