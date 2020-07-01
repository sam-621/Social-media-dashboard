import React from 'react';
import '../Styles/overviewCard.css'

const OverviewCard = (props) => {
    const { icon, views, porcent, isOk } = props;
    return(
        <div className="OverviewCard-container">
            <div>
                <p>Page Views</p>
                <img src={icon} alt="icon"/>
            </div>
            <div>
                <h2>{views}</h2>
                <p className={isOk ? 'green' : 'red'}>{porcent}</p>
            </div>
        </div>
    );
}

export default OverviewCard;