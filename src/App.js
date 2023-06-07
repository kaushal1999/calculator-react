import React, { Component } from 'react';
import calculate from "./logic/calculate.js";
import './App.css';

class Display extends React.Component{
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
    } 
}

class Button extends React.Component {
   
   handleClick = () => {
     this.props.clickHandler(this.props.name);
    }
  render() {
    return (
      <div className='component-button'>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
class ButtonPanel extends React.Component{
    
  handleClick = (name) => {
    this.props.handleClick(name);
  }
  render() {
    return (
      <div className='component-button-panel'>
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}


class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  
  handleClick = (name) => {
    this.setState(calculate(this.state,name));
  }
  render() {
    return (
      <div>
        <Display value={this.state.next||this.state.total||"0"}></Display>
        <ButtonPanel handleClick={this.handleClick}></ButtonPanel>
      </div>
    );
  }
}

export default App;
