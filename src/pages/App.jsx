import React from 'react';
import '../Styles/app.css'

import Dashboard from '../Containers/DashBoard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorTheme: true, //true = whiteMode. False = DarkMode.
            comeText: 'hi'
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
        const { comeText } = this.state
        return(
            <>
                <h1>{comeText}</h1>
                <Dashboard changeThemeColor={this.switcher} />
            </>
        );
    }
}
export default App;