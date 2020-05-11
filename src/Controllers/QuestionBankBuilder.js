import Database from '../assets/Database.js';

export default function getFilteredQuestions(filters){

    //Return filtered question bank
    //Possible values inside filter: level, grammar_class and subject

    console.log("here");

    let db = [];
    console.log(filters);
    
    if(filters.level.length !== 0)
        Database.forEach((question) => {
            if(filters.level.includes(question.level))
                db.push(question);
        });
        //console.log(db);
    if(filters.grammarClass.length !== 0){
        console.log("grammarClassFilter")
        let newBank = db.length === 0 ? Database : [...db];
        console.log(newBank);
        db = [];
        newBank.forEach((question) => {
            if(filters.grammarClass.includes(question.grammar_class))
                db.push(question);
        });
        console.log(db);
    }
    
    if(filters.subject.length !== 0){
        console.log("subjectFilter")
        let newBank = db.length === 0 ? Database : [...db];
        
        db = [];
        newBank.forEach((question) => {
            if(question.subject === filters.subject)
                db.push(question);
        });
    }
    
    console.log(db);



    return db;
}