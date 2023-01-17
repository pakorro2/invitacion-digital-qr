import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import getConfig from '../utils/getConfigs';

const defaulvalue = {
  guestName: "",
  admision: "",
  validity: "",
}

const AddInvitationForm = ({ getInvitations }) => {

  const [open, setOpen] = useState(false);
  const { handleSubmit, reset, register } = useForm({ defaulvalue })

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addInvitations = (data) => {
    const URL = `https://api-invitation-qr.pakodev.site/api/v1/invitations`
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        getInvitations()
        reset()
        handleClose()
      })
      .catch(err => console.log(err))

  }
  const submit = data => {
    addInvitations(data)
  }

  return (
    <div>
      <Button fullWidth variant="contained" onClick={handleClickOpen}>
        Add Invitations
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please enter the details of the invitation"}
        </DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            flexDirection='row'
            flexWrap='wrap'
            maxWidth='1000px'
            component="form"
            onSubmit={handleSubmit(submit)}
          >
            <TextField
              id="email"
              label="Guest Name"
              type='text'
              margin='normal'
              fullWidth
              {...register('guestName')}
              required
            />
            <TextField
              id='admissionDataAndTime'
              label="Admission"
              type="datetime-local"
              margin="normal"
              min={new Date()}
              focused
              fullWidth
              {...register('admissionDataAndTime')}
              required
            />
            <TextField
              id='admissionIsValid'
              label="Validity"
              type="date"
              margin="normal"
              fullWidth
              focused
              {...register('admissionIsValid')}
              required
            />
            <Button fullWidth type='submit' variant='contained'>Add Invitations</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddInvitationForm