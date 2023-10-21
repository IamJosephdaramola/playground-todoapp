import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { getAuthenticated } from '../store/auth/auth-selectors';
import { logout } from '../store/auth/auth-thunks'

export default function Navbar() {
    const dispatch = useDispatch()
    const authenticated = useSelector(getAuthenticated);
    const [showMenu, setShowMenu] = useState(false);

    const navItems = authenticated
        ? [
              {
                  title: 'Home',
                  link: '/',
              },
              {
                  title: 'About',
                  link: 'about',
              },
          ]
        : [
              {
                  title: 'About',
                  link: 'about',
              },
              {
                  title: 'Sign Up',
                  link: 'signup',
              },
              {
                  title: 'Login',
                  link: 'login',
              },
          ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="">
            <div className="bg-white fixed w-full z-20 flex items-center justify-center py-[18px] shadow-sm md:shadow-md ">
                <div className="md:flex justify-between items-center w-[95%] lg:w-[85%]  ">
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-todo-black text-2xl">
                            <span className="text-todo-blue-3"> TODO</span>
                            -APP
                        </h2>
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="md:hidden text-3xl "
                        >
                            <AiOutlineMenu />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item) => {
                            return (
                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-todo-blue-2 px-6 py-1 md:px-4  font-medium  md:text-[16px]'
                                            : 'px-6 py-1 md:px-4  md:text-[16px] font-medium text-todo-black'
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            );
                        })}
                        {authenticated && (
                            <button type="button" onClick={handleLogout}>
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`fixed z-20 inset-0 transform transition-transform duration-500 ease-in-out md:hidden  ${
                    showMenu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="bg-white shadow-md rounded-b-3xl w-full flex flex-col">
                    <div className="flex justify-between items-center p-4 shadow-sm">
                        <h2 className="font-semibold text-2xl">
                            <span className="text-todo-blue-2"> TODO</span>
                            -APP
                        </h2>
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-2xl  "
                        >
                            <GrClose />
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col items-start space-y-7 px-5 py-10">
                        {navItems.map((item) => {
                            return (
                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive
                                            ? ' text-[18px] px-2 text-todo-blue-2'
                                            : 'text-[18px]  px-2  text-todo-black'
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            );
                        })}
                        {authenticated && (
                            <button
                                className="text-[18px]  px-2  text-todo-black"
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
