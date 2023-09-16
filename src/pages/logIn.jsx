import { Link } from 'react-router-dom';
import { FormInput } from '../components';
import Button from '../components/button';

const Login = () => {
    return (
        <form className="pt-40 flex justify-center  pb-5">
            <div className="">
                <div className="text-center">
                    <h2 className="text-[#000] mb-2 text-xl sm:text-[35px] font-bold">
                        Login to your account
                    </h2>
                    <p className="text-[#000000] text-sm font-[500] sm:text-[16px]">
                        Please enter your details to proceed further
                    </p>
                </div>
                <FormInput
                    label="Email"
                    name="Email"
                    placeholder="Enter your name"
                />{' '}
                <FormInput
                    label="Password"
                    name="Password"
                    placeholder="Enter your name"
                />
                <div className="grid justify-center sm:justify-start">
                    <Button text=" Login" />
                </div>
                <div>
                    <p className="text-todo-blue-2 text-center pt-5 font-[500] text-sm sm:text-[16px]">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="text-bg-todo-blue-2 pl-1 font-[500]  underline underline-offset-2"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Login;
