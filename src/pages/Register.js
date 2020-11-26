import {Link} from 'react-router-dom';

import '../App.css';
import title from '../title.svg';

const Register = () => {
    return(
        <div className="landing-container">
              <div className="landing-welcome">
                  <img src={title} alt ="title" />
                  <Link to="/login" className="link">
                    <button className="button">Sign In</button>
                  </Link>
              </div>

            <div className="landing-form">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name Channel"/>
                    <textarea placeholder="Description Channel"></textarea>
                    <button className="button">Sign Up</button>
                </form>
            </div>
        </div>  
    )
}

export default Register;