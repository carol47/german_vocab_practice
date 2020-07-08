/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import QuestionGenerator from "../../Controllers/QuestionGenerator";

import GamePanel from "./GamePanel";
import BottomPanel from "./BottomPanel";
import { useSelector, useDispatch } from "react-redux";
import { loadQuestion, updateQuestionCount } from "../../redux/store";

export default function PlayScreen() {
  const dispatch = useDispatch();

  const filters = useSelector((store) => store.filters);

  let qg = new QuestionGenerator(filters);

  let nextScreen;

  React.useEffect(() => {
    dispatch(updateQuestionCount(qg.getQuestionsCount()));
  }, [filters, qg, dispatch]);

  if (qg.getQuestionsCount() !== 0) {
    dispatch(loadQuestion(qg.get4btnQuestion()));
    nextScreen = <GamePanel questionGenerator={qg} />;
  }

  return (
    <MainContainer>
      <GamePanel questionGenerator={qg} />
      <BottomPanel />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  width: 80%;
  height: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
  }
`;
