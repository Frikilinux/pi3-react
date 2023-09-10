import { styled } from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background-color: var(--dark);
  height: 45px;
  padding: 0px 15px;
  gap: 30px;
  min-width: 300px;
  & button {
    background-color: transparent;
  }
  @media (max-width: 576px) {
  width: 95%;
  }
`

export const SearchInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--grey);
  height: 30px;
  width: 100%;
  /* border-radius: 20px; */
  background-color: var(--dark);
  padding: 0 30px;
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`
