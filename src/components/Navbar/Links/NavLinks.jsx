import React from 'react'
import {
  LinksList,
  NavlinkStyled,
  SiteLinks,
  SiteLinksContainer,
} from './NavLinksStd'
// import { NavLink } from 'react-router-dom'
import { useAlbums } from '../../../hooks/useAlbums'
import useButtons from '../../../hooks/useButtons'
import { useSelector } from 'react-redux'

const NavLinks = () => {
  const { getAlbumsByGenre } = useAlbums()
  const { hideAllModals } = useButtons()
  const { user } = useSelector(({ user }) => user)
  return (
    <SiteLinksContainer>
      <LinksList>
        <SiteLinks>
          <NavlinkStyled
            onClick={() => {
              hideAllModals()
            }}
            to={'/'}
          >
            Home
          </NavlinkStyled>
        </SiteLinks>
        <SiteLinks>
          <NavlinkStyled
            to={'/albums'}
            onClick={() => {
              hideAllModals()
              getAlbumsByGenre({ genreId: 0, genreName: 'All' })
            }}
          >
            Albums
          </NavlinkStyled>
        </SiteLinks>
        <SiteLinks>
          <NavlinkStyled
            onClick={() => {
              hideAllModals()
            }}
            to={'/artist'}
          >
            Artists
          </NavlinkStyled>
        </SiteLinks>
        {user && (
          <SiteLinks>
            <NavlinkStyled
              onClick={() => {
                hideAllModals()
              }}
              to={'/summary'}
            >
              Orders
            </NavlinkStyled>
          </SiteLinks>
        )}

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
