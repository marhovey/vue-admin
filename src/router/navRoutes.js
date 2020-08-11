export const navRoutes = [
  {
    name: '首页',
    path: '/index',
    id: 1,
    icon: 'el-icon-s-data'
  },
  {
    name: '表单页',
    path: '/index',
    id: 2,
    icon: 'el-icon-document',
    children: [
      {
        id: 21,
        name: '基础表单',
        path: '/baseForm'
      },
      {
        id: 22,
        name: '分步表单',
        path: '/stepForm'
      }
    ]
  },
  {
    name: '列表页',
    path: '/index',
    id: 3,
    icon: 'el-icon-coin',
    children: [
      {
        id: 31,
        name: '查询表格',
        path: '/tableList'
      },
      {
        id: 32,
        name: '基础列表',
        path: '/baseList'
      },
      {
        id: 33,
        name: '卡片列表',
        path: '/cardList'
      }
    ]
  },
  {
    name: '账户',
    path: '/index',
    id: 4,
    icon: 'el-icon-user',
    children: [
      {
        id: 41,
        name: '个人中心',
        path: '/userCenter'
      },
      {
        id: 42,
        name: '个人设置',
        path: '/setting'
      }
    ]
  }
]