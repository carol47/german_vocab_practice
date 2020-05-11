import React, {useEffect} from 'react';

import QuestionGenerator from '../../Controllers/QuestionGenerator';
import GameSidebar from './GameSidebar';
import SettingsComponent from './Settings';
import GamePanel from './GamePanel';
import RightPanel from './RightPanel';
import StatisticsComponent from './StatisticsComponent';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestion, updateQuestionCount } from '../../redux/store';

export default function PlayScreen() {

  const dispatch = useDispatch(); 
  console.log("Rerendering PlayScreen");
  
  const currentScreen = useSelector(state => state.currentScreen);
  const filters = useSelector(store => store.filters);
  //const questionsCount = useSelector(store => store.questionsCount);

  let qg = new QuestionGenerator(filters);
    

  let nextScreen;

    React.useEffect(() => {
      dispatch(updateQuestionCount(qg.getQuestionsCount()));
    }, [filters, qg, dispatch]);


  
  switch(currentScreen){
    case "SettingsScreen":
      nextScreen = <SettingsComponent />;
      break;
    case "StatisticsComponent":
      nextScreen = <StatisticsComponent />;
      break;
    case "NoQuestionsComponent":
      nextScreen = <h2>There's no questions loaded!</h2>
    case "GamePanelScreen":
    default:
      
      console.log("questions count = " + qg.getQuestionsCount());
      if(qg.getQuestionsCount() === 0){
        console.log("into the loop");
        nextScreen = <h2>There's no questions loaded!</h2>;
      }
      else{
        dispatch(loadQuestion(qg.get4btnQuestion()));
        nextScreen = <GamePanel questionGenerator={qg} />
      }
      break;
  }
  //#6c757d
  return (
    <div className="container mt-2" style={{height:"450px"}}>
      <div className="col-12 border mx-auto rounded" style={{height:"100%", backgroundColor:""}}>
        <nav className="nav row border bg-dark rounded " style={{height:"10%"}}>
          {/* <img className="logo" src="./logo.png" alt="logo"/> */}
          <h3 className=" ml-5 h-100" style={{color: "white"}}>
            German Vocabulary Training
          </h3>
        </nav>
        <div style={{height:"90%"}} className="row border rounded">
            <aside className="col-2 p-0 m-0 border rounded">
              <GameSidebar />
            </aside>
            <main className ="h-100 col-8 border rounded" style={{ backgroundColor:"#708090", overflow:"auto"}}>
              {nextScreen}
            </main>
            <div id="rightPanel" className=" h-100 col-2 rounded" style={{backgroundColor:"#6c757d"}}>
              <RightPanel />
            </div> 
        </div>
      </div>
    </div>

  );
}

