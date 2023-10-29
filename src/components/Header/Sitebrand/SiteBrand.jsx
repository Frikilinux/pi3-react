import React from 'react'
import { BrandName, Logo, LogoImg } from './SiteBrandStd'
import { useNavigate } from 'react-router-dom'
import useButtons from '../../../hooks/useButtons'
import siteLogo from '../../../assets/brainsdamage-logo.svg'

const SiteBrand = () => {
  const { hideAllModals } = useButtons()
  const navigate = useNavigate()
  return (
    <Logo
      onClick={() => {
        hideAllModals()
        navigate('/')
      }}
    >
      <LogoImg src={siteLogo} alt='Brainsdamage Logo' />
      <BrandName>Brainsdamage</BrandName>
    </Logo>
  )
}

export default SiteBrand
