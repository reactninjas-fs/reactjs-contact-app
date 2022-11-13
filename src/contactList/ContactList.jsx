import React from 'react'
import user from '../assets/user.png'

const ContactList = () => {
  return (
    <div className="list-group w-auto">
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <img src={user} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Username: </h6>
              <p className="mb-0 opacity-75">Phone Number: </p>
            </div>
            <small className="opacity-50 text-nowrap">Gender</small>
          </div>
        </div>
      </div>
  )
}

export default ContactList