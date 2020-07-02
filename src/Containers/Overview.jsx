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
            <h1 style={{color: '#5f616d'}}>Overview - Today</h1>
            <div className="Overview-container">
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={FB}
                    views={87}
                    porcent="3"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={FB}
                    views={52}
                    porcent="2"
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Insta}
                    views={5462}
                    porcent="2257"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Insta}
                    views={'52k'}
                    porcent="1375"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Twitter}
                    views={117}
                    porcent="303"
                    isOK
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={Twitter}
                    views={507}
                    porcent="553"
                    isOk
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={YT}
                    views={107}
                    porcent="19"
                />
                </div>
                <div className={colorTheme ? 'OverviewCard-white' : 'OverviewCard-dark'}>
                    <OverviewCard
                    icon={YT}
                    views={1407}
                    porcent="12"
                />
                </div>
            </div>
        </div>
    );
}
export default Overview;