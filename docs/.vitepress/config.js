module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: '7rinote-flutter',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'dart', link: '/dart/' },
      { text: 'flutter', link: '/flutter/' },
      {
        text: 'about',
        items: [
          { text: 'Github', link: 'https://github.com/nanarino' },
          { text: 'Twitter', link: 'https://twitter.com/kogawananari' }
        ]
      }
    ],
    sidebar: {
      '/dart/': [
        {
          text: 'dart',
          children: [
            { text: '安装dart', link: '/dart/' },
            { text: '基本语法', link: '/dart/基本语法' },
            { text: '数据类型', link: '/dart/数据类型' },
            { text: '函数', link: '/dart/函数' },
            { text: '类', link: '/dart/类' },
            { text: '异步', link: '/dart/异步' },
          ],
          sidebarDepth: 3
        }
      ],
      '/flutter/': [
        {
          text: 'flutter',
          children: [
            { text: '安装环境', link: '/flutter/' },
          ],
          sidebarDepth: 3
        },
      ],
    }
  }
}