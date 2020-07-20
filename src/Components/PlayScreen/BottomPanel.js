/** @jsx jsx */

import React from "react";

import Settings from "./Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

export default function () {
  const rightQCount = useSelector((state) => state.rightQuestions);
  const wrongQCount = useSelector((state) => state.wrongQuestions);
  const questionCount = useSelector((state) => state.questionCount);

  return (
    <BottomPanelContainer>
      <WordCountBar questionCount={questionCount} />

      <ScoreBar name="Score">
        <CorrectItems rightQCount={rightQCount} />
        <WrongItems wrongQCount={wrongQCount} />
      </ScoreBar>

      <Settings />
    </BottomPanelContainer>
  );
}

const BottomPanelContainer = styled.div`
  position: absolute;
  top: 80vh;
  display: flex;
  width: 90vw;
  height: auto;
  flex-grow: 1;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: center;
  * {
    font-family: "Roboto Slab", serif;
  }

  @media (max-width: 480px) {
    top: 70vh;
    height: 20%;
  }
`;

const WordCountBar = ({ questionCount }) => {
  console.log("question count", questionCount);
  const WCBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 130px;
    height: 32px;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 6px;
    & > span {
      padding-left: 6px;
    }
  `;

  return (
    <WCBarContainer>
      <FontAwesomeIcon
        icon={faListOl}
        css={css`
          font-size: 1rem;
          color: black;
        `}
      />
      <span>Words: {questionCount}</span>
    </WCBarContainer>
  );
};

const ScoreBar = styled.div`
  width: 150px;

  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 12px;

  * {
    width: 60px;
    margin-left: 6px;
  }
`;

const CorrectItems = ({ rightQCount }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCheckCircle}
        css={css`
          margin: 0;
          color: green;
        `}
      />
      <span>{rightQCount}</span>
    </div>
  );
};

const WrongItems = ({ wrongQCount }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faTimesCircle}
        css={css`
          color: red;
        `}
      />
      <span>{wrongQCount}</span>
    </div>
  );
};
