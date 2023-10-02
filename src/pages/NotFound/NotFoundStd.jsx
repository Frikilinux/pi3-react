import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  width: 90%;
  max-width: 1300px;
  min-height: calc(100vh - 80px);
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
`

const NotFoundTitle = styled.h1`
  color: var(--dark);
  font-size: 3rem;
  @media (max-width: 576px) {
    text-align: center;
    width: 100%;
    gap: 15px;
  }
`

const ImgContainer404 = styled.div`
  width: 95%;
  max-width: 700px;
`

const Img404 = styled.img`
  width: 100%;
`

export { ImgContainer404, Img404, NotFoundContainer, NotFoundTitle }
