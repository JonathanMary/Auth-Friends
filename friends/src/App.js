import './App.css';
import Login from "./components/Login";
import { Route, Link, Switch } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO</h1>
      <Switch>
        <PrivateRoute exact path="/privateroute" component={FriendsList} />
        <Route path="/login" component={Login} />
    </Switch>
      </header>
    </div>
  );
}

export default App;
