import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './Button';
//import SessionStage from './SessionStage';
import Header from './Header';
import SessionHeader from './SessionHeader';
import StudentData from './StudentData';

class App extends Component {
  render() {
    return (
      <div>
        <Header
        title={"Passport to Lifetime Fitness"}
        />
        <SessionHeader
        title={"PRE-SESSION"}
        description={"Please complete the following questions about you."}
        />
        <StudentData
        onChange={this.onChange}
        />
      </div>
    );
  }

  onChange=()=>{console.log("It Works")}
}

export default App;
