import { Link } from "react-router-dom"
export default function HeaderComponent() {
  return (
    <>
    

    <div className="titlecard">
      <span className="health">Health</span>
      <div className="heartbeat">❤️</div>
      <span className="tracker">Tracker</span>
     
      <div className="Contact">
        <h3>Emergency Contact 📞</h3>
       
        <h3><Link to="/login" className='noUnderline'>Logout</Link> </h3>
        
        </div>
      </div>
    
      </>
  )
}