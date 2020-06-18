/** @jsx jsx */

import React, {useEffect} from 'react';
import { css, jsx } from "@emotion/core";
import AnswerButton from '../Basic/AnswerButton';
import { useSelector, useDispatch } from 'react-redux';
import {loadQuestion, correctAnswer, wrongAnswer, setKeyboardEvents } from '../../redux/store';

export default function GamePanel(props) {

    console.log("Rendering gamePanel");
    
    const dispatch = useDispatch();
    let question = useSelector(store => store.currentQuestion);
    let keyboardEventsSet = useSelector(store => store.keyboardEventsSet);
    console.log(question);
    
    let checkAnswerTest = (target) => {
        let answer = target.textContent;
        if(answer === question.correctAnswer){
            target.style= "background-color: green";
            setTimeout(() => {
                target.style= "background-color: none";
                dispatch(correctAnswer(question.question, question.level));
                dispatch(loadQuestion(props.questionGenerator.get4btnQuestion()));
                
            }, 300);
            console.log("yay");
        }
        else{
            target.style= "background-color: red";
            setTimeout(() => target.style="background-color: none", 300);

            dispatch(wrongAnswer(question.question, question.level));
            console.log("nay");
        }
        
    }
    useEffect(() => {
        if(!keyboardEventsSet){
            document.addEventListener("keyup", (e) => {
                if(e.key === "1" ||
                    e.key === "2" ||
                    e.key === "3" ||
                    e.key === "4"){
                        let answerBtn = document.getElementById("answerBtn" + e.key);
                        answerBtn.click();
                    }
            });
            dispatch(setKeyboardEvents());
        }
    }, [keyboardEventsSet]);
    

    if(props.questionGenerator.getQuestionsCount() === 0)
        return (<NoQuestionsMsg />);
    return (
        <QuestionsContainer>
            <AnswerBox>{question.question}</AnswerBox>
            <AnswersContainer>
                <AnswerButton id="answerBtn1" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[0]}</AnswerButton>
                <AnswerButton id="answerBtn2" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[1]}</AnswerButton>
                <AnswerButton id="answerBtn3" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[2]}</AnswerButton>
                <AnswerButton id="answerBtn4" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[3]}</AnswerButton>
            </AnswersContainer>
        </QuestionsContainer>

    );
}   

const NoQuestionsMsg = props => {

    return (
  
      <div css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}><h2>There are no questions loaded!</h2>
      </div>
  
    );
  
  }
  
const QuestionsContainer = props => {

return (

    <div css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 20px 0 0 0;

        div {
            margin: 20px;
            text-align: center;
            width: 100%
        }

        `}>
            {props.children}
        </div>

);
}

const AnswersContainer = props => {

return (

    <div className="answersContainer" css={css`
    display: flex;
    flex-direction: column;
    align-items: center; 
    button {
        padding: 5px;
        width: 50%
        
    }
`}>
    {props.children}
</div>        

);

}

const AnswerBox = props => {

    return (

        <div>
            <h2 css={css`
            font-family: "Georgia, serif"`}
            >{props.children}</h2>
        </div>

    );

}