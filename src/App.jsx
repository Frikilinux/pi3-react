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
import ImgView from './components/ImgView/ImgView'

function App() {
  const { albumPreviewHidden, imagePreview } = useSelector(
    ({ previewPlayer }) => previewPlayer,
  )
  const { cartHidden } = useSelector(({ cart }) => cart)
  const { userError } = useSelector(({ user }) => user)
  const { ordersError } = useSelector(({ orders }) => orders)
  const { isHiddenMenu } = useSelector(({ categories }) => categories)

  useEffect(() => {
    document.body.style.overflow =
      !cartHidden ||
      !albumPreviewHidden ||
      imagePreview ||
      userError ||
      !isHiddenMenu
        ? 'hidden'
        : 'unset'
  }, [cartHidden, albumPreviewHidden, userError, imagePreview, isHiddenMenu])

  return (
    <Layout>
      {(!albumPreviewHidden ||
        !cartHidden ||
        userError ||
        ordersError ||
        imagePreview ||
        !isHiddenMenu) && <Overlay />}
      <AnimatePresence>
        {!albumPreviewHidden && <PreviewPlayer {...albumPrviewData} />}
      </AnimatePresence>
      <AnimatePresence>{imagePreview && <ImgView />}</AnimatePresence>
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
      <Header />
      <Routes />
      <Footer />
      <ScrollToTop />
    </Layout>
  )
}

export default App
