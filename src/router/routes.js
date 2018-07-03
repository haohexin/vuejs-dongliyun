export default [
    // 首页路由配置
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    // 其他未配置的路由都跳转到首页
    {
        path: '*',
        // 重定向
        redirect: '/'
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
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
]
