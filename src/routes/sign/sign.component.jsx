import { Outlet,Link} from "react-router-dom";
import {useState} from 'react'
import { auth,signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { createUserOrLogin } from "../../utils/firebase/firestore.firebase";



const SignIn =()=>{
    const [id,setId]=useState('')
    const logGoogleUser=async ()=>{
        if(localStorage.id){
            console.log('you are already logged in')
            console.log('your id in db is ',localStorage.id)
        }else{
            const {user}=await signInWithGooglePopUp()
            createUserOrLogin(user)
            localStorage.id=user.uid
            setId(user.uid)
        }
        
    }
    const logOut=()=>{
        if(localStorage.id){
            localStorage.removeItem('id')
            console.log('id was removed')
            setId('')
        }else{
            console.log('you are not logged in')
        }
    }
    if(localStorage.id && id!==''){
        return(
            <>
            <h1>log out</h1>
            <button onClick={logOut}>log out</button>
            </>
        )
    }else{
        return(
            <>
            <h1>sign in</h1>
            <button onClick={logGoogleUser}>sign in</button>
            </>
        )
    }
}

export default SignIn;