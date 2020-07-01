import React from 'react';
import '../Styles/overviewCard.css'

const OverviewCard = (props) => {
    const { icon, views, porcent, isOk } = props;
    return(
        <div className="OverviewCard-container">
            <div>
                <p className="page-views">Page Views</p>
                <img src={icon} alt="icon" width="20px" height="20px"/>
            </div>
            <div>
                <h2>{views}</h2>
                <p className={isOk ? 'green p' : 'red p'}>{porcent}</p>
            </div>
        </div>
    );
}

export default OverviewCard;