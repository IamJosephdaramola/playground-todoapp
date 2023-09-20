import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useTodosContextData } from '../hooks/use-todos-context'

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const { authenticated } = useTodosContextData()

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