import { styled } from "styled-components";

export const AlbumsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media(max-width: 576px){
    gap: 22px;
    width: 98%;
    padding: 0;
  }
  
`
