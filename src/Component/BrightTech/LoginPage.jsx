import { useState } from 'react';
 import './Login.css';
import {useNavigate} from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
//  import { useAuth } from './Security/AuthContext';



export default function LoginPage() {
    const[username,setUsername]=useState('')   //HookState
    const[password,setPassword]=useState('')
    const[showsuccessfulmsg,setShowsuccessfulmsg]=useState(false)
    const[showerrormsg,setErrormsg]=useState(false)
    // const setAuth=useAuth()

const navigate=useNavigate()


    function handleUsernameChange(event){
      setUsername(event.target.value)

    }
    function handlePasswordChange(event){
      setPassword(event.target.value)
    }

    function handleSubmit(){
      if(username==="GanniSai" && password==="abcd"){
        // setAuth.setisAuthenticated(true)
        setShowsuccessfulmsg(true)
      console.log("UserVerified")
       navigate(`/welcome/${username}`)
    }else{
      setErrormsg(true)
      console.log("Failed")
    }
  }
  function SuccessfulmsgComponent(){
    if(showsuccessfulmsg){
      return <div className='successlogin'>User Verified</div>
    }
    return null
    }
    function ErrormsgComponent(){
      if(showerrormsg){
        return<div className='errorlogin' style={{fontWeight:"50px",color:"red"}}>Not a Verified User</div>
      }
    }
 

    return (
      <>
      <HeaderComponent/>
     <div className="image-background">
      <div className="UserCompo">
        <SuccessfulmsgComponent/>
        <ErrormsgComponent/>
        <h1 style={{color:"Blue"}}>Want to Log ? </h1>
      UserName:
      <input type="text" className='user'  value={username} onChange={handleUsernameChange}/>
      </div>
      <div className="pass" >
      Password:
      <input type= "password" className='passwd' value={password} onChange={handlePasswordChange}/>
          </div>
          
          <div className="btn">
              <input type="Button"className='logincom'  value="Login" onClick={handleSubmit}/>
          </div>
          <div className='HealthTrackerlogoinlogin'>
            <h1><span>Health</span>
            <span style={{color:"green"}}>Tracker</span></h1>
          </div>
         
          
          </div>
          </>
  
    );
  }



  