import { styled } from 'styled-components'

export const CardContainer = styled.div`
background-color: #f0ffff29;
  width: 300px;
  height: 450px;
`

export const ImagesContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const MainImg = styled.div`
  background: #ffffff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  width: 215px;
  height: 215px;
  border-radius: 5px;
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
