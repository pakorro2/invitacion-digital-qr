import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const { handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://api-invitation-qr.pakodev.site/api/v1/auth/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        navigate('/invitations')
        reset()
      })
      .catch(err => alert(err && 'La The password and/or email are not valid'))
  }

  return (

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="500px"
      component="form"
      onSubmit={handleSubmit(submit)}
    >
      <img style={{ width: '100%', maxWidth: '80px' }} src="https://cdn-icons-png.flaticon.com/512/2943/2943270.png" alt="Mensaje enviado" />
      <h2>Login</h2>
      <p><b>Use demo user:</b></p>
      <div style={{ width: '250px', textAline: 'left' }}>
        <p><b>Email:</b> pakorro222@gmail.com</p>
        <p><b>password:</b> 12346</p>
      </div>
      <TextField
        id="email"
        label="Email"
        type='email'
        margin="normal"
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

      <Button type='submit' variant='contained'>Login</Button>

      <div style={{ paddingTop: '10px' }}>
        Don't have an account?
        <Link to="/register"> Sign Up</Link><br />
        <Link to="/recovery-password"> Forgot password?</Link>
      </div>

    </Box>
  )
}

export default Login