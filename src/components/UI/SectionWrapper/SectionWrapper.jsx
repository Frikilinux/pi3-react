import React from 'react'
import { SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children, bg, img }) => {
  return <SectionContainer img={img} bg={bg}>{children}</SectionContainer>
}

export default SectionWrapper
