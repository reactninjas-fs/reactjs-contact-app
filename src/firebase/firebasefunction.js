import { getDatabase, ref, push, set, onValue, remove, update} from "firebase/database";
import firebase from "./config";
import {useState, useEffect} from 'react'
import toastWarningNotify from "../helpers/Toastify"

// data oluşturma
export const AddUser=(info)=>{
    const db=getDatabase(firebase);
    const userRef=ref(db, 'users/');
    const newUserRef=push(userRef);
    set(newUserRef,{
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender
    });
    toastWarningNotify("Contact is Created!")
}

// data okuma
export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [loading, setLoading] = useState()
    useEffect(() => { 
      const db=getDatabase(firebase);
      const userRef=ref(db, 'users/');
      onValue(userRef,(snapshot)=>{
          const data=snapshot.val();
          const userArray=[]
          for(let id in data){
              userArray.push({id, ...data[id]})
          }
          setContactList(userArray)
          setLoading(false)
      })
    }, [])
    return {contactList, loading}
}

//data silme
export const DeleteUser=(id)=>{
    const db=getDatabase(firebase); 
      remove(ref(db,"users/"+id))
      toastWarningNotify("Contact is Deleted!")
}

//data edit
export const UpdateUser = (info) => {
    const db = getDatabase();
    const updates = {};
    updates["users/" + info.id] = info;
    toastWarningNotify("Contact is Edited!")
    return update(ref(db), updates);
  };