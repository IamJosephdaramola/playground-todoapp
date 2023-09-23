import { useRoutes } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import {
    Home,
    Login,
    Signup,
    About,
    Error,
    VerifyEmail,
    ProtectedRoute,
} from './pages';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: (
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    ),
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
                {
                    path: '/verify-email',
                    element: <VerifyEmail />,
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
