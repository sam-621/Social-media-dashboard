import React from 'react';
import '../Styles/dashBoard.css'

import DashboardCard from '../Components/DashboardCard'
import FB from '../img/icon-facebook.svg';
import Insta from '../img/icon-instagram.svg';
import YT from '../img/icon-youtube.svg';
import Twitter from '../img/icon-twitter.svg';


const DashBoard = (props) => {
    const { changeThemeColor, colorTheme} = props;
    return(
        <>
            <div className={colorTheme ? "WhiteMode-Container" : "DarkMode-container"}>
                <div>
                    <h1 className={colorTheme ? "Logo h1" : "Logo h1-dark"}>Social Media Dashboard</h1>
                    <p className={colorTheme ? "Logo white" : "Logo dark"}>Total Followers: 25</p>
                </div>
                <div className="switcher">
                    <div>
                        <p>Dark mode</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox" onClick={changeThemeColor}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="Cards-container">
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        today="12"
                        Followers="25"
                        icon={FB}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        today="99"
                        Followers="25"
                        icon={Insta}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="RogelioSamuel2"
                        today="1099"
                        Followers="25"
                        icon={Twitter}
                        isOk="true"
                    />
                </div>
                <div>
                    <DashboardCard
                        colorTheme={colorTheme}
                        name="rogeliosamuel621"
                        today="144"
                        Followers="25"
                        icon={YT}
                    />
                </div>
            </div>
        </>
    );
}

export default DashBoard;