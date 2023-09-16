import { useRoutes } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import { Home, Login, Signup, About, Error } from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/about',
                    element: <About />,
                },
                {
                    path: '/signup',
                    element: <Signup />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
            ],
        },
        {
            path: '*',
            element: <Error />,
        },
    ]);
};
export default Router;
