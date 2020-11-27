import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// component
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component//navbar/Navbar';

// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Subscribtion from './pages/Subscribtion';
import Detail from './pages/Detail';
import AddVideo from './pages/AddVideo';
import MyChannel from './pages/MyChannel';
import EditChannel from './pages/EditChannel';
import ContentCreator from './pages/ContentCreator';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={defaultContainer} />
        </Switch>
      </div>
    </Router>
  );
}

const defaultContainer = () =>{
  return(
    <div className="wrapper">
        <Sidebar />
        <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/subscribtion" component={Subscribtion} />
              <Route path="/detail" component={Detail} />
              <Route path="/add" component={AddVideo} />
              <Route path="/my-channel" component={MyChannel} />
              <Route path="/edit-channel" component={EditChannel} />
              <Route path="/content-creator" component={ContentCreator} />
            </Switch>
        </div>
    </div>
  )
}

export default App;
