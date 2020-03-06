import Home from '../Ceremony/cerem';
import ProductDetail from '../Home_page/Home';
import User from '../Main';
import Main from '../User/u_one';
import Info from '../User/u_two';

let router = [
    {
        path: '/',//首页默认加载的页面
        componentName: Home,
        exact: true //是否为严格模式
    },
    {
        path: '/productdetail/:id',//后面是传递的参数id
        componentName: ProductDetail
    },
    {
        path: '/user',
        componentName: User,
        routes: [  /** 嵌套路由  User下面又有两个子页面*/
            {
                path: '/user/',
                componentName: Main,
                exact: false
            },
            {
                path: '/user/info',
                componentName: Info
            },
        ]
    }
];

export default router;