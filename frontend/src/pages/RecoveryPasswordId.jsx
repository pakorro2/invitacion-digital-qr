import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'

const RecoveryPasswordId = () => {

  const { handleSubmit, register, reset } = useForm()

  const { id } = useParams()
  const submit = data => {
    const URL = `http://localhost:9000/api/v1/auth/recovery-password/${id}`
    axios.patch(URL, data)
      .then(res => {
        alert('Your password was successfully changed.')

      })
      .catch(err => alert(err))
    reset()
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
      <h1>Password Reset</h1>
      <p>Please enter your new password.</p>

      <TextField
        id='password'
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        {...register('password')}
        fullWidth
        required
      />

      <Button type='submit' variant='contained'>Reset password</Button>

      <div style={{ paddingTop: '10px' }}>
        Already have an account?
        <Link to="/login"> login</Link>
      </div>

    </Box>
  )
}

export default RecoveryPasswordId