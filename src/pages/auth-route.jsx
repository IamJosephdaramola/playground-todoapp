import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getAuthenticated } from '../store/auth/auth-selectors';

const AuthRoute = ({ children }) => {
    const location = useLocation()
    const authenticated = useSelector(getAuthenticated)

    if (authenticated) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
}

AuthRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default AuthRoute