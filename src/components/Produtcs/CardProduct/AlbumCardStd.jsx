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
  border-radius: 0 0 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const MainImg = styled.div`
  border-radius: 0 0 10px 10px;
  background: #ffffff url(${({ imgsrc }) => `${imgsrc}`}) center/cover no-repeat;
  width: 300px;
  height: 300px;

  /* border-radius: 5px; */
`
export const TitleContainer = styled.div`
  padding: 5px;
  /* position: absolute; */
  z-index: 3;
  background-color: #252425;
  backdrop-filter: blur(10px);
  width: 300px;
  border-radius: 5px 5px 0 0;
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
  width: 280px;
  background-color: #c2bebe;
  background: linear-gradient(
    -45deg,
    rgba(228, 225, 225, 0.514),
    rgba(255, 255, 255, 0.678)
  );
  border-radius: 0 0 5px 5px;
  padding: 5px;
`

export const ExplicitFrame = styled.div`
  opacity: 0.6;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 3;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 5px;
  color: var(--fg);
  background: var(--dark);
  border: 1px solid #fff;
  border-radius: 3px;
`