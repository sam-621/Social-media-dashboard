import React from 'react';
import '../Styles/dashboardCard.css';

import GreenArrow from '../img/flecha-hacia-arriba.svg';
import RedArrow from '../img/flecha-hacia-arriba-red.svg';


const DashboardCard = (props) => {

    const { colorTheme, name, today, Followers, isOk, icon } = props

    return(
        <div className={colorTheme ? 'Card-containerWhite' : 'Card-containerDark'}>
            <div className="Me">
                <p><img src={icon} alt="Facebook icon"/>  @{name}</p>
            </div>
            <div className="Followers">
                <p><strong>{Followers}</strong> <br/> F O L L O W E R S</p>
            </div>
            <div className="today">
                <img src={isOk ? GreenArrow : RedArrow} alt="arrow" width="10px" height="10px"/>
                <p className={isOk ? 'green Follower-status' : 'red Follower-status'}>{today}</p>
            </div>
        </div>
    );
}

export default DashboardCard;