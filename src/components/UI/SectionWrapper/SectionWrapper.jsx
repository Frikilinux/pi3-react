import React from 'react'
import { Section, SectionContainer } from './SectionWrapperStd'

const SectionWrapper = ({ children }) => {
  return (
    <SectionContainer bg={'grey'}>
      <Section>{children}</Section>
    </SectionContainer>
  )
}

export default SectionWrapper
