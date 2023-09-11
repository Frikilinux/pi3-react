import React from 'react'
import { SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children, bg, img, id, padding }) => {
  return (
    <SectionContainer id={id} $img={img} $bg={bg} $padding={padding}>
      {children}
    </SectionContainer>
  )
}

export default SectionWrapper
