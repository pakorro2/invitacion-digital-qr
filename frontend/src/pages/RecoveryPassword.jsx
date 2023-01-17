import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const RecoveryPassword = () => {

  const [message, setMessage] = useState(null)
  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    const URL = 'https://api-invitation-qr.pakodev.site/api/v1/auth/recovery-password'
    axios.post(URL, data)
      .then(res => {
        alert(res.data.message)
        setMessage(res.data.message)
      })
      .catch(err => alert(err))
    reset()
  }

  if (message) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
        <img style={{ width: '100%', maxWidth: '400px' }} src="https://cdn-icons-png.flaticon.com/512/7286/7286142.png" alt="Mensaje enviado" />
        <h1> {message}</h1>
      </div>

    )
  }

  return (

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="form"
      maxWidth="500px"
      onSubmit={handleSubmit(submit)}
    >
      <h1>Forgot your password?</h1>
      <p>Please enter the email you use to sing in to invitation QR.</p>

      <TextField
        id="email"
        label="Email"
        type='email'
        placeholder="user@mail.com"
        {...register('email')}
        fullWidth
        required
        margin="normal"
      />

      <Button type='submit' variant='contained'>Send</Button>

      <div style={{ paddingTop: '10px' }}>
        Already have an account?
        <Link to="/login"> login</Link>
      </div>

    </Box>

  )
}

export default RecoveryPassword