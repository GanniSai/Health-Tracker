import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div className="image-background">

      <div className="titlecard">
        <span className="health">Health</span>
        <div className="heartbeat">❤️</div>
        <span className="tracker">Tracker</span>
        <div className="search">
            <input type="text" />
            <button className='searchbtn'>Search</button>
        </div>
        <div className="Contact">
          <h3>Emergency Contact 📞</h3>
          <h3 >About</h3>
          <h3><Link to="/login" className='noUnderline'>Login</Link> </h3>
          <h3><Link to="/register" className='noUnderline'>Register📝</Link></h3>
          </div>
        </div>
        

      


          <div className='descriptionOfhomepage'>
         <h3>Welcome to HealthTracker, where compassionate care meets advanced technology. </h3> 
          <h3>Our commitment to your health drives us to provide top-notch medical services, all within a welcoming environment.</h3>
          <h3>Here, you can access critical information about our departments</h3>
          <h3>Find the right specialists, and book appointments with ease.</h3>
          <h3>At HealthTracker, we offer a comprehensive range of services tailored to meet your healthcare needs.</h3>
              <h3> From general medicine and emergency care to specialized departments like cardiology, orthopedics, and maternity.</h3>
              <h3>  Our dedicated team ensures that you receive the best possible care.</h3>
             <button className='searchbtn'>Want more ?</button> 
          </div>
          
   
          
      </div>
    );
  }



  


  
  