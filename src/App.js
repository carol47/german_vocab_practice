/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlayScreen from './Components/PlayScreen/PlayScreen';

import HomePage from './Components/HomePage/HomePage';
import StatisticsComponent from './Components/PlayScreen/StatisticsComponent';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div css={css`

          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          
      `}>

          <NavBar />
          <Switch>
            <Route path="/training">
              <PlayScreen store={store} />         
            </Route>
            <Route path="/statistics">
              <StatisticsComponent />
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
            
          </Switch>
        </div>
      </Router>
      

    </Provider>
    
  );
}


const NavBar = () => {
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      max-height: 10vh;
      width: 100%;
    `}>
      <nav css={css`
          align-self: center;
          display: flex;
          width: 80%;
          flex-direction: row;
          justify-content: space-between;
          
          padding: 5px;
          
          * {
              font-size: 110%;
              text-decoration: underline;
              color: black;
              padding: 5px;
              font-family: "Georgia, serif";
          }

      `}>
          <Logo><Link to="/">Home</Link></Logo>
          <RightNavBar>
              <Link to="/training">Begin</Link>
              <Link to="/statistics">Statistics</Link>
          </RightNavBar>

      </nav>
    </div>
      

  );
}

const Logo = (props) => {
return (<div css>{props.children}</div>);
}

const RightNavBar = (props) => {
  return (
  <div css={css`
      * {
          padding: 0px 10px;
          
      }
  
  `}>{props.children}</div>
  );
}