import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FormInput } from '../components';
import Button from '../components/button';
import { useTodosContextData } from '../hooks/use-todos-context';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useTodosContextData();
    const [details, setDetails] = useState({
        email: '',
        password: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        const { password, email } = details;
        e.preventDefault();
        try {
            if (!password || !email) {
                setErrorMsg('Please fill in the fields');
                return;
            }
            const {
                data: { user, session },
                error,
            } = await login(email, password);
            if (error) setErrorMsg(error.message);
            if (user && session) navigate('/');
        } catch (error) {
            setErrorMsg('Email or Password Incorrect');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-40 flex justify-center  pb-5"
        >
            <div className="">
                {errorMsg && (
                    <p className="text-center text-red-600 my-4">{errorMsg}</p>
                )}
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
                    isRequired
                />{' '}
                <FormInput
                    label="Password"
                    name="password"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="password"
                    isRequired
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
