/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { changeLevel, changeGrammarClass } from '../../redux/store';
import { generateTag, generateBlackTag } from './Tags';

export default function FilterComponent() {

    return (
        <div css={css`
            display: flex;
            height: fit-content;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `}>
            <div>
                <FontAwesomeIcon icon={faFilter} />
                <span>Filter</span>
            </div>
            <FilterLevelButton id="levelCheckA1" value="A1"></FilterLevelButton>
            <FilterLevelButton id="levelCheckA2" value="A2"></FilterLevelButton>
            <FilterLevelButton id="levelCheckB1" value="B1"></FilterLevelButton>

            <FilterGrammarButton id="grammarClassChecksubst" value="subst"></FilterGrammarButton>
            <FilterGrammarButton id="grammarClassCheckverb" value="verb"></FilterGrammarButton>
            <FilterGrammarButton id="grammarClassCheckother" value="other"></FilterGrammarButton>
        </div>
    );

};

const FilterLevelButton = props => {

    const levelState = useSelector(store => store.filters.level);
    const dispatch = useDispatch();

    return (
        <button {...props} css={css`
            background-color: white;
            border: none;
        `} onClick={(e) => {

            dispatch(changeLevel(props.value))}
        }>
            {levelState.includes(props.value) ?
                <span>{generateBlackTag(props.value)}</span> :
                <span>{generateTag(props.value)}</span>}
                
        </button>

    );
}

const FilterGrammarButton = props => {

    const grammarClassState = useSelector(store => store.filters.grammarClass);
    const dispatch = useDispatch();
    return (
            <button {...props} css={css`
                background-color: white;
                border: none;
            `} onClick={() => dispatch(changeGrammarClass(props.value))}>
                {grammarClassState.includes(props.value) ?
                    <span>{generateBlackTag(props.value)}</span> :
                    <span>{generateTag(props.value)}</span>}
            </button>

    );
}