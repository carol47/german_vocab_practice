import React from 'react';
import { useSelector } from 'react-redux';
import generateTag from './Tags';

export default function () {

    const rightQCount   = useSelector(state => state.rightQuestions);
    const wrongQCount   = useSelector(state => state.wrongQuestions);
    const filters       = useSelector(state => state.filters);
    const questionCount = useSelector(state => state.questionCount)


    return(
        <div className="h-100 w-100">

            <div className="border rounded w-100 mt-2 p-2">
                <div>Total words: {questionCount} </div>
            </div>

            <div class=" h-25 border rounded w-100 mt-5 p-2" name="Score">
                <span className="w-100" >Score</span>
                <span className="">
                    <div>Right: {rightQCount}</div>
                    <div>Wrong: {wrongQCount}</div>
                </span>
            </div>
            
            

            <div className="h-25 border rounded mt-5 p-2 w-100">
                <div className="">Level:</div>
                <span >{filters.level.sort().map(level => generateTag(level))}</span>
                <span>{filters.grammarClass.sort().map(gc => generateTag(gc))}</span>
            </div>

        </div>
    )

}