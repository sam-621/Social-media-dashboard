import React from 'react';
import OverviewCard from '../Components/OverviewCard';
import '../Styles/Overview.css'

import DashboardCard from '../Components/DashboardCard'
import FB from '../img/icon-facebook.svg';
import Insta from '../img/icon-instagram.svg'
import YT from '../img/icon-youtube.svg'
import Twitter from '../img/icon-twitter.svg'

const Overview = () => {
    return(
        <div className="Overview">
            <h1>Overview - Today</h1>
            <div className="Overview-container">
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
                <div>
                    <OverviewCard
                    icon={FB}
                    views={78}
                    isOK="true"
                />
                </div>
            </div>
        </div>
    );
}
export default Overview;