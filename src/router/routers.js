/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    hideInMenu: true
  },
  component: () => import('@/view/login/login.vue')
};

export const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在',
        hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
};

export const page401 = {
  path: '/401',
  name: 'error_401',
  meta: {
    title: '401-权限不足',
    hideInMenu: true
  },
  component: () => import('@/view/error-page/401.vue')
};

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误',
    hideInMenu: true
  },
  component: () => import('@/view/error-page/500.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: () => import('@/view/main'),
  meta:
    { hideInMenu: true, notCache: true },
  children: [
    { path: 'home', name: 'home',title: { i18n: 'home' },meta: { hideInMenu: true, notCache: true },component: () => import('@/view/single-page/home') }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  { path: '', name: 'doc', meta: { title: '文档', href: 'https://lison16.github.io/iview-admin-doc/#/', icon: 'ios-book' } },
  { path: '/join', name: 'join', component: () => import('@/view/main'),
    children: [
      { path: 'join_page', name: 'join_page', meta: { icon: '_qq', title: 'QQ群' }, component: () => import( '@/view/join-page.vue') }
    ]
  },
  { path: '/components', name: 'components', meta: { icon: 'logo-buffer', title: '组件' }, component: () => import('@/view/main'),
    children: [
      { path: 'count_to_page', name: 'count_to_page', meta: { icon: 'md-trending-up', title: '数字渐变' }, component: () => import('@/view/components/count-to/count-to.vue') },
      { path: 'tables_page', name: 'tables_page', meta: { icon: 'md-grid', title: '多功能表格' }, component: () => import('@/view/components/tables/tables.vue') },
      { path: 'split_pane_page', name: 'split_pane_page', meta: { icon: 'md-pause', title: '分割窗口' }, component: () => import('@/view/components/split-pane/split-pane.vue') },
      { path: 'markdown_page', name: 'markdown_page', meta: { icon: 'logo-markdown', title: 'Markdown编辑器' }, component: () => import('@/view/components/markdown/markdown.vue') },
      { path: 'editor_page', name: 'editor_page', meta: { icon: 'ios-create', title: '富文本编辑器' }, component: () => import('@/view/components/editor/editor.vue') },
      { path: 'icons_page', name: 'icons_page', meta: { icon: '_bear', title: '自定义图标' }, component: () => import('@/view/components/icons/icons.vue') }
    ]
  },
  { path: '/update', name: 'update', meta: { icon: 'md-cloud-upload', title: '数据上传' }, component: () => import('@/view/main'),
    children: [
      { path: 'update_table_page', name: 'update_table_page', meta: { icon: 'ios-document', title: '上传Csv' }, component: () => import('@/view/update/update-table.vue') },
      { path: 'update_paste_page', name: 'update_paste_page', meta: { icon: 'md-clipboard', title: '粘贴表格数据' }, component: () => import('@/view/update/update-paste.vue') }
    ]
  },
  { path: '/directive', name: 'directive', meta: { hide: true }, component:  () => import('@/view/main'),
    children: [
      { path: 'directive_page', name: 'directive_page', meta: { icon: 'ios-navigate', title: '指令' }, component: () => import('@/view/directive/directive.vue') }
    ]
  },
  { path: '/multilevel', name: 'multilevel', meta: { icon: 'md-menu', title: '多级菜单' }, component: () => import('@/view/main'),
    children: [
      { path: 'level_2_1', name: 'level_2_1', meta: { icon: 'arrow-graph-up-right', title: '二级-1' }, component: () => import('@/view/multilevel/level-2-1.vue') },
      { path: 'level_2_2', name: 'level_2_2', meta: { access: ['super_admin'], icon: 'arrow-graph-up-right', showAlways: true, title: '二级-2' }, component: () => import( '@/components/parent-view'),
        children: [
          { path: 'level_2_2_1', name: 'level_2_2_1', meta: { icon: 'arrow-graph-up-right', title: '三级' }, component: () => import('@/view/multilevel/level-2-2/level-3-1.vue') }
        ]
      },
      { path: 'level_2_3', name: 'level_2_3', meta: { icon: 'arrow-graph-up-right', title: '二级-3' }, component: () => import('@/view/multilevel/level-2-3.vue') },
    ]
  },
  { path: '/whao', name: 'whao', component: () => import( '@/view/main'),
    children: [
      { path: 'whao-table', name: 'WhaoTable', meta: { icon: 'ios-bonfire', title: 'whtest' }, component: () => import('@/view/whao/whao-table.vue') }
    ]
  }
]

// export const appRouter = []

export const routes = [
  loginRouter,
  otherRouter,
  ...appRouter,
  page500,
  page401,
  page404
]

