import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const PreviewContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  top: 10vh;
  position: fixed;
  width: 90%;
  max-width: 900px;
  height: 80vh;
  max-height: 900px;
  background: #fff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  background-color: #201e20;
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
