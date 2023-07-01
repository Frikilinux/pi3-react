import React from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import { CartModal } from './components/Cart/CartStd'

function App() {
  return (
    <Layout>
      <Header />
      <CartModal>
        <Cart />
      </CartModal>
      <Routes />
    </Layout>
  )
}

export default App
