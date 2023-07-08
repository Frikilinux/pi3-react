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
      {!isPreviewHidden && <PreviewPlayer {...albumPrviewData} />}

      <Header />
      <AnimatePresence>
        {isHidden && (
          <CartModal
            initial={{ translateX: 550, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 550 }}
            transition={{
              type: 'spring',
              damping: 10,
              stiffness: 100,
              restDelta: 0.005,
            }}
            key='cart'
          >
            <Cart />
          </CartModal>
        )}
      </AnimatePresence>

      <Routes />
    </Layout>
  )
}

export default App
