import React from 'react'
import { FooterBrand, FooterCopy, FooterStyled } from './FooterStd'
import SiteBrand from '../Header/Sitebrand/SiteBrand'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterBrand>
        <SiteBrand />
        <FooterCopy>
          Copyright © 2023 Brainsdamage Software Corporation
        </FooterCopy>
      </FooterBrand>
    </FooterStyled>
  )
}

export default Footer
