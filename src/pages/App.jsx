import React from 'react';
import '../Styles/app.css'

import Dashboard from '../Containers/DashBoard';

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
            <>
                <Dashboard changeThemeColor={this.switcher} colorTheme={this.state.colorTheme} />
            </>
        );
    }
}
export default App;