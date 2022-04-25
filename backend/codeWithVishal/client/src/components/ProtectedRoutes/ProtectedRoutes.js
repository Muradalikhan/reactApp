import React from "react";
import { useSelector } from "react-redux";
import Redirecting from "../Redirecting/Redirecting";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <Redirecting />;
};

export default ProtectedRoutes;
