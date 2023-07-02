import React from 'react'
import { Section, SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children }) => {
  return (
    <SectionContainer >
      <Section>{children}</Section>
    </SectionContainer>
  )
}

export default SectionWrapper
