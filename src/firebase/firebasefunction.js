import { getDatabase, ref, push, set } from "firebase/database";
import firebase from "./config";

// Create a new post reference with an auto-generated id
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