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
`

const SiteLinks = styled.li`
  padding: 2px 5px;
  font-size: 1rem;
  border-radius: 5px;
`
const NavlinkStyled = styled(NavLink)`
  padding: 2px 5px;
  &.active {
    font-weight: 500;
    color: var(--dark);
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--green);
  }
`

export { SiteLinks, SiteLinksContainer, LinksList, NavlinkStyled }
