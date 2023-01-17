import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const nav = () => {

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button component={Link} to="/invitations" color="inherit">
        Invitations
      </Button>
      {!localStorage.getItem('token') &&
        <Button component={Link} to="/register" color="inherit">
          Register
        </Button>}
    </Box>
  )
}

export default nav