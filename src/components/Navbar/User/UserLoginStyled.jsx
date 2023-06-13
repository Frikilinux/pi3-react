import { styled } from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`

export const UswrImgContainer = styled.div`
  border-radius: 5px;
  height: 50px;
  width: 50px;
  background-color: var(--dark);
`

export const UserImg = styled.img`
  height: 100%;
`

export const UserNameData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  & p{
    padding: 0 10px;
    color: var(--white);
    font-size: 20px;
  }
  & p:last-child {
    opacity: 0.6;
    font-weight: 700;
    font-size: 15px;
  }
`
