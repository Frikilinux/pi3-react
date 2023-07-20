import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'
import Layout from './components/Layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import PreviewPlayer from './components/PreviewPlayer/PreviewPlayer'

import albumPrviewData from './data/albumProtoTest.json'

import { Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotifyContainerStd from './styles/NotifyStd'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Overlay from './components/Overlay/Overlay'

function App() {
  const isPreviewHidden = useSelector(
    ({ previewPlayer }) => previewPlayer.isHidden,
  )
  const { cartHidden } = useSelector(({ cart }) => cart)
  const { userError } = useSelector(({ user }) => user)

  useEffect(() => {
    document.body.style.overflow =
      !cartHidden || !isPreviewHidden || userError ? 'hidden' : 'unset'
  }, [cartHidden, isPreviewHidden, userError])

  return (
    <Layout>
      {(!isPreviewHidden || !cartHidden || userError) && <Overlay />}

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
        <Footer />
      </AnimatePresence>
      <ScrollToTop />
    </Layout>
  )
}

export default App
