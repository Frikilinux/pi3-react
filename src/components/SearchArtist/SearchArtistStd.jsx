import { styled } from "styled-components";

export const SearchContainer = styled.form`
  padding: 35px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const SearchInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--grey);
  height: 40px;
  border-radius: 10px;
  background-color: var(--dark);
  padding: 0 30px;
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`
