import React from 'react'
import { BrandName, Logo } from './SiteBrandStd'
import Icons from '../../../constants/icons'
import { useNavigate } from 'react-router-dom'
import useButtons from '../../../hooks/useButtons'

const SiteBrand = () => {
  const { hideAllModals } = useButtons()
  const navigate = useNavigate()
  const { LogoImg } = Icons
  return (
    <Logo
      onClick={() => {
        hideAllModals()
        navigate('/')
      }}
    >
      <LogoImg size='1.5em' color='var(--celeste)' />
      <BrandName>Brainsdamage</BrandName>
    </Logo>
  )
}

export default SiteBrand
