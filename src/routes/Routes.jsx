import React from 'react'
import { Route, Routes as RoutesReact } from 'react-router-dom'
import Login from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Artist from '../pages/Artist/Artist'
import Checkout from '../pages/checkout/Checkout'
import History from '../pages/History/History'

const Routes = () => {
  return (
    <RoutesReact>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/history' element={<History />} />
      <Route path='/artist/:artistId' element={<Artist />} />
    </RoutesReact>
  )
}

export default Routes
