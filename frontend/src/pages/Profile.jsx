import { Avatar, CardContent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react'
import getConfig from '../utils/getConfigs';

const Profile = () => {
  const [profileinfo, setProfileInfo] = useState(null);

  useEffect(() => {
    const URL = 'https://api-invitation-qr.pakodev.site/api/v1/users/me'
    axios.get(URL, getConfig())
      .then(res => {
        setProfileInfo(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  return (

    <Box
      display="flex"
      flexDirection='column'
      alignItems='center'
    >
      <h1 mt='20px' >Welcome</h1>

      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={''}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {profileinfo?.firstName}  {profileinfo?.lastName}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Apartament Number:
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
            mb='15px'
          >
            {profileinfo?.apartmentNumber}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Mail:
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {profileinfo?.email}
          </Typography>
        </Box>
      </CardContent>


    </Box>
  )
}

export default Profile