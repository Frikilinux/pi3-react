import React from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import { CartModal } from './components/Cart/CartStd'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import PreviewPlayer from './components/PreviewPlayer/PreviewPlayer'

import albumPrviewData from './data/albumProtoTest.json'

import { Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotifyContainerStd from './styles/NotifyStd'

function App() {
  const isHidden = useSelector(({ cart }) => cart.hidden)
  const isPreviewHidden = useSelector(
    ({ previewPlayer }) => previewPlayer.isHidden,
  )

  return (
    <Layout>
      <AnimatePresence>
        {!isPreviewHidden && <PreviewPlayer {...albumPrviewData} />}
      </AnimatePresence>
      <NotifyContainerStd
        position='top-left'
        transition={Slide}
        autoClose={2000}
        hideProgressBar
        limit={3}
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <AnimatePresence>
        <Header />

        <Routes />
      </AnimatePresence>
    </Layout>
  )
}

export default App
