import { createStore } from 'redux';


const initialState = {
    filters: {
        level:          ["A1"],
        grammarClass:   [],
        subject: []
    },
    currentQuestion : {
        "id":"1",
        "level":"A1",
        "grammar_class":"other",
        "pronoun":"",
        "subject":"",
        "word":"ab",
        "field7":"ab",
        "translation":"from, off",
        "plural":""},
    questionCount: 0,
    rightQuestions: 0,
    wrongQuestions: 0,
    statistics: {

    },
    keyboardEventsSet: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LEVEL":
      return Object.assign({}, state, action.payload);
    case "CHANGE_GRAMMAR_CLASS":
        return Object.assign({}, state, action.payload);
    case "CHANGE_GAME_SCREEN":
        return Object.assign({}, state, action.payload);
    case "LOAD_QUESTION":
        return Object.assign({}, state, action.payload);
    case "CORRECT_ANSWER":
        return Object.assign({}, state, action.payload);
    case "WRONG_ANSWER":
        return Object.assign({}, state, action.payload);
    case "KEY_PRESSED":
        return Object.assign({}, state, action.payload);
    case "UPDATE_QUESTION_COUNT":
        return Object.assign({}, state, action.payload);
    case "KEYBOARD_EVENT_SET":
        return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

let store = createStore(reducer);

export function updateQuestionCount(questionCount){
    return {
        type: "UPDATE_QUESTION_COUNT",
        payload: {
            questionCount
        }
    }
}

export function changeLevel(level){
    let levelSet = new Set(store.getState().filters.level);
    if(!levelSet.has(level))
        levelSet.add(level);
    else
        levelSet.delete(level);
    
    console.log(levelSet);
    return {
        type: "CHANGE_LEVEL",
        payload: {
            filters : {
                ...store.getState().filters,
                level: Array.from(levelSet)
            }
        }
    }
}

export function changeGrammarClass(grammarClass){
    let grammarClassSet = new Set(store.getState().filters.grammarClass);
    if(!grammarClassSet.has(grammarClass))
        grammarClassSet.add(grammarClass);
    else
        grammarClassSet.delete(grammarClass);
    
    console.log(grammarClassSet);
    return {
        type: "CHANGE_GRAMMAR_CLASS",
        payload: {
            filters : {
                ...store.getState().filters,
                grammarClass: Array.from(grammarClassSet)
            }
        }
    }
}

export function changeGameScreen(screen){
    return ({
        type: "CHANGE_GAME_SCREEN",
        payload: {
            currentScreen: screen
        }
    })
}

export function loadQuestion(question){

    return {
        type: "LOAD_QUESTION",
        payload: {
            currentQuestion: question
        }
    }
}

export function keyPress(keyPressed){
    //console.log("keyPressedMiloCota");
    return {
        type: "KEY_PRESSED",
        payload: {
            keyPressed
        }
    }
}

export function correctAnswer(id, level){

    let answers = Object.assign({}, store.getState().statistics);
    let rightQuestions = store.getState().rightQuestions + 1;

    //console.log(store.getState().statistics.correctAnswers)
    
    if(typeof answers[id] === 'undefined'){
        answers[id] = {
            correctAnswers  : 1,
            wrongAnswers    : 0,
            level
        }
    }
    else
        answers[id].correctAnswers = answers[id].correctAnswers + 1

    return {
        type: "CORRECT_ANSWER",
        payload: {
            rightQuestions,
            statistics: answers,
            level
        }
    }
}

export function wrongAnswer(id, level){
    
    let answers = Object.assign({}, store.getState().statistics);
    let wrongQuestions = store.getState().wrongQuestions + 1;

    //console.log(store.getState().statistics.correctAnswers)
    
    if(typeof answers[id] === 'undefined'){
        answers[id] = {
            correctAnswers  : 0,
            wrongAnswers    : 1,
            level
        }
    }
    else
        answers[id].wrongAnswers = answers[id].wrongAnswers + 1

    return {
        type: "WRONG_ANSWER",
        payload: {
            wrongQuestions,
            statistics: answers,
            level
        }
    }
}

export function setKeyboardEvents(){
    return {
        type: "KEYBOARD_EVENT_SET",
        payload: {
            keyboardEventsSet: true
        }
    }
}

export default store;