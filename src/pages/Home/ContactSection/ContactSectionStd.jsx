import styled from 'styled-components'

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding: 30px 0;
  width: 90%;
  max-width: 1300px;
  gap: 40px;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
`

const ContactFormContainer = styled.div`
  color: var(--grey);
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-width: 300px;
  width: 90%;
  max-width: 650px;
`

const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 100%;
height: 200px;
`

const MessageBox = styled.textarea`
  font-family: 'Montserrat';
  font-size: 1.2rem;
  padding: 10px;
  background-color: var(--lightDark);
  height: 150px;
  border-radius: ${({ $isError }) => ($isError ? '5px 5px 0 0' : '5px')};
  border: 1px solid ${({ $isError }) => ($isError ? 'var(--red)' : 'transparent')};
  &::placeholder {
  }
`

const ErroMsg = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: var(--red);
  color: var(--dark);
  height: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 0 0 5px 5px;
`

const ContactData = styled.div`
  color: var(--grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-weight: 500;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export {
  ContactContainer,
  ContactFormContainer,
  ContactData,
  MessageBoxContainer,
  MessageBox,
  ErroMsg,
}
