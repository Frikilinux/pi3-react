import styled from 'styled-components'

const SearchSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1300px;
  padding: 50px 0;
  gap: 50px;
`

const SearchSectionTitle = styled.div`
  text-align: right;
  color: var(--dark);
  & p {
    font-weight: 700;
    font-size: 2.5rem;
  }
  & span {
    font-size: 2rem;
    font-weight: 400;
  }
`

export { SearchSectionContainer, SearchSectionTitle }
