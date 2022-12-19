import { useRoutes, RouteObject} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';


// will be protected and unprotected routes
const Routes = () => {
    const routes: RouteObject[] = [
        {
            path: '',
            element: <Home />
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

