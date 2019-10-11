import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: [{
            path: '',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('./views/Index.vue'),
        },
        {
            //师资队伍
            path: '/group-teacher',
            name: 'group-teacher',
            component: () => import('./views/Base.vue'),
            children: [{
                path: 'index',
                name: 'group-index',
                component: () => import('./views/groupTeacher/GroupTeacher.vue'),
            }, ],
        },
        {
            ////科学研究
            path: '/scientific-research',
            name: 'scientific-research',
            component: () => import('./views/Base.vue'),
            children: [{
                    path: 'index',
                    name: 'research-index',
                    component: () => import('./views/scientificResearch/Research.vue'),
                },
                {
                    path: 'trends',
                    name: 'trends',
                    component: () => import('./views/scientificResearch/Trends.vue'),
                },
                {
                    path: 'treatise',
                    name: 'treatise',
                    component: () => import('./views/scientificResearch/Treatise.vue'),
                },
                {
                    path: 'achievements',
                    name: 'achievements',
                    component: () => import('./views/scientificResearch/Achievements.vue'),
                }
            ],
        },
        {
            //信息发布
            path: '/info',
            name: 'info',
            component: () => import('./views/Base.vue'),
            children: [{
                path: 'index',
                name: 'info-index',
                component: () => import('./views/info/Notice.vue'),
            }, ],
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('./views/test.vue')
        }
    ],
});