import React from 'react'
import { SiteLinks, SiteLinksContainer } from './NavLinksStd'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <SiteLinksContainer>
      <ul>
        <SiteLinks>
          <NavLink to={'/'}>Home</NavLink>
        </SiteLinks>
        <SiteLinks>
          <NavLink to={'/login'}>Login</NavLink>
        </SiteLinks>
        <SiteLinks>
          <NavLink to={'/register'}>Register</NavLink>
        </SiteLinks>
        <SiteLinks>
          <NavLink to={'/artist'}>Artist</NavLink>
        </SiteLinks>
      </ul>
    </SiteLinksContainer>
  )
}

export default NavLinks
