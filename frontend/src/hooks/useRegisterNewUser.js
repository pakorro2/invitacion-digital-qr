import axios from 'axios'
import { useEffect, useState } from 'react'

const useRegisterNewUser = () => {

  const [newUser, setNewUser] = useState()
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  useEffect(() => {
    const URL = `https://api-invitation-qr.pakodev.site/api/v1/users`
    axios.post(URL, newUser)
      .then(res => {
        res && alert(`${res.data.firstName} your account was created successfully.`)
        setResponse(res.status)
      })
      .catch(err => {
        newUser && alert(err.response.data.message)
        setError(err.response.data.message)
      })

  }, [newUser])


  return { setNewUser, error, response, setResponse }
}

export default useRegisterNewUser