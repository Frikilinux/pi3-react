import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const SiteLinksContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  /* background-color: var(--dark); */
  @media (max-width: 992px) {
    flex: unset;
    background-color: var(--dark);
  }
  `

const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  @media (max-width: 992px) {
    gap: unset;
  }
`

const SiteLinks = styled.li`
  padding: 2px 5px;
  font-size: 1rem;
  border-radius: 5px;
`
const NavlinkStyled = styled(NavLink)`
  padding: 2px 5px;
  font-weight: 500;
  color: var(--grey);
  &.active {
    font-weight: 600;
    color: var(--dark);
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--green);
  }
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
`

export { SiteLinks, SiteLinksContainer, LinksList, NavlinkStyled }
