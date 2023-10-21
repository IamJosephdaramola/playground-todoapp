import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAuthenticated } from '../store/auth/auth-selectors';

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const authenticated = useSelector(getAuthenticated)

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