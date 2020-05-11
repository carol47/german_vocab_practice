import React, {useEffect} from 'react';
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
        return (<h2>There are no questions loaded!</h2>);
    return (
        <div  className="text-center mt-5 overflow-hidden">
            <div className="questionContainer ">
                <h2 className="question border rounded mt-1"
                style={{backgroundColor:"#ffc107"}}>{question.question}</h2>
            </div>
            <div className="answersContainer btn-group-vertical col-8 mt-5">
                
                <button className="w-100 p-2" id="answerBtn1" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[0]}</button>
                <button className="w-100 p-2" id="answerBtn2" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[1]}</button>
                <button className="w-100 p-2" id="answerBtn3" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[2]}</button>
                <button className="w-100 p-2" id="answerBtn4" onClick={(e) => checkAnswerTest(e.target)}>{question.answers[3]}</button>
            </div>
        </div>

    );
}   