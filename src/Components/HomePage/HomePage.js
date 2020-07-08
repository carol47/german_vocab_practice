/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import booksJpg from "../../assets/books.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrimaryButton } from "../Basic/Buttons";

export default function HomePage({ children }) {
  return (
    <HomePageContainer>
      <BodyContainer>
        <LeftTextContainer />
        <RightImage />
      </BodyContainer>
    </HomePageContainer>
  );
}

const LeftTextContainer = ({ children }) => {
  return (
    <div
      css={css`
        width: 40%;
        display: flex;
        flex-direction: column;

        @media (max-width: 720px) {
          width: 80%;
        }

        * {
          margin: 10px;
        }
      `}
    >
      <PageTitle>A language-learning experience</PageTitle>
      <p>
        Welcome. German Vocabulary Trainer is an indie tool to help memorize
        german vocabulary. It's on constant development, so remember to check it
        out regularly. To start, click on the 'Begin' link on the navigation
        bar.{" "}
      </p>
      <p>Hint: you can use keys 1-4 to answer the questions.</p>
      <Link to="/training">
        <PrimaryButton>Begin</PrimaryButton>
      </Link>
    </div>
  );
};

const RightImage = () => {
  return (
    <div
      css={css`
        margin-top: 32px;

        @media (max-width: 720px) {
          display: none;
        }
      `}
    >
      <img
        src={booksJpg}
        alt="A pile of books"
        css={css`
          max-width: 256px;
        `}
      />
    </div>
  );
};

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  margin-top: 64px;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;

  justify-content: space-evenly;

  @media (max-width: 720px) {
    margin-top: 32px;
  }
`;

const PageTitle = styled.h1`
  font-family: "Georgia, serif";
  font-size: 250%;
  align-self: center;

  @media (max-width: 480px) {
    font-size: 150%;
  }
`;
