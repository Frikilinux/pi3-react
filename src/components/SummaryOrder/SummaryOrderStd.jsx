import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 400px;
  height: 150px;
  background-color: var(--dark);
  border-radius: 10px;
`
export const OrderImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  & img:nth-child(1) {
    left: 0px;
    overflow: hidden;
  }
  & img:nth-child(2) {
    left: 30px;
    overflow: hidden;
  }
  & img:nth-child(3) {
    left: 60px;
    overflow: hidden;
  }
`

export const OrederItemImg = styled.img`
  position: absolute;
  /* right: 10%; */
  height: 75%;
  border-radius: 5px;
  box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.4);`

export const OrderAlbumQty = styled.div`
position: relative;
left: -50px;
  font-size: 2rem;
  font-weight: 600;
`

export const OrderItemsQty = styled.div`
position: relative;
left: -40px;
  font-size: 1.5rem;
  font-weight: 500;
`
