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
      <input onChange={handleChange} value={info.username} name="username" type="text" className="form-control" id="username" />
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
      <input onChange={handleChange} value={info.phoneNumber} name="phoneNumber" type="text" className="form-control" id="phoneNumber" />
    </div>
    <select onChange={handleChange} value={info.gender} name="gender" className="form-select"> 
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
    <button type="submit" className="btn btn btn-outline-light w-100 mt-3">Submit</button>
  </form>
  )
}

export default ContactForm