import React from 'react';
import '../Styles/dashboardCard.css'


const DashboardCard = (props) => {

    const { name, Followers, isOk, icon } = props

    return(
        <div className="Card-container">
            <div className="Me">
                <p><img src={icon} alt="Facebook icon"/>  @{name}</p>
            </div>
            <div className="Followers">
                <p><strong>{Followers}</strong> <br/> F O L L O W E R S</p>
            </div>
            <div>
                <p className={isOk ? 'green' : 'red'}>12 today</p>
            </div>
        </div>
    );
}

export default DashboardCard;