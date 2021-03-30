import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Confirmation from './Component/Confirmation/Confirmation';
import Header from './Component/Header/Header';
import { createContext } from 'react';
import { useState } from 'react';
import details from './data/data.json';
import { useEffect } from 'react';
import NoMatch from './Component/NoMatch/NoMatch';
import SignUp from './Component/SignUp/SignUp';
import {Container} from 'react-bootstrap';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  // useEffect(() => {
  //   setInfo(details);
  // }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>name: {loggedInUser.displayName}</p>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="/confirmation/:type">
              <Confirmation />
            </Route>
            <Route path="/signup">
              <Container className="d-flex align-items-center justify-content-center form-container">
                <div className="w-100 form-modifier">
                  <SignUp/>
                </div>
              </Container>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
