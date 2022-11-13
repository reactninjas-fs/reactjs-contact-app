import React from 'react'
import user from '../assets/user.png'
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { DeleteUser, useFetch } from '../firebase/firebasefunction';

const ContactList = ({editUser}) => {
  const {contactList, loading}=useFetch()
  return (
    <div> 
      {
        loading ? "loding" : contactList?.length===0 ? "no data" : contactList?.map((item)=>
        <div className="list-group w-auto">
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
          <img src={user} alt="twbs" width={40} height={40} className="rounded-circle flex-shrink-0" />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Username: {item.username}</h6>
              <p className="mb-0 opacity-75">Phone Number: {item.phoneNumber} </p>
              <p className="mb-0 opacity-75">Gender: {item.gender}</p>
            </div>
            <small className="opacity-50 text-nowrap">
              <AiFillDelete onClick={()=>DeleteUser(item.id)} className='mx-1'/>
              <FiEdit onClick={()=>editUser(item.id,item.username,item.phoneNumber,item.gender)} className='mx-1'/>
            </small>
          </div>
        </div>
      </div>
      )
      }
    </div> 
  )
}

export default ContactList 
