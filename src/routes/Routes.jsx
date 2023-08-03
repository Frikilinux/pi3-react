import React from 'react'
import { Route, Routes as RoutesReact } from 'react-router-dom'
import Login from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Artist from '../pages/Artist/Artist'
import Checkout from '../pages/checkout/Checkout'
import Summary from '../pages/Summary/Summary'
import NotFound from '../pages/NotFound/NotFound'
import Search from '../pages/Search/Search'
import AlbumsPage from '../pages/AlbumsPage/Albums'

const Routes = () => {
  return (
    <RoutesReact>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/summary' element={<Summary />} />
      <Route path='/artist/:artistId?' element={<Artist />} />
      <Route path='/artist/:search?' element={<Artist />} />
      <Route path='/search/:search' element={<Search />} />
      <Route path='/albums/:search?' element={<AlbumsPage />} />

      <Route path='*' element={<NotFound />} />
    </RoutesReact>
  )
}

export default Routes
