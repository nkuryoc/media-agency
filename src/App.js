import React, {Component} from 'react';
import HomeDesign from './pages/home-page';
import MainHeader from './components/header/header.component';

import './assets/foundation/css/foundation.min.css';
import './assets/foundation/css/app.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MainHeader />
        <HomeDesign />
      </div>
    );
  }
}

export default App;
