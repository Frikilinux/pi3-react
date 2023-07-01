import { styled } from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d0d6392;
  width: 100%;
  height: 130px;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`

export const ImgContainer = styled.div`
  background-color: #00800075;
  height: 110px;
  min-width: 110px;
`

export const ItemInfoConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #bc8f8f90;
  height: 100%;
  width: 100%;
  & p {
    font-size: 0.8rem;
  }
`

export const QtyContainer = styled.div`
  border: 1px solid var(--white);
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: ; */
  align-self: flex-end;
  background-color: #22a2ac6f;
  min-width: 35px;
  /* width: 60px; */
  height: 100%;
`

export const QtyBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const DeleteItem = styled.div`
  height: 35px;
  line-height: 35px;
  /* border: 1px solid var(--white); */
  /* border-radius: 0 0 5px 5px; */
`
