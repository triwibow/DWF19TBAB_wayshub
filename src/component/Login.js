import '../App.css';
import title from  '../title.svg'

function Login(){
    return(
        <div className="landing-container">
            <div className="landing-welcome">
                <img src={title} alt ="title" />
                <button className="button">Sign Up</button>
            </div>
            <div className="landing-form">
                <h1>Sign In</h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="button">Sign In</button>
            </div>
        </div>
    )
}

export default Login;