import React from 'react';
import '../Styles/dashBoard.css'

const DashBoard = (props) => {
    const { changeThemeColor, colorTheme } = props;
    return(
        <div className="DarkMode-Container" id={colorTheme ? 'whiteMode' : 'darkMode'}>
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 25</p>
            </div>
            <div className="switcher">
                <button onClick={changeThemeColor}>Toggle</button>
            </div>
        </div>
    );
}

export default DashBoard;