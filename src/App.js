import React, { useState } from 'react';
import Login from './component/Login';
import Register from './component/Register';
import title from  './title.svg';

function App() {
  const [isLoginPage, setLoginPage] = useState(true);

  const handleLoginPage = () => {
    (isLoginPage === true)? setLoginPage(false):setLoginPage(true);
  }

  return (
    <div className="App">
      <div className="landing-container">
            <div className="landing-welcome">
                <img src={title} alt ="title" />
                <button className="button" onClick={handleLoginPage}>{(isLoginPage === true)? "Sign Up": "Sign In"}</button>
            </div>
            {isLoginPage ? <Login />: <Register />}
        </div>
    </div>
  );
}

export default App;
