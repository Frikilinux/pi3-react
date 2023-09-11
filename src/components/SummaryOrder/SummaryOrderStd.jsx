import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 150px;
  background-color: var(--dark);
  border-radius: 10px;
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.3),
    0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 576px) {
    width: 300px;
    height: 120px;
    padding: 5px 10px;
  }
`
export const OrderImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  & img:nth-child(1) {
    left: 0px;
  }
  & img:nth-child(2) {
    left: 35px;
  }
  & img:nth-child(3) {
    left: 70px;
  }
`

export const OrederItemImg = styled.img`
  position: absolute;
  /* right: 10%; */
  height: 80%;
  border-radius: 5px;
  box-shadow: -7px 0px 19px 3px rgba(0, 0, 0, 0.87);
`

export const OrderCardInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 85%;
  @media (max-width: 576px) {
    height: 70%;
  }
`

export const OrderAlbumQty = styled.div`
  color: #c7123f;
  position: relative;
  left: -35px;
  font-size: 2rem;
  font-weight: 700;
  /* text-shadow:
    2px 4px 5px rgba(0, 0, 0, 0.548),
    0px -3px 5px rgba(255, 255, 255, 0.432); */
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`

export const OrderItemsQty = styled.div`
  color: var(--grey);
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  /* text-shadow:
  2px 7px 5px rgba(0, 0, 0, 0.411),
  0px -4px 10px rgba(255, 255, 255, 0.3); */
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`

export const CreatedDate = styled.div`
  color: var(--grey);
  position: relative;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
  `
