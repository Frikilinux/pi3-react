import React, { useEffect, useState } from 'react'
import { useVerify } from '../../hooks/useVerify'
import { useParams, useSearchParams } from 'react-router-dom'
import Main from '../../components/UI/MainWrapper/MainWrapper'

const Verify = () => {
  const { emailVerify, error } = useVerify()
  const [searchParams] = useSearchParams()
  const [verifiying, setVerifying] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setVerifying(true)

    const verify = async () => {
      const response = await emailVerify(searchParams.get('token'))
      setData(response)
      setVerifying(false)
    }
    verify()
  }, [])

  return (
    <Main>
      {verifiying && <h1>Verifying...</h1>}
      {error && <h1>Error: {error?.message}</h1>}
      {error?.name === 'TokenExpiredError' && (
        <h1>Token expired. Please generate a new one.</h1>
      )}
      {error?.name === 'JsonWebTokenError' && (
        <h1>Token Error. Please generate a new one.</h1>
      )}
      {console.log(data, 'STATE DATA')}
      {console.log(verifiying, 'STATE')}
      {/* // <div>Verify TOKEN {console.log(searchParams.get('token'))}</div> */}
    </Main>
  )
}

export default Verify
