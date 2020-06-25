/** @jsx jsx */

import React from 'react';

import Settings from './Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { css, jsx } from "@emotion/core";
import { useSelector } from 'react-redux';

export default function () {

    const rightQCount   = useSelector(state => state.rightQuestions);
    const wrongQCount   = useSelector(state => state.wrongQuestions);
    const questionCount = useSelector(state => state.questionCount)


    return(
        <div css={css`
            width: 90vw;
            height: 10vh;
            flex-grow: 1;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            * {
                font-family: "Georgia, serif";
            }

            @media (max-width: 480px) {
                height: 20%;
            }
        `}>

            <WordCountBar>
                <FontAwesomeIcon icon={faList} css={css`color:black;`} />
                <span>Words: {questionCount}</span>
            </WordCountBar>

            <ScoreBar name="Score">
                <span>
                    <div >
                        <FontAwesomeIcon icon={faCheckCircle} css={css`margin: 0;color:green;`} />
                        <span>{rightQCount}</span>
                        <FontAwesomeIcon icon={faTimesCircle} css={css`color:red;`} />
                        <span>{wrongQCount}</span>
                    </div>
                </span>
            </ScoreBar>
            
            <Settings />    
        </div>
    )

}

const WordCountBar = props => {
    return (
        <div css={css`
            display:flex;
            width: auto;
            height: 2em;
            flex-direction:row;
            justify-content: space-around;
            align-items: center;
            border: 1px solid black;
            border-radius:10px;
            padding: 1%;
            margin: 1%;

            * {
                margin-left: 1px;
            }
        `}>
            {props.children}
        </div>
    );
}

const ScoreBar = props => {

    return (
        <div css={css`
        width: auto;
        height: 2em;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
        border-radius:10px;
        margin: 1%;
        padding: 1%;

        * {
            margin-left: 10px;
        }
    `}>
        {props.children}
        </div>
    );

}