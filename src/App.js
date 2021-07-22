import './App.css';
import UserForm from './components/UserForm';
import Buddies from './components/Buddies';
import Connect from './components/Connect';
import Home from './components/Home';
import Landing from './components/Landing';
import Locations from './components/Locations';
import Login from './components/Login';
import Reminders from './components/Reminders';
import Store from './components/Store';
import Verify from './components/Verify';
import Intro from './components/Intro';
import GoogleLogin from './components/GoogleLogin';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/buddies">
                    <Buddies/>
                </Route>
                <Route path="/connect">
                    <Connect/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route exact={true} path="/">
                    <Landing/>
                </Route>
                <Route path="/locations">
                    <Locations/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/reminders">
                    <Reminders/>
                </Route>
                <Route path="/reminders">
                    <Reminders/>
                </Route>
                <Route path="/store">
                    <Store/>
                </Route>
                <Route path="/userForm">
                    <UserForm/>
                </Route>
                <Route path="/verify">
                    <Verify/>
                </Route>
                <Route path="/intro">
                    <Intro/>
                </Route>
                <Route path="/googleLogin">
                    <GoogleLogin/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
