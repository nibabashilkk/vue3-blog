const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        component: () => import('../components/Index.vue'), //.vue不能省略
    },
    {
        path: '/nav',
        name: 'daohang',
        title: 'daohang',
        component: () => import('../components/NavBar.vue'), //.vue不能省略
    },
    {
        path: '/p/:articleId',
        name: '文章页面',
        title: '文章',
        component: () => import('../components/Article.vue'), //.vue不能省略
    }
]
export default routes
