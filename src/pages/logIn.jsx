import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { FormInput } from '../components';
import Button from '../components/button';
import { useAuthContextData } from '../hooks';
import { login } from '../store/auth/auth-thunks'
import { validateValues } from '../utils';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { loading } = useAuthContextData();
    const [details, setDetails] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        const { password, email } = details;
        e.preventDefault();

        if (validateValues(details)) {
            dispatch(login({ email, password, navigate }));
        } else {
            toast.error('Please fill in the fields');
        }

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-40 flex justify-center  pb-5"
        >
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
                    name="email"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="email"
                />{' '}
                <FormInput
                    label="Password"
                    name="password"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="password"
                />
                <div className="grid justify-center sm:justify-start">
                    <Button text={loading ? "Loading..." : "Login"} disabled={loading} />
                </div>
                <div>
                    <p className="text-todo-blue-2 text-center pt-5 font-[500] text-sm sm:text-[16px]">
                        Don&apos;t have an account?
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
