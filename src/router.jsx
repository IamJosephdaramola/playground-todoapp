import { useRoutes } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
<<<<<<< HEAD
import { Home, Login, Signup, About, Error } from './pages';

const Router = () => {
=======
import { Home, Login, Signup, About, Error, VerifyEmail, ProtectedRoute } from './pages';

const Router = () => {

>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
<<<<<<< HEAD
                    element: <Home />,
=======
                    element: <ProtectedRoute ><Home /></ProtectedRoute>,
>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
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
<<<<<<< HEAD
=======
                {
                    path: '/verify-email',
                    element: <VerifyEmail />,
                },
>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
            ],
        },
        {
            path: '*',
            element: <Error />,
        },
    ]);
};
export default Router;
