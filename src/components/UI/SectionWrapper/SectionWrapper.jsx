import React from 'react'
import { Section, SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children, bg} ) => {
  return (
    <SectionContainer bg={bg}>
      {children}
    </SectionContainer>
  )
}

export default SectionWrapper
