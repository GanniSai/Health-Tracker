import HeaderComponent from './HeaderComponent';
import './Register.css';

export default function RegisterPage(){
    return(
     <>
     <HeaderComponent/>
      <div className="image-background">
     <div className='Registerpagecompo'>
     <div className="FixedUserName">UserName: <input type="text" /></div>
     
     <div className="Password1">PassWord: <input type="password"/></div>
    
     <div className="Password2">Re-Enter PassWord:<input type="password"/></div>
     
     <div><button>Submit</button></div>
     </div>
     </div>
     </>
    )
 }