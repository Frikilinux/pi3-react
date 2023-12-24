import styled from "styled-components";

export const RecoverContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 70px;
  @media (max-width: 576px) {
  }
`

export const RecoverFormContainer = styled.div`
  color: var(--grey);
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-width: 300px;
  & h1 {
    text-align: center;
  }
  /* width: 50%; */
`
