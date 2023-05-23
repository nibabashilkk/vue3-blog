// 导入router所需的方法
import { createRouter, createWebHistory } from 'vue-router'

// 导入路由页面的配置
import routes from './routes'

// 路由参数配置
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes: routes
})

// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
    // 继续前进 next()
    // 返回 false 以取消导航
    next()
})

// 全局后置钩子，这里可以加入改变页面标题等操作
router.afterEach((to, from) => {
    const _title = to.meta.title
    if (_title) {
        window.document.title = String(_title)
    }else{
        const articleId = to.params.articleId;
        let localStorageValue = localStorage.getItem(articleId.toString());
        let value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
        if(value){
            window.document.title = value.title+" | 爱加班的小刘"
        }else{
            fetch('/api/article/getArticle',{
                method:'post',
                headers:{
                    'Content-Type':'text/plain'
                },
                body: JSON.parse(JSON.stringify(articleId))
            }).then(data=>data.json()).then(data=>{
                window.document.title = data.data.title+" | 爱加班的小刘"
                localStorage.setItem(articleId.toString(),JSON.stringify(data.data));
            })
        }
    }
})

// 导出默认值
export default router
