import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Auth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const MyRoutes = ({ Component }) => {
  return Auth() ? <Component /> : <Navigate to="/login" />;
};


MyRoutes.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyRoutes;
