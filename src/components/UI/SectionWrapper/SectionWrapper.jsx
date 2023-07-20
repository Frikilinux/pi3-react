import React from 'react'
import { SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children, bg, img, id }) => {
  return <SectionContainer id={id} img={img} bg={bg}>{children}</SectionContainer>
}

export default SectionWrapper
