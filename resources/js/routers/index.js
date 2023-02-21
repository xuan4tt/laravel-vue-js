import {createRouter, createWebHistory} from 'vue-router'

const  routes = [
    {
        path: '/admin',
        component: () => import('../layouts/admin.vue'),
        children: [
            {
                path: 'users',
                component: () => import('../pages/admin/users/index.vue'),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router