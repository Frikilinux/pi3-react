import styled from 'styled-components'

const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  max-width: 600px;
  width: 100%;
  padding: 10px;
  color: var(--dark);
  & p {
    font-weight: 600;
  }
  @media (max-width: 576px) {
    & p {
      text-align: center;
    }
  }
`

const OrderCardImg = styled.img`
  border-radius: 5px;
  width: 100px;
  @media (max-width: 576px) {
    width: 60px;
  }
`

const AlbumCardData = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

const OrderCardDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 100px;
  @media (max-width: 576px) {
    & p {
      text-align: center;
      font-weight: 500;
    }
  }
`

const OrderAlbumTitle = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Barlow Condensed';
  font-weight: 600;
  font-size: 1.2rem;
`

const OrderAlbumArtist = styled(OrderAlbumTitle)`
  font-weight: 400;
  font-size: 1.1rem;
`

export {
  OrderCardContainer,
  OrderCardImg,
  OrderCardDataInfo,
  OrderAlbumTitle,
  OrderAlbumArtist,
  AlbumCardData,
}
