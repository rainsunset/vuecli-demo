import { getParams } from '@/libs/util'

const MENU_MAP = {
  super_admin:[
    { path: '', name: 'doc', meta: { title: '文档', href: 'https://lison16.github.io/iview-admin-doc/#/', icon: 'ios-book' } },
    { path: '/join', name: 'join',
      children: [
        { path: 'join_page', name: 'join_page', meta: { icon: '_qq', title: 'QQ群' }}
      ]
    },
    { path: '/components', name: 'components', meta: { icon: 'logo-buffer', title: '组件' },
      children: [
        { path: 'count_to_page', name: 'count_to_page', meta: { icon: 'md-trending-up', title: '数字渐变' } },
        { path: 'tables_page', name: 'tables_page', meta: { icon: 'md-grid', title: '多功能表格' } },
        { path: 'split_pane_page', name: 'split_pane_page', meta: { icon: 'md-pause', title: '分割窗口' } },
        { path: 'markdown_page', name: 'markdown_page', meta: { icon: 'logo-markdown', title: 'Markdown编辑器' }},
        { path: 'editor_page', name: 'editor_page', meta: { icon: 'ios-create', title: '富文本编辑器' }},
        { path: 'icons_page', name: 'icons_page', meta: { icon: '_bear', title: '自定义图标' }}
      ]
    },
    { path: '/update', name: 'update', meta: { icon: 'md-cloud-upload', title: '数据上传' },
      children: [
        { path: 'update_table_page', name: 'update_table_page', meta: { icon: 'ios-document', title: '上传Csv' }},
        { path: 'update_paste_page', name: 'update_paste_page', meta: { icon: 'md-clipboard', title: '粘贴表格数据' }}
      ]
    },
    { path: '/directive', name: 'directive', meta: { hide: true },
      children: [
        { path: 'directive_page', name: 'directive_page', meta: { icon: 'ios-navigate', title: '指令' } }
      ]
    },
    { path: '/multilevel', name: 'multilevel', meta: { icon: 'md-menu', title: '多级菜单' },
      children: [
        { path: 'level_2_1', name: 'level_2_1', meta: { icon: 'arrow-graph-up-right', title: '二级-1' }},
        { path: 'level_2_2', name: 'level_2_2', meta: { access: ['super_admin'], icon: 'arrow-graph-up-right', showAlways: true, title: '二级-2' },
          children: [
            { path: 'level_2_2_1', name: 'level_2_2_1', meta: { icon: 'arrow-graph-up-right', title: '三级' }}
          ]
        },
        { path: 'level_2_3', name: 'level_2_3', meta: { icon: 'arrow-graph-up-right', title: '二级-3' }},
      ]
    },
    { path: '/whao', name: 'whao',
      children: [
        { path: 'whao-table', name: 'WhaoTable', meta: { icon: 'ios-bonfire', title: 'whtest' }}
      ]
    }
  ],
  admin:[
      { path: '', name: 'doc', meta: { title: '文档', href: 'https://lison16.github.io/iview-admin-doc/#/', icon: 'ios-book' } },
      { path: '/join', name: 'join',
        children: [
        { path: 'join_page', name: 'join_page', meta: { icon: '_qq', title: 'QQ群' }}
      ]
      },
      { path: '/components', name: 'components', meta: { icon: 'logo-buffer', title: '组件' },
        children: [
          { path: 'count_to_page', name: 'count_to_page', meta: { icon: 'md-trending-up', title: '数字渐变' }},
          { path: 'tables_page', name: 'tables_page', meta: { icon: 'md-grid', title: '多功能表格' }},
          { path: 'split_pane_page', name: 'split_pane_page', meta: { icon: 'md-pause', title: '分割窗口' }},
          { path: 'markdown_page', name: 'markdown_page', meta: { icon: 'logo-markdown', title: 'Markdown编辑器' }},
          { path: 'editor_page', name: 'editor_page', meta: { icon: 'ios-create', title: '富文本编辑器' }},
          { path: 'icons_page', name: 'icons_page', meta: { icon: '_bear', title: '自定义图标' }}
        ]
      }
      ],
  common:[
    { path: '/update', name: 'update', meta: { icon: 'md-cloud-upload', title: '数据上传' },
      children: [
        { path: 'update_table_page', name: 'update_table_page', meta: { icon: 'ios-document', title: '上传Csv' } },
        { path: 'update_paste_page', name: 'update_paste_page', meta: { icon: 'md-clipboard', title: '粘贴表格数据' } }
      ]
    },
    { path: '/directive', name: 'directive', meta: { hide: true },
      children: [
        { path: 'directive_page', name: 'directive_page', meta: { icon: 'ios-navigate', title: '指令' } }
      ]
    },
    { path: '/multilevel', name: 'multilevel', meta: { icon: 'md-menu', title: '多级菜单' },
      children: [
        { path: 'level_2_1', name: 'level_2_1', meta: { icon: 'arrow-graph-up-right', title: '二级-1' } },
        { path: 'level_2_2', name: 'level_2_2', meta: { access: ['super_admin'], icon: 'arrow-graph-up-right', showAlways: true, title: '二级-2' },
          children: [
            { path: 'level_2_2_1', name: 'level_2_2_1', meta: { icon: 'arrow-graph-up-right', title: '三级' } }
          ]
        },
        { path: 'level_2_3', name: 'level_2_3', meta: { icon: 'arrow-graph-up-right', title: '二级-3' } },
      ]
    },
    { path: '/whao', name: 'whao',
      children: [
        { path: 'whao-table', name: 'WhaoTable', meta: { icon: 'ios-bonfire', title: 'whtest' } }
      ]
    }
  ]
}
export const getRouters = req => {
  const params = getParams(req.url)
  return {
    code: 200,
    data: MENU_MAP[params.token],
    msg: ''
  }
}
