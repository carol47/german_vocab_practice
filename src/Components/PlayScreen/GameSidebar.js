import React from 'react';
import { changeGameScreen } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';



export default function GameSidebar() {

    console.log("Rerendering Sidebar");
    const dispatch = useDispatch();



    return (
        <div data-toggle="button" style={{
            display: "none",
            flexDirection: "column"

            }}>
            <label>
                <input type="radio" name="sidebar" id="training" autoComplete="off" 
                    onClick={() => dispatch(changeGameScreen("GamePanelScreen"))} />  
                Training
            
            </label>
            <label>
                <input type="radio" name="sidebar" id="other" autoComplete="off" />
                ???
            </label>
            <label>
                <input type="radio" name="sidebar" id="other2" autoComplete="off"/>
                ???
            </label>
            <label>
                <input type="radio" name="sidebar" id="other3" autoComplete="off"
                    onClick={() => {
                    dispatch(changeGameScreen("StatisticsComponent"))
                }} />
                Statistics
            </label>
            <label>
                <input type="radio" name="sidebar" id="other4" autoComplete="off" 
                        onClick={(event) => {
                    dispatch(changeGameScreen("SettingsScreen"))
                }} />
                Settings  
            </label>

        </div>
    );
}

// export default connect(null)(GameSidebar);