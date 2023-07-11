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

function App() {
  const isHidden = useSelector(({ cart }) => cart.hidden)
  const isPreviewHidden = useSelector(
    ({ previewPlayer }) => previewPlayer.isHidden
  )

  return (
    <Layout>
      {/* <AnimatePresence> */}
        {!isPreviewHidden && <PreviewPlayer {...albumPrviewData} />}
      {/* </AnimatePresence> */}
      <AnimatePresence>
        <Header />
        {!isHidden && (
          <CartModal
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 18, duration: 0.1 }}
            key='cart'
          >
            <Cart />
          </CartModal>
        )}

        <Routes />
      </AnimatePresence>
    </Layout>
  )
}

export default App
