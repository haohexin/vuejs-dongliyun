export default [
    // 其他未配置的路由都跳转到首页
    {
        path: '*',
        redirect: '/Home'
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    {
        path: '/TheMain',
        name: 'TheMain',
        component: () => import('@/components/layouts/TheMain'),
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: () => import('@/views/Home')
            },
            {
                path: '/DeviceList',
                name: 'DeviceList',
                component: () => import('@/views/DeviceList')
            },
            {
                path: '/WarningList',
                name: 'WarningList',
                component: () => import('@/views/WarningList')
            },
            {
                path: '/MaintainList',
                name: 'MaintainList',
                component: () => import('@/views/MaintainList')
            },
            {
                path: '/EditProfile',
                name: 'EditProfile',
                component: () => import('@/views/EditProfile')
            },
        ]
    },
]
