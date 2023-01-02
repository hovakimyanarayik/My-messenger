import { useRoutes, RouteObject} from 'react-router-dom';
import Protected from './components/Protected';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';


const Routes = () => {
    const routes: RouteObject[] = [
        {
            path: '',
            children: [
                {
                    path: '',
                    element: <Protected><Home /></Protected>
                },
                {
                    path: ':slug',
                    element: <Protected><Home /></Protected>
                }
            ]
        },
        {
            path: 'login',
            element: <Login />
        }, 
        {
            path: 'registration',
            element: <Registration />
        }
    ]

    return useRoutes(routes);
}

export default Routes;

