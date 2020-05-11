import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLevel, changeGrammarClass } from '../../redux/store';
import generateTag from './Tags';

export default function SettingsComponent() {

    const dispatch = useDispatch();

    const levelState = useSelector(store => store.filters.level);
    const grammarClassState = useSelector(store => store.filters.grammarClass);

    React.useEffect(() => {

        const levels = ["A1", "A2", "B1"];
        const grammarClasses = ["subst", "verb", "other"];


        levels.forEach(level =>
            levelState.includes(level) ?
                document.getElementById("levelCheck" + level).checked = true :
                document.getElementById("levelCheck" + level).checked = false);

        grammarClasses.forEach(grammarClass =>
            grammarClassState.includes(grammarClass) ?
                document.getElementById("grammarClassCheck" + grammarClass).checked = true :
                document.getElementById("grammarClassCheck" + grammarClass).checked = false);


    }, [grammarClassState, levelState]);

    return (
        <div className="row h-100">
            <div className="border rounded w-25 m-2 p-2 shadow-lg">
                <h3>Question Settings</h3>
                <div className="border rounded m-2 p-2 shadow-lg">
                    <div >Level</div>
                    <input className="m-1 p-1" id="levelCheckA1" name="levelCheckA1" type="checkbox"
                        value="A1" onChange={() => dispatch(changeLevel("A1"))}></input>
                    <label htmlFor="levelCheckA1" >{generateTag("A1")}</label>
                    <br />
                    <input className="m-1 p-1" id="levelCheckA2" name="levelCheckA2" type="checkbox"
                        value="A2" onChange={() => dispatch(changeLevel("A2"))}></input>
                    <label htmlFor="levelCheckA2">{generateTag("A2")}</label>
                    <br />
                    <input className="m-1 p-1" id="levelCheckB1" name="levelCheckB1" type="checkbox"
                        value="B1" onChange={() => dispatch(changeLevel("B1"))}></input>
                    <label htmlFor="levelCheckB1">{generateTag("B1")}</label>
                </div>
                <div className="border rounded m-2 p-2 shadow-lg">
                    <div>GrammarClass</div>
                    <input className="m-1 p-1" id="grammarClassChecksubst" name="grammarClassCheckSubst"
                        type="checkbox" onChange={() => dispatch(changeGrammarClass("subst"))}></input>
                    <label htmlFor="grammarClassChecksubst"
                    >{generateTag("subst")}</label>
                    <br />
                    <input className="m-1 p-1" id="grammarClassCheckverb" name="grammarClassCheckVerb"
                        type="checkbox" onChange={() => dispatch(changeGrammarClass("verb"))}></input>
                    <label htmlFor="grammarClassCheckverb">{generateTag("verb")}</label>
                    <br />
                    <input className="m-1 p-1" id="grammarClassCheckother" name="grammarClassCheckOther"
                        type="checkbox" onChange={() => dispatch(changeGrammarClass("other"))}></input>
                    <label htmlFor="grammarClassCheckother">{generateTag("other")}</label>

                </div>

            </div>
        </div>
    );
}