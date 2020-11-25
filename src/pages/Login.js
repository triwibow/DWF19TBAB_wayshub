import {Link} from 'react-router-dom';

import '../App.css';
import title from '../title.svg';

function Login(){

    return(
        <div className="landing-container">
            <div className="landing-welcome">
                <img src={title} alt ="title" />
                <Link to="/register" className="link">
                    <button className="button">Sign Up</button>
                </Link>
            </div>

            <div className="landing-form">
                <h1>Sign In</h1>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <Link to="/" className="link">
                        <button className="button">Sign In</button>
                    </Link>
                </form>
            </div>
        </div> 
    )
}

export default Login;