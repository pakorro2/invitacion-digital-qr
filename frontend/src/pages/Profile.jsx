import { useState } from 'react'

const Profile = () => {
  const [firstName] = useState('John')

  return (
    <div className='unauthorized'>
      <figure>{firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{firstName}!</strong> You can view this page because
        you're logged in
      </span>
    </div>
  )
}

export default Profile