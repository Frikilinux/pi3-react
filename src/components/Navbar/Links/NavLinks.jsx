import React from 'react'
import { LinksList, NavlinkStyled, SiteLinks, SiteLinksContainer } from './NavLinksStd'
// import { NavLink } from 'react-router-dom'
import { useAlbums } from '../../../hooks/useAlbums'

const NavLinks = () => {
  const { getAlbumsByGenre } = useAlbums()
  return (
    <SiteLinksContainer>
      <LinksList>
        <SiteLinks>
          <NavlinkStyled to={'/'}>Home</NavlinkStyled>
        </SiteLinks>
        <SiteLinks>
          <NavlinkStyled
            to={'/albums'}
            onClick={() => getAlbumsByGenre({ genreId: 0, genreName: 'All' })}
          >
            Albums
          </NavlinkStyled>
        </SiteLinks>
        <SiteLinks>
          <NavlinkStyled to={'/artist'}>Artists</NavlinkStyled>
        </SiteLinks>
        {/* <SiteLinks>
          <NavLink to={'/login'}>Login</NavLink>
        </SiteLinks>
        <SiteLinks>
          <NavLink to={'/register'}>Register</NavLink>
        </SiteLinks> */}
      </LinksList>
    </SiteLinksContainer>
  )
}

export default NavLinks
