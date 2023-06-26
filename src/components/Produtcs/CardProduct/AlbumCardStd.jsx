import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f0ffff29; */
  width: 300px;
  position: relative;
`

export const ImagesContainer = styled.div`
  position: relative;
  /* z-index: 1; */
  display: flex;
  gap: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const MainImg = styled.div`
  border-radius: 10px;
  background: #ffffff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  width: 300px;
  height: 300px;

  /* border-radius: 5px; */
`

export const SecondaryImgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const SecondaryImg = styled.div`
  background: #ffffff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  height: 100px;
  width: 75px;
  border-radius: 5px;
`
export const InfoContainer = styled.div`
  display: flex;
  color: var(--dark);
  font-size: 0.8rem;
  font-weight: 300;
  height: 50px;
  width: 280px;
  background-color: #c2bebe;
  border-radius: 0 0 5px 5px;
  padding: 5px;
`
