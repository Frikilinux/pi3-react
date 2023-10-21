import React, { useEffect } from 'react'
import { useVerify } from '../../hooks/useVerify'
import { useSearchParams, Link } from 'react-router-dom'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { VerifyContainer, VerifyError, VerifyText } from './VerifyStd'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'
import TokenExpiredError from './Messages/TokenExpiredError'
import JsonWebTokenError from './Messages/JsonWebTokenError'
import NewTokenGenerated from './Messages/NewTokenGenerated'
import EmailVerified from './Messages/EmailVerified'
import EmailAlreadyVerified from './Messages/EmailAlreadyVerified'

const Verify = () => {
  const { emailVerify, verifyError, success, fetching, genVerifyToken } =
    useVerify()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const verify = async () => {
      await emailVerify(searchParams.get('token'))
    }
    verify()
  }, [])

  const handleGenVerifyToken = async () => {
    await genVerifyToken(verifyError?.email)
  }

  const tokenResponses = {
    TokenExpiredError: (
      <TokenExpiredError email={verifyError?.email} onClick={handleGenVerifyToken} />
    ),
    JsonWebTokenError: <JsonWebTokenError />,
    SyntaxError: (
      <JsonWebTokenError email={verifyError?.email} onClick={handleGenVerifyToken} />
    ),
    NewTokenGenerated: <NewTokenGenerated email={success?.data?.email} />,
    EmailVerified: <EmailVerified email={success?.data?.email} />,
    EmailAlreadyVerified: <EmailAlreadyVerified />,
  }

  return (
    <Main>
      <VerifyContainer>
        {fetching && <h1>Verifying...</h1>}{' '}
        {tokenResponses[verifyError?.code] && tokenResponses[verifyError?.code]}
        {tokenResponses[success?.code] && tokenResponses[success?.code]}
        {verifyError && (
          <VerifyError>Error: {verifyError?.message}</VerifyError>
        )}
      </VerifyContainer>
    </Main>
  )
}

export default Verify
