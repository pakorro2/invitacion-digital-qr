import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useRegisterNewUser from '../hooks/useRegisterNewUser'


const defaulvalue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  apartmentNumber: "",
}

const SignUp = () => {

  const { setNewUser, response, setResponse } = useRegisterNewUser()

  const { handleSubmit, reset, register } = useForm({ defaulvalue })

  const submit = data => {
    setNewUser(data)
    if (response === 201) {
      reset()
      setResponse(null)
    }
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
      <TextField
        id="firstName"
        label="First Name"
        type='text'
        margin="normal"
        {...register('firstName')}
        fullWidth
        required
      />
      <TextField
        id="lastName"
        label="Last Name"
        type='text'
        margin="normal"
        {...register('lastName')}
        fullWidth
        required
      />
      <TextField
        id="email"
        label="Email"
        type='email'
        placeholder="user@mail.com"
        {...register('email')}
        fullWidth
        required
      />
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
      <TextField
        id="apartmentNumber"
        label="Apartament Number"
        type='text'
        margin="normal"
        {...register('apartmentNumber')}
        fullWidth
        required
      />
      <Button type='submit' variant='contained'>Register</Button>
      <div style={{ textAline: 'left' }}>
        Already have an account?
        <Link to="/login"> login</Link>
      </div>
    </Box>
  )
}

export default SignUp