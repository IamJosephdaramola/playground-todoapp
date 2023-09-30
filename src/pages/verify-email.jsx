import { useLocation } from 'react-router-dom'


const VerifyEmail = () => {

    const location = useLocation();

    return (
        <div className="pt-40 grid place-items-center ">
            <div className="text-center w-72 p-5 sm:w-96 sm:p-14 rounded-lg shadow-md border-t-4 border-todo-blue-3" >
                <h2 className='text-xl font-medium mb-3'>Verify Your Email Address</h2>
                <p className="">
                    A verification link has been sent to {location.state.email}
                </p>
            </div>
        </div>
    );
}

export default VerifyEmail