import React from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Routes />
      </Layout>
    </>
  )
}

export default App
