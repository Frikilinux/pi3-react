import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, goTo, user }) => {
  return user ? children : <Navigate to={goTo} />
}

export default ProtectedRoute
