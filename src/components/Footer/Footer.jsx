import React from 'react'
import {
  FooterBrand,
  FooterCopy,
  FooterStyled,
  FootterPowered,
} from './FooterStd'
import SiteBrand from '../Header/Sitebrand/SiteBrand'
import Spinner from '../Spinner/Spinner'
import Icons from '../../constants/icons'

const Footer = () => {
  const { ReactIcon } = Icons
  return (
    <FooterStyled>
      <FooterBrand>
        <SiteBrand />
        <FooterCopy>
          Copyright © 2023 Brainsdamage Software Corporation
        </FooterCopy>
      </FooterBrand>

      <FootterPowered>
        Powered by
        <div>
          {/* <Spinner>
            <ReactIcon size='1.5em' />
          </Spinner> */}
        </div>
      </FootterPowered>
    </FooterStyled>
  )
}

export default Footer
