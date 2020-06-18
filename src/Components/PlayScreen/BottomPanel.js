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
            width: 100%;
            margin-top: 32px;
            
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            * {
                font-family: "Georgia, serif";
            }
        `}>

            <WordCountBar>
                <FontAwesomeIcon icon={faList} css={css`color:black;`} />
                <span>Words: {questionCount}</span>
            </WordCountBar>

            <ScoreBar name="Score">
                <span>
                    <div >
                        <FontAwesomeIcon icon={faCheckCircle} css={css`color:green;`} />
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
            flex-direction:row;
            justify-content: space-around;
            align-items: center;

            * {
                margin-left: 5px;
            }
        `}>
            {props.children}
        </div>
    );
}

const ScoreBar = props => {

    return (
        <div css={css`
        
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        * {
            margin-left: 10px;
        }
    `}>
        {props.children}
        </div>
    );

}