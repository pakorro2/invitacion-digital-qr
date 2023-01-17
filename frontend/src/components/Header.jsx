import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton, Tooltip, Container, Menu, MenuItem } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useState } from 'react';

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <QrCodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/invitations"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INVI
          </Typography>

          <Nav />
          <QrCodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#/invitations"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INVI
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile & options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>P</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='profile' onClick={handleCloseUserMenu}>
                <Typography component={Link} to={'/profile'} textAlign="center">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem key='invitations' onClick={handleCloseUserMenu}>
                <Typography component={Link} to={'/invitations'} textAlign="center">
                  Invitations
                </Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={handleLogout}>
                <Typography onClick={handleCloseUserMenu} textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
              {!localStorage.getItem('token') &&
                <MenuItem key='register' onClick={handleCloseUserMenu}>
                  <Typography component={Link} to={'/register'} textAlign="center">
                    Register
                  </Typography>
                </MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Header