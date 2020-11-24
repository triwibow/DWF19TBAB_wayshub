import '../App.css';

function Login(){
    return(
        <div className="landing-form">
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="button">Sign In</button>
            </form>
        </div>
    )
}

export default Login;