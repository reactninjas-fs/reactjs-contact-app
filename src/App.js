import "./App.css";
import ContactForm from "./contactForm/ContactForm";
import {useState} from 'react'
import { AddUser, UpdateUser } from "./firebase/firebasefunction";
import ContactList from "./contactList/ContactList";

const initialValues = {username:"", phoneNumber:"", gender:""}

function App() {
  const [info, setInfo] = useState(initialValues)

  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(info.id){
      UpdateUser(info) 
    }else{
      AddUser(info) 
    }
     setInfo(initialValues)    
  }
  const editUser=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender})
  }

  return (
    <div className="App"> 
    <div className="container">
      <div className="row align-items-md-stretch">

        <div className="col-md-6 mb-2">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Add Contact</h2>
              <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit}/> 
          </div>
        </div>

        <div className="col-md-6 mb-2">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Contact List</h2>
            <ContactList editUser={editUser}/>
          </div>
        </div>

      </div>
      </div>
    </div> 
  );
}

export default App;
