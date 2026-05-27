import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '科学城集团·数智化资管系统',
  description: '科学城集团资管系统帮助中心',

  head: [
    ['link', { rel: 'icon', href: 'http://14.23.60.122:9080/sci/cloud/resources/images/favicon.ico' }]
  ],

  themeConfig: {
    siteTitle: '资管系统 ｜ 帮助中心',

    logo: {
      src: 'https://www.sci-gz.com/uploads/201029/3-2010291125252b.png',
      alt: '科学城集团 Logo'
    },

    nav: [
      { text: '首页', link: '/' },
      {
        text: '新手入门',
        items: [
          { text: '系统快速上手', link: '/getting-started/quick-start' },
          { text: '账号登录与权限', link: '/getting-started/login-permission' },
          { text: '全局搜索使用', link: '/getting-started/global-search' },
          { text: '界面总览', link: '/getting-started/interface-overview' }
        ]
      },
      {
        text: '使用系统',
        items: [
          { text: '资管任务', link: '/using-system/task-management/' },
          { text: '企业档案', link: '/using-system/enterprise-archive/enterprise-file' },
          { text: '资管数据', link: '/using-system/database/financial-db' },
          { text: '经营监测', link: '/using-system/business-monitor/dynamic-monitor' }, 
          { text: '报告工作', link: '/using-system/report-workbench' },
          { text: '资管内训', link: '/using-system/training/question-bank' },
          { text: 'AI助手', link: '/using-system/workbench/ai-assistant' }
        ]
      },
      {
        text: '更多资源',
        items: [
          { text: '常见问题FAQ', link: '/more-resources/faq' },
          { text: '版本更新', link: '/more-resources/version-update' }
        ]
      }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: '新手入门',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '系统快速上手', link: '/getting-started/quick-start' },
            { text: '账号登录与权限', link: '/getting-started/login-permission' },
            { text: '全局搜索使用', link: '/getting-started/global-search' },
            { text: '界面总览', link: '/getting-started/interface-overview' }
          ]
        }
      ],
      '/using-system/': [
        {
          text: '资管任务',
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: '任务创建/编辑',
              collapsible: true,
              collapsed: false,
              items: [
                { text: '创建/编辑任务', link: '/using-system/task-management/create-task/' },
                { text: '重复任务', link: '/using-system/task-management/repeat-task/' },
                { text: '添加附件', link: '/using-system/task-management/attachments' },
                { text: '子任务', link: '/using-system/task-management/subtasks' },
                { text: '引入模板', link: '/using-system/task-management/templates' },
              ]
            },
            { text: '任务分发', link: '/using-system/task-management/share' },
            { text: '任务跟进', link: '/using-system/task-management/follow-up' },
            { text: '任务提醒', link: '/using-system/task-management/reminders' },
            { text: '任务执行', link: '/using-system/task-management/execute' }
          ]
        },
        {
          text: '资管工作台',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'AI资管助手', link: '/using-system/workbench/ai-assistant' },
            { text: '标准函件报告', link: '/using-system/workbench/standard-report' },
            { text: '自定义报告', link: '/using-system/workbench/custom-report' },
            { text: '政策指标采集', link: '/using-system/workbench/policy-indicators' }
          ]
        },
        {
          text: '投资企业档案',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '企业档案', link: '/using-system/enterprise-archive/enterprise-file' },
            { text: '文件归档', link: '/using-system/enterprise-archive/file-archive' },
            { text: '通用档案', link: '/using-system/enterprise-archive/general-archive' }
          ]
        },
        {
          text: '企业经营监测',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '动态经营监测', link: '/using-system/business-monitor/dynamic-monitor' },
            { text: '项目管理评价', link: '/using-system/business-monitor/project-evaluation' }
          ]
        },
        {
          text: '报告工作台',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '报告工作台', link: '/using-system/report-workbench' }
          ]
        },
       
        {
          text: '资管数据库',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '财务数据库', link: '/using-system/database/financial-db' },
            { text: '法规合规库', link: '/using-system/database/compliance-db' },
            { text: '政策成果库', link: '/using-system/database/policy-db' },
            { text: '模板数据库', link: '/using-system/database/template-db' },
            { text: '企业档案库', link: '/using-system/database/enterprise-db' }
          ]
        },
        {
          text: '资管内训',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '资管题库', link: '/using-system/training/question-bank' },
            { text: '政策学术交流', link: '/using-system/training/policy-academy' }
          ]
        }
      ],
      '/more-resources/': [
        {
          text: '更多资源',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '常见问题FAQ', link: '/more-resources/faq' },
            { text: '版本更新', link: '/more-resources/version-update' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详情',
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: '数智化资管系统｜帮助中心',
      copyright: 'Copyright &copy; 2026 科学城集团·资产经营管理部. All rights reserved.'
    }
  }
})
