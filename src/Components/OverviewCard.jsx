import React from 'react';
import '../Styles/overviewCard.css';    

import GreenArrow from '../img/flecha-hacia-arriba.svg';
import RedArrow from '../img/flecha-hacia-arriba-red.svg';
const OverviewCard = (props) => {
    const { icon, views, porcent, isOk } = props;
    return(
        <div className="OverviewCard-container">
            <div>
                <p className="page-views">Page Views</p>
                <img src={icon} alt="icon" width="20px" height="20px"/>
            </div>
            <div>
                <h2 className="numberOfViews">{views}</h2>
                <div className="today">
                    <img src={isOk ? GreenArrow : RedArrow} alt="" width="10px" height="10px"/>
                    <p className={isOk ? 'green p' : 'red p'}>{porcent}</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewCard;