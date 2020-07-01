import React from 'react';
import '../Styles/app.css'

import Dashboard from '../Containers/DashBoard';
import Overview from '../Containers/Overview';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorTheme: true, //true = whiteMode. False = DarkMode.
        }
        this.switcher = this.switcher.bind(this);
    }

    switcher(e) {
        this.setState({
            colorTheme: !this.state.colorTheme,
            comeText: 'noHi'
        });
    }

    render() {
        return(
            <div className={this.state.colorTheme ? 'whiteMode' : 'darkMode'}>
                <div style={{marginLeft: 30 + 'px', marginRight: 30+'px'}}>
                    <Dashboard changeThemeColor={this.switcher} />
                    <Overview />
                </div>
            </div>
        );
    }
}
export default App;