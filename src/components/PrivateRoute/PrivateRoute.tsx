import { Navigate } from "react-router-dom";

import Layout from "../../pages/Layout/Layout";
import { useAuth } from "../AuthProvider/AuthProvider";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Layout /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
