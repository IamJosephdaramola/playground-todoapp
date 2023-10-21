import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getIsAuthLoading } from '../store/auth/auth-selectors';
import { signUp } from '../store/auth/auth-thunks'
import FormInput from '../components/formInput';
import Button from '../components/button';
import { validateValues } from '../utils';

const Signup = () => {
    const loading = useSelector(getIsAuthLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: "",
        lastName: ""
    });


    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        const { confirmPassword, password } = details

        if (validateValues(details)) {
            if (confirmPassword !== password) {
                toast.error('Passwords do not match');
                return;
            }
            if (password.length < 6) {
                toast.error('Password is too weak');
                return;
            }

            dispatch(signUp({ details, navigate }))
        } else {
            toast.error('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={onSubmit} className=" pt-28 flex justify-center  pb-5">
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
                    label="First name"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={onChange}
                    type="text"
                />
                <FormInput
                    label="Last name"
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={onChange}
                    type="text"
                />
                <FormInput
                    label="Email"
                    name="email"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="email"
                />
                <FormInput
                    label="Password"
                    name="password"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="password"
                />
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Enter your name"
                    onChange={onChange}
                    type="password"
                />
                <div className="grid justify-center sm:justify-start">
                    <Button text={loading ? "Loading..." : "Sign Up"} disabled={loading} />
                </div>
            </div>
        </form>
    );
};

export default Signup;
