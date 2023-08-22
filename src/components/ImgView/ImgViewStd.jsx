import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const PreviewContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  top: 6vh;
  position: fixed;
  width: 90%;
  max-width: 875px;
  height: 90vh;
  background: #201e20 url(${({ $imgsrc }) => `${$imgsrc}`}) center/cover no-repeat;
  z-index: 10;
  border-radius: 15px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 80px 4px;
  @media (max-width: 576px) {
    padding: 10px;
    border-radius: 0;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
  }
`
