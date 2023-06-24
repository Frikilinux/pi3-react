import React from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'

function App() {
  const test = () => {
    console.log('Test')
  }

  return (
    <>
      <Header />
      <h1 onClick={() => test()}>REACT APP</h1>
      <Routes />
    </>
  )
}

export default App
