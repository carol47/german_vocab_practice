/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/core";
import { useSelector } from 'react-redux';
import { generateTag } from './Tags';

export default function StatisticsComponent() {

    console.log("Rendering Statistics Component");
    let statistics = useSelector(store => store.statistics);


    return (

        <StatisticsContainer >
            <StatisticsTable>
                <tbody>
                    {Object.keys(statistics).sort().map(id => 
                    <TableRow key={id} >
                        <td>{generateTag(statistics[id].level)}</td>
                        <td>{id}</td>
                        <td>{statistics[id].correctAnswers}</td>
                        <td>{statistics[id].wrongAnswers}</td>
                        <td>{(statistics[id].correctAnswers) /
                        (statistics[id].correctAnswers + statistics[id].wrongAnswers)}</td>
                    </TableRow>)} 
                </tbody>
                    
            </StatisticsTable>
        </StatisticsContainer>
    );
}

const StatisticsContainer = props => {

    return (
        <div css={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            * {
                margin: 16px 0px;
            }

            
        `}>
            <h2 css={css`font-family: "Georgia, serif";`}>Statistics</h2>
            {props.children}
        </div>
    )

}

const StatisticsTable = props => {

    return (
        <table css={css`width: 80%;`}>
            <thead css={css`border-bottom: 1px solid black;`}>
                <tr>
                    <th>Lvl</th>
                    <th>Word</th>
                    <th>Correct Guesses</th>
                    <th>Wrong Guesses</th>
                    <th>Score</th>
                </tr>
            </thead>
            {props.children}
        </table>
    );
}

const TableRow = props => {

    return (

        <tr css={css`
            
            border-bottom: 1px solid black;
            margin: 10px;

        `}>
            {props.children}
        </tr>

    );

}