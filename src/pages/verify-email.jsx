import { useLocation } from 'react-router-dom'


const VerifyEmail = () => {

    const location = useLocation();

    return (
        <div className='pt-40'> A verification link has been sent to {location.state.email}</div>
    )
}

export default VerifyEmail