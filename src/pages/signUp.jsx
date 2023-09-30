import { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import FormInput from '../components/formInput';
import Button from '../components/button';
import { supabase } from '../super-base-client';

const Signup = () => {
    const navigate = useNavigate()
    const [formError, setFormError] = useState('')
    const [details, setDetails] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const onFocus = () => {
        if (formError) {
            setFormError('')
        }
    }

    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        const { password, confirmPassword, email } = details
        e.preventDefault()
        if (confirmPassword !== password) {
            setFormError('passwords do not match');
            return;
        }

        if (password.length < 6) {
            setFormError('Password is too weak')
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email, password, options: {
                emailRedirectTo: `${document.location.origin}/`
            }
        });

        if (error) {

            setFormError('something went wrong');
            return
        }

        navigate('/verify-email', { state: { email: data.user.email } })
    }

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
                {formError && <p className='text-center text-red-600 my-4'>{formError}</p>}
                <FormInput
                    label="Email"
                    name="email"
                    placeholder="Enter your name"
                    onChange={onChange}
                    onFocus={onFocus}
                    isRequired
                    type="email"
                />{' '}
                <FormInput
                    label="Password"
                    name="password"
                    placeholder="Enter your name"
                    onChange={onChange}
                    isRequired
                    type="password"
                    onFocus={onFocus}

                />
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Enter your name"
                    onChange={onChange}
                    isRequired
                    type="password"
                    onFocus={onFocus}
                />
                <div className="grid justify-center sm:justify-start">
                    <Button text="Sign Up" />
                </div>
            </div>
        </form>
    );
};

export default Signup;
