import React from 'react';
import { useSelector } from 'react-redux';
import generateTag from './Tags';

export default function StatisticsComponent() {

    console.log("Rendering Statistics Component");
    let statistics = useSelector(store => store.statistics);


    return (

        <div style={{height:"100%"}} className="" id="statistics" >
            <h2>Statistics</h2>
            <div className="overflow-hidden">
                <table className="table table-responsive table-hover table-dark overflow-auto" id="statisticsTable">
                    <thead>
                        <tr>
                            <th>Lvl</th>
                            <th>Word</th>
                            <th>Correct Guesses</th>
                            <th>Wrong Guesses</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(statistics).sort().map(id => 
                        <tr key={id}>
                            <td>{generateTag(statistics[id].level)}</td>
                            <td>{id}</td>
                            <td>{statistics[id].correctAnswers}</td>
                            <td>{statistics[id].wrongAnswers}</td>
                            <td>{(statistics[id].correctAnswers) /
                            (statistics[id].correctAnswers + statistics[id].wrongAnswers)}</td>
                        </tr>)} 
                    </tbody>
                        
                </table>
            </div>
        </div>
    );




}