export const navRoutes = [
  {
    name: '首页',
    path: '/index',
    id: 1
  },
  {
    name: '表格',
    path: '/index',
    id: 2,
    children: [
      {
        id: 21,
        name: '基础表格',
        path: '/baseForm'
      },
      {
        id: 22,
        name: '分步表格',
        path: '/stepForm'
      }
    ]
  },
  {
    name: '列表',
    path: '/index',
    id: 3,
    children: [
      {
        id: 31,
        name: '标准列表',
        path: '/'
      },
      {
        id: 32,
        name: '卡片列表',
        path: '/'
      }
    ]
  },
  {
    name: '账户',
    path: '/index',
    id: 4,
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