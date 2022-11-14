import React from 'react'

const ContactForm = ({setInfo, info, handleSubmit}) => {
const handleChange = (e) => {
    e.preventDefault()
    // const name = e.target.name;
    // const value = e.target.value;
    const {name, value} = e.target;
    console.log(name, value)
    setInfo({...info, [name]: value})
}
  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input onChange={handleChange} value={info.username} name="username" type="text" className="form-control" id="username" required />
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
      <input onChange={handleChange} value={info.phoneNumber} name="phoneNumber" type="text" className="form-control" id="phoneNumber" required/>
    </div>
    <div className="mb-3">
    <label htmlFor="phoneNumber" className="form-label">Gender</label>
    <select onChange={handleChange} value={info.gender} name="gender" className="form-select" required> 
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
    </div>  
    <button type="submit" className="btn btn btn-outline-light w-100 mt-3">Submit</button>
  </form>
  )
}

export default ContactForm