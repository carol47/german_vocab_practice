/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import PlayScreen from "./Components/PlayScreen/PlayScreen";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import StatisticsComponent from "./Components/PlayScreen/StatisticsComponent";

import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <MainScreen>
            <NavBar />
            <Switch>
              <Route path="/training">
                <PlayScreen store={store} />
              </Route>
              <Route path="/statistics">
                <StatisticsComponent />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </MainScreen>
        </Router>
      </Layout>
    </Provider>
  );
}

const MainScreen = ({ children }) => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};
