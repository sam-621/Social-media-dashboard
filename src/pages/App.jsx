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

    switcher() {
        this.setState({
            colorTheme: !this.state.colorTheme,
        });
    }

    render() {
        return(
            <div className={this.state.colorTheme ? 'whiteMode' : 'darkMode'}>
                <div>
                    <Dashboard changeThemeColor={this.switcher} colorTheme={this.state.colorTheme} />
                    <Overview colorTheme={this.state.colorTheme} />
                </div>
            </div>
        );
    }
}
export default App;