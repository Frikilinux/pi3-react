import React from 'react'
import SectionWrapper from '../../components/UI/SectionWrapper/SectionWrapper'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import {
  Img404,
  ImgContainer404,
  NotFoundContainer,
  NotFoundTitle,
} from './NotFoundStd'

const NotFound = () => {
  return (
    <Main>
      <SectionWrapper bg='#838282' id='Artits'>
        <NotFoundContainer>
          <NotFoundTitle>404 NotFound, sorry ...</NotFoundTitle>

          <ImgContainer404>
            <Img404 src='https://res.cloudinary.com/dixlr2ujp/image/upload/v1694385061/Integrador/tzvz8cij9rebg8b3v8um.webp' />
          </ImgContainer404>
        </NotFoundContainer>
      </SectionWrapper>
    </Main>
  )
}

export default NotFound
