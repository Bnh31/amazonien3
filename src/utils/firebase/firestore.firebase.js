import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import { app } from './firebase.utils'

// initializing db

const db =getFirestore(app)
// doc to referance a collection
// getdoc to read from a collection
// setdoc to write to a collection
// to use them you have to use an async function




export const createUserOrLogin=async(user)=>{
    const {uid,displayName,email}=user
    const docReferance1=doc(db,'users',uid)
    const snapshot=await getDoc(docReferance1)
    if(snapshot.exists()===false){
        const signUpDate=new Date()
        const createUser=await setDoc(docReferance1,{name:displayName,email:email,signUpDate})
        console.log('user created succesfully')
    }else{
        console.log('user already exists',snapshot.data())
    }
    
}