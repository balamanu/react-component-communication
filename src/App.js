import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/parentToChild/Parent';

class App extends Component {
  state = {
    title:'Palceholder title'
  }
  changeTheWorld = (newTitle)=>{
    this.setState({title:newTitle});
  }
  render() {
    return (
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this,'new world')} 
        keepTheWorldSameEvent={this.changeTheWorld.bind(this,'same world')}
        title={this.state.title}/>
      </div>
    );
  }
}

export default App;
