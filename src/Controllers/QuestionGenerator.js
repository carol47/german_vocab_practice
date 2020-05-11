//import Database from '../assets/Database.js';
import QuestionBankBuilder from './QuestionBankBuilder';

export default class QuestionGenerator {


    constructor(filters) {
        
        this._db = QuestionBankBuilder(filters);
        //console.log("milo")
        //console.log(this._db);
        this._dbSize = this._db.length;
        
        console.log("count = " + this.getQuestionsCount());

    }

    getQuestionsCount(){
        return this._dbSize;
    }

    get4btnQuestion(){

        let IDs = this.getRandomIntArray(4, this._dbSize);
        let answers = IDs.map((id) => this._db[id].translation).sort();

        return ({
            id: this._db[IDs[0]].id,
            question: this._db[IDs[0]].word,
            correctAnswer: this._db[IDs[0]].translation,
            answers,
            level: this._db[IDs[0]].level
        });

    }

    get8btnQuestion(){

        let IDs = this.getRandomIntArray(8, this._dbSize);
        let answers = IDs.map((id) => this._db[id].translation).sort();

        return ({
            question: this._db[IDs[0]].word,
            correctAnswer: this._db[IDs[0]].translation,
            answers
        });

    }

    getImgQuestion(){

    }

    getTextQuestion(){

    }

    getQuizQuestion(){

    }

    getGenderQuestion(){

    }

    getGroupGenderQuestion(){

    }

    getPluralQuestion(){

    }

    getMascFemQuestion(){

    }

    getReverse4btnQuestion(){

    }

    getReverse8btnQuestion(){

    }

    getRandomIntArray(quantity, cap){
        if(!Array.isArray(this._db || this._db.length === 0)){
            console.log("deu zica")
            return null;
        }
        //console.log("getRandomIntArray")
        let wordsId = [];
        wordsId.push(Math.floor(Math.random() * this._dbSize));
        while(wordsId.length < quantity){
            //console.log("here")
            let newId = Math.floor(Math.random() * this._dbSize);
            if(!wordsId.includes(newId))
                wordsId.push(newId);
        }
        return wordsId;
    }
    
}

