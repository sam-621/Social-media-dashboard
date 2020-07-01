import React from 'react';

const DashBoard = (props) => {
    return(
        <div className="DarkMode-Container">
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 25</p>
            </div>
            <div>
                <button onClick={props.changeThemeColor}>Toggle</button>
            </div>
        </div>
    );
}

export default DashBoard;