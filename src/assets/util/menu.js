export const menu = [{
        label: '首页',
        src: '/index',
    },
    {
        label: '组织架构',
        children: [{
            label: '中心概况'
        }, {
            label: '感知所页面'
        }, {
            label: '导航所页面'
        }],
    },
    {
        label: '师资队伍',
        src: '/group-teacher/index',
        children: [{
                label: '教授',
                src: '/group-teacher/index',
            },
            {
                label: '副教授',
                src: '/group-teacher/index',
            },
            {
                label: '助理',
                src: '/group-teacher/index',
            },
            {
                label: '专职',
                src: '/group-teacher/index',
            },
            {
                label: '博士后',
                src: '/group-teacher/index',
            },
        ],
    },
    {
        label: '人才培养',

        children: [{
                label: '主页'
            },
            {
                label: '博士'
            },
            {
                label: '硕士'
            },
            {
                label: '留学生'
            },
            {
                label: '已毕业学生'
            },
        ],
    },
    {
        label: '科学研究',
        src: '/scientific-research/index',
        children: [{
                label: '科研方向介绍',
                src: '/scientific-research/index',
            },
            {
                label: '科研动态',
                src: '/scientific-research/trends',
            },
            {
                label: '学术论著',
                src: '/scientific-research/treatise'
            },
            {
                label: '授权专利',
                src: '/scientific-research/treatise'
            },
            {
                label: '科研成果',
                src: '/scientific-research/achievements'
            },
        ],
    },
    {
        label: '信息发布',
        src: '/info/index',
        children: [{
                label: '通知公告',
                src: '/info/index',
            },
            {
                label: '科研实习',
            },
            {
                label: '招聘信息'
            },
        ],
    },
    {
        label: '联系我们',
    },
];