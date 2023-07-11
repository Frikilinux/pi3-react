import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f0ffff29; */
  /* width: 250px; */
`

export const ImagesContainer = styled.div`
  position: relative;
  z-index: 5;
  /* display: flex; */
  gap: 10px;
  border-radius: 10px;
`

export const MainImg = styled.div`
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.55);
  position: relative;
  /* z-index: 4; */
  /* border-radius: 10px; */
  background: var(--grey) url(${({ imgsrc }) => `${imgsrc}`}) center/cover
    no-repeat;
  height: 260px;
  width: 260px;
  @media (max-width: 576px) {
    height: 160px;
    width: 160px;
  }
  @media (max-width: 380px) {
    height: 140px;
    width: 140px;
  }
  /* &:active {
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.55);
    transform: scale(0.99);
  } */
`
export const TitleContainer = styled.div`
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(3px);
  font-family: 'Barlow Condensed';
  padding: 3px 5px;
  color: var(--white);
  width: 100%;
  background-color: #201e20b2;

  & p {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & :first-child {
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
  & :last-child {
    font-weight: 400;
    font-size: 1rem;
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 300;
  height: 50px;
  width: 100%;
  color: var(--grey);
  background-color: var(--dark);

  padding: 5px;
  & div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    & p {
      font-family: 'Montserrat';
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`

export const OverlayPreview = styled(motion.div)`
  position: absolute;
  z-index: 5;
  opacity: 0;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: #201e20b2;
  &:hover {
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    /* display: flex; */
  }
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
