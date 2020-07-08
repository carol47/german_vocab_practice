import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTable } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <NavBarContainer>
      <HomeButton />
      <RightNavBar>
        <StatisticsButton />
      </RightNavBar>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  background-color: #f5f5f5;
  border-radius: 20px;
  align-self: center;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 0px 10px;
  overflow: none;

  * {
    font-size: 110%;
    text-decoration: none;
    color: black;
    padding: 5px;
    font-family: "Roboto Slab", serif;
  }

  * {
    position: relative;
    box-size- border-box;
    font-family: 'Roboto', sans-serif;
    
}
a {
    text-decoration: none;
    color: black;
}

a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

`;

const RightNavBar = styled.div`
  * {
    padding: 0px 10px;
  }
`;

export default NavBar;

const NavBarItem = styled.div`
  min-width: 100px;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
`;

const HomeButton = () => {
  return (
    <NavBarItem>
      <Link to="/" css={css``}>
        <FontAwesomeIcon
          icon={faHome}
          css={css`
            font-size: 2rem;
            color: black;
          `}
        />
        Home
      </Link>
    </NavBarItem>
  );
};

const StatisticsButton = () => {
  return (
    <div
      css={css`
        min-width: 100px;
        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-decoration: none;
        }
      `}
    >
      <Link to="/statistics" css={css``}>
        <FontAwesomeIcon
          icon={faTable}
          css={css`
            font-size: 2.5rem;
            color: black;
          `}
        />
        Statistics
      </Link>
    </div>
  );
};
