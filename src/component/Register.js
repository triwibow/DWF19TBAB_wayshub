import '../App.css';

function Register(){
    return(
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
    )
}

export default Register;