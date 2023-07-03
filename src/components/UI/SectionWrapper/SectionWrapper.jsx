import React from 'react'
import { Section, SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children }) => {
  return (
    <SectionContainer bg='#8eadc4'>
      <Section>{children}</Section>
    </SectionContainer>
  )
}

export default SectionWrapper
