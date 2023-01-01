import Home from '../share/Home';
import List from '../share/List';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/list',
        component: List,
    }
]
