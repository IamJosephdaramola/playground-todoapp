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
<<<<<<< HEAD
=======
    AuthRoute
>>>>>>> 397e5c3b7db545743babd8ebec9a25ff03a0b86c
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
                    element:
                        <AuthRoute>
                            <Signup />
                        </AuthRoute>
                    ,
                },
                {
                    path: '/login',
                    element:
                        <AuthRoute>
                            <Login />
                        </AuthRoute>
                    ,
                },
                {
                    path: '/verify-email',
                    element:
                        <AuthRoute>
                            <VerifyEmail />
                        </AuthRoute>
                    ,
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
