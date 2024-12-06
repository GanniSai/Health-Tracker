import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Welcome.css";
import { useAuth } from "./Security/AuthContext";
import { retriveHelloworldBean } from "./Todo/Backendconnect";


export default function WelcomePage() {
  const { username } = useAuth()
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(`/TodoPage/${username}`)
  }



const [message,setMessage]=useState(null);
  function callGreetMessage(){

    retriveHelloworldBean()
    .then(
      (response) => successfullResponse(response))
      .catch(
        (error) =>showErrorResponse(error)
      )
      .finally(
        console.log('clean')
      )
  }
  function successfullResponse(response){
    console.log(response)
    setMessage(response.data)
  }
  function showErrorResponse(error){
    console.log(error)
  }

  return (
    <>
      <h2> Welcome to your personalized dashboard👋</h2>
      <div className="getusername">
        <p>{username} !</p>
      </div>
      <button className="userLogout">
        <Link to="/login" className="noUnderline">Logout 🔓</Link>
      </button>

      <div className="FirstrowTasks">
        <div className="tasks2" style={{ height: "1px", backgroundColor: "#61ff66" }}>
         <button onClick={callGreetMessage}>Greet</button>
         <h3 className="greet-msg">{message}</h3>
        </div>
        <div
          className="tasks3"
          style={{ height: "5px", backgroundColor: "yellow", fontSize: "25px", fontWeight: 1000 }}
        >
          Health<span className="taskname3" style={{ color: "darkgreen",fontSize: "35px", fontWeight: 1000 }}>Tracker</span>
        </div>
        <div className="tasks4" style={{ height: "1px", backgroundColor: "#86c1fb" }}>
          1<span className="taskname4">NewTask</span>
        </div>
      </div>

      <div className="Btn-">
        <button onClick={handleNavigation}>Patients Records</button>
      </div>
    </>
  );
}
