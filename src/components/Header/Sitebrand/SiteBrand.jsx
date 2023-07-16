import React from 'react'
import { BrandName, Logo } from './SiteBrandStd'
import Icons from '../../../constants/icons'
import { useNavigate } from 'react-router-dom'

const SiteBrand = () => {
  const navigate = useNavigate()
  const {LogoImg } = Icons
  return (
    <Logo onClick={() => navigate('/')}>
      <LogoImg size='1.5em' color='var(--celeste)' />
       <BrandName>Brainsdamage</BrandName>
    </Logo>
  )
}

export default SiteBrand
