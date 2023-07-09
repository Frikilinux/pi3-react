import React from 'react'
import { Section, SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children, bg} ) => {
  return (
    <SectionContainer bg={bg}>
      <Section>{children}</Section>
    </SectionContainer>
  )
}

export default SectionWrapper
