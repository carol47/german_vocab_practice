/** @jsx jsx */


import React from 'react';
import { css, jsx } from "@emotion/core";
import QuestionGenerator from '../../Controllers/QuestionGenerator';

import GamePanel from './GamePanel';
import BottomPanel from './BottomPanel';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestion, updateQuestionCount } from '../../redux/store';

export default function PlayScreen() {

  const dispatch = useDispatch(); 
  
  const filters = useSelector(store => store.filters);

  let qg = new QuestionGenerator(filters);
    
  let nextScreen;

    React.useEffect(() => {
      dispatch(updateQuestionCount(qg.getQuestionsCount()));
    }, [filters, qg, dispatch]);
  

      if(qg.getQuestionsCount() !== 0){
        dispatch(loadQuestion(qg.get4btnQuestion()));
        nextScreen = <GamePanel questionGenerator={qg} />
      }
  
  return (
    <MainContainer>
        
        <main css={css`width: 100%;`}>
          <GamePanel questionGenerator={qg}/>
        </main>
          <BottomPanel/> 
    </MainContainer>

  );
}

const MainContainer = props => {
  
  return (

    <div css={css`
      width: 80%;
      height: auto;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 480px) {
        
      }

  `}>
    {props.children}
  </div>

  );
}

