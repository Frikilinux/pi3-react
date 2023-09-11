import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 30px; */
  box-shadow: 0px 0px 29px 2px rgba(0, 0, 0, 0.55);
  border-radius: 10px;
  /* background-color: #f0ffff29; */
  /* width: 250px; */
`

export const ImagesContainer = styled.div`
  position: relative;
  z-index: 5;
  /* display: flex; */
  gap: 10px;
`

export const MainImg = styled.div.attrs((props) => ({
  style: {
    background: `var(--grey) url(${props.$imgsrc}) center/cover no-repeat`,
  },
}))`
  position: relative;
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
  /* backdrop-filter: blur(3px); */
  font-family: 'Barlow Condensed';
  padding: 3px 5px;
  color: var(--white);
  width: 100%;
  background-color: #201e20d6;

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
  height: 40px;
  width: 100%;
  color: var(--grey);
  background-color: var(--dark);
  border-radius: 0 0 10px 10px;

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
      @media (max-width: 576px) {
        font-size: 1.2rem;
      }
    }
  }
`

export const OverlayPreview = styled(motion.div)`
  font-size: 3rem;
  font-weight: 400;
  color: var(--grey);
  position: absolute;
  z-index: 5;
  opacity: 0;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: #201e20b2;
  &:hover {
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    /* display: flex; */
  }
`
