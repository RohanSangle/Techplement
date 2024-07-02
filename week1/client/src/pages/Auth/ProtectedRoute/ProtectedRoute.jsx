import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../../contexts/authContext.js';

const ProtectedRoute = () => {
  // const { user } = useAuth();

  // return user ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute