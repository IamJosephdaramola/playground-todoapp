import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useAuthContextData } from '../hooks'

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const { authenticated } = useAuthContextData()

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ProtectedRoute