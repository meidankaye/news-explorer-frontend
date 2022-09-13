import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children, ...props  }) => {
  return loggedIn ? children : <Navigate {...props} to="/" />
}

export default ProtectedRoute;