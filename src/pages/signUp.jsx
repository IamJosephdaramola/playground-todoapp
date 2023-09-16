import { Link } from 'react-router-dom';
import FormInput from '../components/formInput';
import Button from '../components/button';

const Signup = () => {
    return (
        <form className=" pt-28 flex justify-center  pb-5">
            <div className="">
                <div className="text-center">
                    <h2 className="text-[#000] mb-2 text-xl sm:text-[35px] font-bold">
                        Sign Up to your account
                    </h2>
                    <p className="text-[#000000] font-[500] text-sm sm:text-[16px]">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-todo-blue-2 pl-1 font-[500] text-[16px]"
                        >
                            Login
                        </Link>
                    </p>
                </div>
                <FormInput
                    label="Name"
                    name="Name"
                    placeholder="Enter your name"
                />
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
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Enter your name"
                />
                <div className="grid justify-center sm:justify-start">
                    <Button text="Sign Up" />
                </div>
            </div>
        </form>
    );
};

export default Signup;
