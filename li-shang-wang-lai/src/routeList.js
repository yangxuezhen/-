import Home from '../Home_page/Home';
import Mine from '../Mine/mine';
import Court from '../Courtesy_account/court';
import Cerem from '../Ceremony/cerem'


const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/Mine",
        component: Mine,
        // exact : true
    },
    {
        path: "/Court",
        component: Court
    },
    {
        path: "/Cerem",
        component: Cerem,
        // exact : true
    }
];


export default routes
