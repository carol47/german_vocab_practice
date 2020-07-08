/** @jsx jsx */

import React, { useEffect } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  loadQuestion,
  correctAnswer,
  wrongAnswer,
  setKeyboardEvents,
} from "../../redux/store";

export default function GamePanel(props) {
  console.log("Rendering gamePanel");

  const dispatch = useDispatch();
  let question = useSelector((store) => store.currentQuestion);
  let keyboardEventsSet = useSelector((store) => store.keyboardEventsSet);
  console.log(question);

  let checkAnswerTest = (target) => {
    let answer = target.textContent;
    if (answer === question.correctAnswer) {
      target.style = "background-color: green";
      setTimeout(() => {
        target.style = "background-color: none";
        dispatch(correctAnswer(question.question, question.level));
        dispatch(loadQuestion(props.questionGenerator.get4btnQuestion()));
      }, 300);
      console.log("yay");
    } else {
      target.style = "background-color: red";
      setTimeout(() => (target.style = "background-color: none"), 300);

      dispatch(wrongAnswer(question.question, question.level));
      console.log("nay");
    }
  };
  useEffect(() => {
    if (!keyboardEventsSet) {
      document.addEventListener("keyup", (e) => {
        if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4") {
          let answerBtn = document.getElementById("answerBtn" + e.key);
          answerBtn.click();
        }
      });
      dispatch(setKeyboardEvents());
    }
  }, [keyboardEventsSet]);

  if (props.questionGenerator.getQuestionsCount() === 0)
    return <NoQuestionsMsg>There are no questions loaded!</NoQuestionsMsg>;
  return (
    <QuestionsContainer>
      <AnswerBox>{question.question}</AnswerBox>
      <AnswersContainer>
        <AnswerButton
          id="answerBtn1"
          onClick={(e) => checkAnswerTest(e.target)}
        >
          {question.answers[0]}
        </AnswerButton>
        <AnswerButton
          id="answerBtn2"
          onClick={(e) => checkAnswerTest(e.target)}
        >
          {question.answers[1]}
        </AnswerButton>
        <AnswerButton
          id="answerBtn3"
          onClick={(e) => checkAnswerTest(e.target)}
        >
          {question.answers[2]}
        </AnswerButton>
        <AnswerButton
          id="answerBtn4"
          onClick={(e) => checkAnswerTest(e.target)}
        >
          {question.answers[3]}
        </AnswerButton>
      </AnswersContainer>
    </QuestionsContainer>
  );
}

const NoQuestionsMsg = styled.div`
  width: 100%;
  height: 70vh;
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const QuestionsContainer = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 480px) {
    height: 70vh;
  }

  div {
    text-align: center;
    width: 100%;
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 5px;
    width: 50%;
  }
  @media (max-width: 720px) {
    button {
      width: 80%;
    }
  }
`;

const AnswerBox = styled.h2`
  font-family: "Roboto Slab", serif;
`;

const AnswerButton = styled.button`
  font-size: 1em;
  height: 4em;
  background-color: white;
  border: solid 1px black;
  border-radius: 5px;
  &:hover {
    transition: background-color 0.2s ease;
    background-color: #f5f5f5;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
    min-height: 4em;
  }
`;
