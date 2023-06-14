import React from 'react'
import { Route, Routes as RoutesReact } from 'react-router-dom'
import Login from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'

const Routes = () => {
  return (
    <RoutesReact>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </RoutesReact>
  )
}

export default Routes
