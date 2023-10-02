import styled from 'styled-components'

const VerifyContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 70%;
  max-width: 1200px;
  border-radius: 5px;
  background-color: #40a8ec30;
`

const VerifyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  font-size: 1.5rem;
`

const VerifyError = styled.div`
  align-self: flex-end;
  font-size: 0.7em;
  font-family: 'Courier New', Courier, monospace;
`

export { VerifyText, VerifyError, VerifyContainer }
