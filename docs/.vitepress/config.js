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
            {
                text: 'about',
                items: [
                    { text: 'Github', link: 'https://github.com/nanarino' },
                    { text: 'Twitter', link: 'https://twitter.com/kogawananari' }
                ]
            }
        ],
        sidebar: {
            '/': [
                {
                    text:'dart',
                    children: [
                        { text: '安装环境', link: '/flutter/' },
                        { text: '基本语法', link: '/flutter/基本语法' },
                        { text: '数据类型', link: '/flutter/数据类型' },
                    ],
                    sidebarDepth:3  
                }
            ]
        }
    }
}