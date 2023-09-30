import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useAuthContextData } from '../hooks'

const AuthRoute = ({ children }) => {
    const location = useLocation()
    const { authenticated } = useAuthContextData()

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