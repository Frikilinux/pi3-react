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
import ProtectedRoute from '../components/ProctectedRoute/ProtectedRoute'
import Verify from '../pages/Verify/Verify'
import Order from '../pages/Order/Order'
import { useSelector } from 'react-redux'

const Routes = () => {
  const { user } = useSelector(({ user }) => user)
  return (
    <RoutesReact>
      <Route path='/artist/:artistId?' element={<Artist />} />
      <Route path='/artist/:search?' element={<Artist />} />
      <Route path='/search/:search' element={<Search />} />
      <Route path='/albums/:search?' element={<AlbumsPage />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/' element={<Home />} />
      <Route
        path='/login'
        element={
          <ProtectedRoute goTo={'/'} user={!user}>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path='/register'
        element={
          <ProtectedRoute goTo={'/'} user={!user}>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path='/summary'
        element={
          <ProtectedRoute goTo={'/login'} user={user}>
            <Summary />
          </ProtectedRoute>
        }
      />
      <Route
        path='/summary/order/:id'
        element={
          <ProtectedRoute goTo={'/login'} user={user}>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path='/checkout'
        element={
          <ProtectedRoute goTo={'/login'}>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotFound />} />
    </RoutesReact>
  )
}

export default Routes
