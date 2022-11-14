import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import {useState} from 'react'
import { AddUser, UpdateUser } from "./firebase/firebasefunction";
import ContactList from "./components/contactList/ContactList";
import { ToastContainer } from "react-toastify";

const initialValues = {username:"", phoneNumber:"", gender:""}

function App() {
  const [info, setInfo] = useState(initialValues)

  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(info.id){
      UpdateUser(info) 
      console.log("updated")
    }else{
      AddUser(info) 
    }
     setInfo(initialValues)    
  }
  const editUpdateUser=(id, username, phoneNumber, gender)=>{
    setInfo({id, username, phoneNumber, gender})
  }

  return ( 
    <div className="App"> 
    <div className="container mt-5">
      <div className="row align-items-md-stretch my-5">

        <div className="col-md-6 mb-3">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Add Contact</h2>
              <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit}/> 
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Contact List</h2>
            <ContactList editUpdateUser={editUpdateUser}/>
          </div>
        </div>

      </div>
      </div>
      <ToastContainer/>
    </div>  
  );
}

export default App;
