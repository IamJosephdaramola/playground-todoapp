import { Outlet } from 'react-router';
import { Navbar } from '../components';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
