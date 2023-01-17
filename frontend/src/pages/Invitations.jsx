import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import '../styles/invitations.css'
import getConfig from "../utils/getConfigs";
import QrGenerator from "../components/QrGenerator";
import AddInvitationForm from "../components/AddInitationForm";
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";


const Invitations = () => {

  const [invitations, setInvitations] = useState(null);

  const getInvitations = () => {
    const URL = `http://localhost:9000/api/v1/invitations`
    axios.get(URL, getConfig())
      .then(res => {
        setInvitations(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getInvitations()
  }, [])

  const deleteInvitations = (id) => {
    const URL = `http://localhost:9000/api/v1/invitations/${id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        getInvitations()
      })
      .catch(err => console.log(err))

  }

  return (
    <div>
      <h1 className="title">{`Hi ${invitations && invitations[0]?.user.firstName}, it is your invitations.`}</h1>
      <AddInvitationForm getInvitations={getInvitations} />
      <br />
      <article className='purchase-item'>

        <header className='purchase-header'>
          <li className='product-item2' key='pako'>
            <h3 className='item-title'>Guest Name</h3>
            <div className='quantity-produts'>Amission</div>
            <div className='quantity-produts'>Validity</div>
            <div className='quantity-produts2'>Actions</div>
          </li>
        </header>
        <ul className='purchase-products__list'>
          {invitations?.map(invitation => (
            <li className='product-item' key={invitation.id}>
              <h3 className='item-title'>{invitation.guestName}</h3>
              <div className='quantity-produts'>
                {dayjs(invitation.admissionDataAndTime).format(' D  MMMM, YYYY h:mm A')
                }</div>
              <div className='quantity-produts'>{invitation.admissionIsValid}</div>
              <div className='quantity-produts2'>
                <Tooltip title="Delete">
                  <DeleteIcon sx={{ mr: 1 }} color='primary' onClick={() => deleteInvitations(invitation.id)} />
                </Tooltip>
                <QrGenerator invitation={invitation} />
              </div>
            </li>
          ))}

        </ul>
      </article>
    </div>
  );
}

export default Invitations