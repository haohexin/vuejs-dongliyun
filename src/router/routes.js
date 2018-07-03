export default [
    {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
]
