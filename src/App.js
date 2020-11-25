import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Subscribtion from './pages/Subscribtion';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/subscribtion">
            <Subscribtion/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
