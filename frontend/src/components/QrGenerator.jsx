import QRCode from "qrcode.react";
import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button, Dialog, Tooltip, DialogActions, DialogContent } from "@mui/material";
import dayjs from 'dayjs';

const QrGenerator = ({ invitation }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${invitation.guestName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <Tooltip title="Ver QR">
        <SearchRoundedIcon color='primary' onClick={handleClickOpen} />
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"QR Code Invitation"}
        </DialogTitle>
        <DialogContent>
          <QRCode
            id="qr-gen"
            value={`Guest Name:${invitation.guestName} |
            Amission:${dayjs(invitation.admissionDataAndTime).format(' D  MMMM, YYYY h:mm A')} | Validity:${invitation.admissionIsValid}`}
            size={290}
            level={"H"}
            includeMargin={true}
          />
          <p>
            Click for{" "}
            <Button onClick={downloadQRCode}>
              Download QR Code
            </Button>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}

export default QrGenerator