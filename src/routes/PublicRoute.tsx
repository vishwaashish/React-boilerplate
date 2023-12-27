// components/PublicRoute.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../context/store";

interface PublicRouteProps {
  element: React.ReactElement;
  path: string;
  //   children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  element,
  //   path,
  //   children,
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    // Redirect authenticated users to the dashboard or any authorized route
    return <Navigate to="/" />;
  }

  return element;
};

export default PublicRoute;
