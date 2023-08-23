import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const SiteLinksContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-color: var(--dark);
  @media (max-width: 576px) {
    z-index: 8;
    top: 50px;
    position: fixed;
  }
`

const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  /* @media (max-width: 576px) {
    flex-direction: column;
    position: absolute;
  } */
`

const SiteLinks = styled.li`
  padding: 2px 5px;
  font-size: 1rem;
  border-radius: 5px;
  /* background-color: var(--green); */

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`
const NavlinkStyled = styled(NavLink)`
  padding: 2px 5px;
  /* border-radius: 5px; */
  /* background-color: var(--blue); */
  &.active {
    font-weight: 500;
    color: var(--dark);
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--green);
  }
`

export { SiteLinks, SiteLinksContainer, LinksList, NavlinkStyled }
