import { getDatabase, ref, push, set, onValue} from "firebase/database";
import firebase from "./config";
import {useState, useEffect} from 'react'

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