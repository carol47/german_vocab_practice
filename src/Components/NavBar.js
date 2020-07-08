import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <Link to="/">Home</Link>
      </Logo>
      <RightNavBar>
        <Link to="/statistics">Statistics</Link>
      </RightNavBar>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
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
`;

const Logo = (props) => {
  return <div css>{props.children}</div>;
};

const RightNavBar = styled.div`
  * {
    padding: 0px 10px;
  }
`;

export default NavBar;
