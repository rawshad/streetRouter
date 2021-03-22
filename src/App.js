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

export const UserContext = createContext();

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(details);
}, []);
  return (
    <div className="App">
      <UserContext.Provider value={[info, setInfo]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
          <Route path="/confirmation/:type">
            <Confirmation/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
