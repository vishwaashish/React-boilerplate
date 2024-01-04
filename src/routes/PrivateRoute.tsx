// components/PrivateRoute.tsx
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; // Import the Navigate type
import {
  getIsAuthenticated,
  logout,
  userRolesSelector,
} from "../context/authSlice";
import { store } from "../context/store";

interface PrivateRouteProps {
  element: React.ReactElement;
  path: string;
  requiredRoles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  // path,
  requiredRoles = [],
}) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(getIsAuthenticated);
  const { userRoles } = useMemo(() => {
    return { userRoles: userRolesSelector(store.getState()) };
  }, []);

  if (!isAuthenticated) {
    dispatch(logout());
    return <Navigate to="/login" />;
  }

  const hasRequiredRoles = requiredRoles.every((role:string) =>
    userRoles.includes(role)
  );

  if (!hasRequiredRoles) {
    return <Navigate to="/unauthorized" />; // Use ReactNavigate instead of Navigate
  }

  return element;
};

export default PrivateRoute;
