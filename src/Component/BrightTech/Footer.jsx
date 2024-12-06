import {Link} from 'react-router-dom'
import './Footer.css';
export default function Footer() {
    return (
        <>
        <div className="footer">
           
                <Link to="https://x.com/Gannisai_tarak/media"> 
                    <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="Twitter" className="social-icon twitter-icon" />
                </Link>
        
            
                <Link to="https://www.linkedin.com/in/ganni-sai">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIJO26m5OteC6zsN32X_ggyaDaY_zUm0Cc1SKVH9JkxEl8IdHZIg4CSfrX62_wjVzzoc&usqp=CAU" alt="LinkedIn" className="social-icon linkedin-icon" />
                    </Link>

                 
                <Link to="https://www.instagram.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="social-icon instagram-icon" />
                </Link>


                <Link to="https://www.facebook.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook" className="social-icon facebook-icon" />
                </Link>

               </div>
        </>
    );
}