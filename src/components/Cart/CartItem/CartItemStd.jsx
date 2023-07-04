import { styled } from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #05171ddc;
  width: 100%;
  /* height: 130px; */
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export const AlbumImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 5px;
  width: 110px;
  height: 110px;
  @media (max-width: 576px) {
    width: 80px;
    height: auto
  }
`

export const ItemInfoConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #bc8f8f90; */
  height: 100%;
  width: 100%;
  min-width: 100px;
`

export const AlbumTitle = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-family: 'Yanone Kaffeesatz';
  font-weight: 600;
  font-size: 1.3rem;
`

export const AlbumArtist = styled(AlbumTitle)`
  font-weight: 400;
  font-size: 1rem;
`

export const AlbumData = styled.div`
  display: flex;
  gap: 5px;
  font-size: 0.7rem;
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

export const PriceData = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`

export const QtyBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const DeleteItem = styled.div`
  /* height: 25px; */
  /* line-height: 35px; */
  /* border: 1px solid var(--white); */
  /* border-radius: 0 0 5px 5px; */
`
