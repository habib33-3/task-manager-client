import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";


const PrivateRouter = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={location.pathname}
    />
  );
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
