import React from 'react';
import OverviewCard from '../Components/OverviewCard';
import '../Styles/Overview.css'

import FB from '../img/icon-facebook.svg';
import Insta from '../img/icon-instagram.svg'
import YT from '../img/icon-youtube.svg'
import Twitter from '../img/icon-twitter.svg'

const Overview = (props) => {
    const { colorTheme } = props;
    return(
        <div className="Overview">
            <h1 style={colorTheme ? {color: 'black'} : {color: 'white'}}>Overview - Today</h1>
            <div className="Overview-container">
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    porcent="3"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    porcent="2"
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Insta}
                    views={78}
                    porcent="2257"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Insta}
                    views={78}
                    porcent="1375"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Twitter}
                    views={78}
                    porcent="303"
                    isOK
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Twitter}
                    views={78}
                    porcent="553"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={YT}
                    views={78}
                    porcent="19"
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={YT}
                    views={78}
                    porcent="12"
                />
                </div>
            </div>
        </div>
    );
}
export default Overview;