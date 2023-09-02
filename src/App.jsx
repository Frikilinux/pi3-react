import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import Routes from './routes/Routes'
import Layout from './components/Layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import PreviewPlayer from './components/PreviewPlayer/PreviewPlayer'
import albumPreviewData from './data/albumProtoTest.json'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Overlay from './components/Overlay/Overlay'
import ImgView from './components/ImgView/ImgView'
import { useMediaPredicate } from 'react-media-hook'
import { Toaster } from 'sonner'

function App() {
  const { albumPreviewHidden, imagePreview } = useSelector(
    ({ previewPlayer }) => previewPlayer,
  )
  const { cartHidden } = useSelector(({ cart }) => cart)
  const { userError } = useSelector(({ user }) => user)
  const { ordersError } = useSelector(({ orders }) => orders)
  const { isHiddenMenu } = useSelector(({ categories }) => categories)
  const max576 = useMediaPredicate('(max-width: 576px)')

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
      <Toaster richColors position='top-right' theme='dark' offset='60px' />
      {(!albumPreviewHidden ||
        !cartHidden ||
        userError ||
        ordersError ||
        imagePreview ||
        !isHiddenMenu) &&
        !max576 && <Overlay />}
      <AnimatePresence>
        {!albumPreviewHidden && <PreviewPlayer {...albumPreviewData} />}
      </AnimatePresence>
      <AnimatePresence>{imagePreview && <ImgView />}</AnimatePresence>
      <Header />
      <Routes />
      <Footer />
      <ScrollToTop />
    </Layout>
  )
}

export default App
