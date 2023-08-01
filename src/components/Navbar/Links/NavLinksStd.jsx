import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const SiteLinksContainer = styled.nav`
  width: 100%;

  & ul {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 15px;
  }
`

const SiteLinks = styled.li`
  font-size: 1rem;
  & .active {
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--blue);
  }
`

export { SiteLinks, SiteLinksContainer }
