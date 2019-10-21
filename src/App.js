import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

import { tsConstructorType } from '@babel/types';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {number: 0 };
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter numberApi={this.state}/> 

      </header>
    </div>
  );
}

}

export default App;
