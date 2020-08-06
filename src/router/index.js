import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/pages/index');
const Login = () => import('@/pages/login');
const Home = () => import('@/pages/home')

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
      }
    ]
  }
]
export default new Router({
  routes
})