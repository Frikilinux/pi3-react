import { styled } from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f0ffff29; */
  width: 250px;
  position: relative;
`

export const ImagesContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  gap: 10px;
  border-radius: 10px;
`

export const MainImg = styled.div`
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.55);
  position: relative;
  z-index: 4;
  border-radius: 10px;
  background: #ffffff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  height: 250px;
  width: 250px;
  &:hover {
    border: 2px solid red;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transform: scale(0.99)
  }
  /* border-radius: 5px; */
`
export const TitleContainer = styled.div`
  padding: 5px;
  color: var(--dark);
  /* position: absolute; */
  /* z-index: 3; */
  backdrop-filter: blur(10px);
  width: 90%;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    -45deg,
    rgba(228, 225, 225, 0.514),
    rgba(255, 255, 255, 0.678)
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  & :first-child {
    width: 100%;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & :last-child {
    font-weight: 500;
    font-size: 0.8rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  color: var(--dark);
  font-size: 0.8rem;
  font-weight: 300;
  height: 50px;
  width: 90%;
  background-color: #c2bebe;
  background: linear-gradient(
    -45deg,
    rgba(228, 225, 225, 0.514),
    rgba(255, 255, 255, 0.678)
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 0 0 5px 5px;
  padding: 5px;
`

export const ExplicitFrame = styled.div`
  opacity: 0.8;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 3;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 5px;
  color: yellow;
  background: #f80505;
  border: 1px solid yellow;
  border-radius: 3px;
`

export const NextButton = styled.div`
  cursor: pointer;
  text-align: center;
  background-color: #991658;
  width: 60%;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 700;
`
