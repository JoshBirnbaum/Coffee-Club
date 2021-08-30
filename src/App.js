import './App.css';
import React from 'react';
import LandingPage from './Navigation/LandingPage.js';
import Home from './Home/Home.js';
import Header from './Header/Header.js';

let initialState = {
  route: '',
  isSignedIn: false,
  settings: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  changeSettings = (value) => {
    this.setState({
      settings: value
    });
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }

  render() {
    const {route, settings} = this.state;
    return (
      <div className="App">
        {/* COMPONENTS:  */}
        {(() => {
            switch (route) {
              case 'home': return <div className="App"><Header changeSettings={this.changeSettings} onRouteChange={this.onRouteChange} /><Home settings={settings} changeSettings={this.changeSettings} /></div>;
              default: return <LandingPage onRouteChange={this.onRouteChange} route={route} />;
            }
          })()}
        {/* Header */}
        {/* Home Page */}
        {/* Profile */}
      </div>
    );
  }
}

export default App;
