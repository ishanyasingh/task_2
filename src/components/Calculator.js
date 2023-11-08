import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleButtonPress = (value) => {
    if (value === '=' && this.state.input !== '') {
      try {
        const result = eval(this.state.input);
        this.setState({ input: result.toString() });
      } catch (error) {
        this.setState({ input: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ input: '' });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input type="text" value={this.state.input} readOnly />
        </div>
        <div className="keys">
          <div className="col">
            <button onClick={() => this.handleButtonPress('7')}>7</button>
            <button onClick={() => this.handleButtonPress('4')}>4</button>
            <button onClick={() => this.handleButtonPress('1')}>1</button>
            <button id='btml' onClick={() => this.handleButtonPress('0')}>0</button>
          </div>
          <div className="col">
            <button onClick={() => this.handleButtonPress('8')}>8</button>
            <button onClick={() => this.handleButtonPress('5')}>5</button>
            <button onClick={() => this.handleButtonPress('2')}>2</button>
            <button onClick={() => this.handleButtonPress('.')}>.</button>
          </div>
          <div className="col">
            <button onClick={() => this.handleButtonPress('9')}>9</button>
            <button onClick={() => this.handleButtonPress('6')}>6</button>
            <button onClick={() => this.handleButtonPress('3')}>3</button>
            <button onClick={() => this.handleButtonPress('=')}>=</button>
          </div>
          <div className="col">
          <button className='oprt' onClick={() => this.handleButtonPress('C')}>C</button>
          <button className='oprt' onClick={() => this.handleButtonPress('/')}>/</button>
          <button className='oprt' onClick={() => this.handleButtonPress('*')}>x</button>
          <button className='oprt' onClick={() => this.handleButtonPress('-')}>-</button>
          <button id='btmr' className='oprt' onClick={() => this.handleButtonPress('+')}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;