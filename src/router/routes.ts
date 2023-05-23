const routes = [
    {
        path: '/',
        name: 'index',
        meta: {'title':'爱加班的小刘'},
        component: () => import('../components/Index.vue'), //.vue不能省略
        children: [{ path: '/page/:currentPage', name: 'index', component: () => import('../components/Index.vue') }],
    },
    {
        path: '/p/:articleId',
        name: '文章页面',
        component: () => import('../components/article/Article.vue'), //.vue不能省略
    },
    {
        path: '/essay/',
        name: 'essay',
        meta: {'title':'即刻短文 | 爱加班的小刘'},
        component: () => import('../components/essay/EssayPage.vue'), //.vue不能省略
    },
    {
        path: '/treeHoles/',
        name: 'treeHoles',
        meta: {'title':'树洞 | 爱加班的小刘'},
        component: () => import('../components/treeHoles/TreeHoles.vue'), //.vue不能省略
    },
    {
        path: '/category/',
        name: 'category',
        meta: {'title':'文章分类 | 爱加班的小刘'},
        component: () => import('../components/category/Category.vue'), //.vue不能省略
    },
    {
        path: '/category/:categoryName/:currentPage',
        name: 'categoryArticle',
        meta: {'title':'文章分类 | 爱加班的小刘'},
        component: () => import('../components/category/CategoryArticle.vue'), //.vue不能省略
    }
]
export default routes
