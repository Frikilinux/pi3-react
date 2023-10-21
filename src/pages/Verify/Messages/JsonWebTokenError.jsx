import React from 'react'
import { VerifyText } from '../VerifyStd'
import ButtonPrimary from '../../../components/UI/Button/ButtonPrimary'
import { Link } from 'react-router-dom'

const JsonWebTokenError = ({ onClick }) => {
  return (
    <VerifyText>
      We cant verify your token, please go to the <Link to='/login'>login page</Link> and try to
      generate a new one.
    </VerifyText>
  )
}

export default JsonWebTokenError
