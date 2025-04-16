import { Home } from '../pages/Home';
import { Apply } from '../pages/Apply';
import { Events } from '../pages/Events';
import { Crew } from '../pages/Crew';
import { Archive } from '../pages/Archive';

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/apply',
        element: <Apply />
    },
    {
        path: '/events',
        element: <Events />
    },
    {
        path: '/crew',
        element: <Crew />
    },
    {
        path: '/archive',
        element: <Archive />
    }
]; 