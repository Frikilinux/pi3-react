import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, goTo }) => {
  const { user } = useSelector(({ user }) => user)

  return user ? children : <Navigate to={goTo} />
}

export default ProtectedRoute
