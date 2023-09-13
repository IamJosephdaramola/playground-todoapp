// import React from 'react'
// import FaArrowRightLong from 'react-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <main className="w-full h-screen bg-black">
            <section className="md:flex h-screen">
                <div className=" md:w-6/12 hidden md:flex flex-col text-center bg-[#10151B] pt-20 text-white ">
                    <h1 className="text-3xl font-bold ">Sign Up</h1>
                    <div className=" flex justify-center items-center">
                        <img
                            src="/src/assets/login.png"
                            alt="sign up illustration"
                            className="max-w-lg"
                        />
                    </div>
                </div>
                <form className="md:w-6/12 text-white bg-black pt-20 md:pt-40  px-5 md:px-0  ">
                    <h1 className="text-3xl font-bold md:hidden mb-8 text-center">
                        Sign Up
                    </h1>
                    <div className="flex flex-col gap-8 max-w-md mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2">
                                Email address
                                <span className="text-[#ff0000]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-[#292B36] py-4 rounded-lg bg-transparent px-5"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2">
                                Password
                                <span className="text-[#ff0000]">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-[#292B36] py-4 rounded-lg bg-transparent px-5"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#87CEEB] py-2 px-4 rounded-md w-full hover:text-[#87CEEB] hover:border hover:border-[#87CEEB] hover:bg-transparent"
                        >
                            Sign in
                        </button>
                        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                            <p className="text-[#71717A] ">
                                Don't have an account?
                                <Link
                                    to="/"
                                    className="decoration-solid underline decoration-[#71717A]"
                                >
                                    Sign Up
                                </Link>
                            </p>
                            <p className="text-[#71717A] ">
                                {' '}
                                <Link
                                    to="/forgot-password"
                                    className="decoration-solid underline decoration-[#71717A]"
                                >
                                    Forgot Password?
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default SignUp;
