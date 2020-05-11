import React from 'react';
import { changeGameScreen } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';



export default function GameSidebar() {

    console.log("Rerendering Sidebar");
    const dispatch = useDispatch();



    return (
        <div className="btn-group-vertical btn-group-toggle w-100 h-100" data-toggle="button">
            <label className="btn btn-secondary align-middle">
                <input type="radio" name="sidebar" id="training" autoComplete="off" 
                    onClick={() => dispatch(changeGameScreen("GamePanelScreen"))} />  
                Training
            
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="sidebar" id="other" autoComplete="off" />
                ???
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="sidebar" id="other2" autoComplete="off"/>
                ???
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="sidebar" id="other3" autoComplete="off"
                    onClick={() => {
                    dispatch(changeGameScreen("StatisticsComponent"))
                }} />
                Statistics
            </label>
            <label className="btn btn-secondary">
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