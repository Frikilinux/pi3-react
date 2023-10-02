import React, { useEffect } from 'react'
import { useVerify } from '../../hooks/useVerify'
import { useSearchParams, Link } from 'react-router-dom'
import Main from '../../components/UI/MainWrapper/MainWrapper'
import { VerifyContainer, VerifyError, VerifyText } from './VerifyStd'
import ButtonPrimary from '../../components/UI/Button/ButtonPrimary'

const Verify = () => {
  const { emailVerify, genVerifyToken, error, success, fetching } = useVerify()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const verify = async () => {
      await emailVerify(searchParams.get('token'))
    }
    verify()
  }, [])

  return (
    <Main>
      <VerifyContainer>
        {fetching && <h1>Verifying...</h1>}
        {error?.name === 'TokenExpiredError' && (
          <VerifyText>
            <p>Token expired. Please generate a new one. {error?.email}</p>
            <ButtonPrimary
              onClick={async () => {
                await genVerifyToken(error?.email)
              }}
            >
              Send new verification email
            </ButtonPrimary>
          </VerifyText>
        )}
        {error?.name === 'JsonWebTokenError' && (
          <VerifyText>Token Error. Please generate a new one.</VerifyText>
        )}

        {success?.name === 'new_token_generated' && (
          <VerifyText>
            <p>
              New verification email was sent to {success?.user.email}. Please
              check your email and follow the verification link.
            </p>

            <p>
              After that you can <Link to='/login'>login</Link>.
            </p>
          </VerifyText>
        )}
        {success?.name === 'email_verified' && (
          <VerifyText>
            <p>Email {success?.user.email} verified.</p>
            <p>
              You can now <Link to='/login'>login</Link>.{' '}
            </p>
            <p>Enjoy the music.</p>
          </VerifyText>
        )}
        {error && <VerifyError>Error: {error?.message}</VerifyError>}
      </VerifyContainer>
    </Main>
  )
}

export default Verify
