import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './Button';
//import SessionStage from './SessionStage';
import Header from './Header';
import SessionHeader from './SessionHeader';
import StudentData from './StudentData';
import PreSession from './PreSession';
import PostSession from './PostSession';
import Question from './Question';

class App extends Component {
   state = {
    questions: [
      {
        question: 'Natto is a commonly eaten breakfast food in Japan, typically served over rice. What is it?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'select'
      },
      {
        question: 'Is this working?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'text'
      },
      {
        question: 'Natto is a commonly eaten breakfast food in Japan, typically served over rice. What is it?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'select'
      },
      {
        question: 'Is this working?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'text'
      },
      {
        question: 'Natto is a commonly eaten breakfast food in Japan, typically served over rice. What is it?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'select'
      },
      {
        question: 'Is this working?',
        answers: ['Fermented soybeans', 'Seaweed salad', 'Dried bonito flakes', 'An Omelet'],
        questionType: 'text'
      },
      
      
    ],
    
    currentIndex: 0,
  };

  questionOnSubmit=(event)=>{
    console.log('It works')
    console.log(event)
    event.preventDefault();
    this.setState({currentIndex: this.state.currentIndex +1});
  }

  questionOnValueChange=(value)=>{
    console.log('Value change works')
    console.log(value)
    let {questions} = {...this.state}
    console.log(questions)
    questions[this.state.currentIndex].answer=value;
    this.setState({questions: questions})
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header
        title={"Passport to Lifetime Fitness"}
        />
        <SessionHeader
        title={"PRE-SESSION"}
        description={"Please complete the following questions about you."}
        />
        <Question
        question={this.state.questions[this.state.currentIndex].question}
        answers={this.state.questions[this.state.currentIndex].answers}
        questionType={this.state.questions[this.state.currentIndex].questionType}

        questionOnValueChange={this.questionOnValueChange}
        questionOnSubmit={this.questionOnSubmit}
        />
        
      </div>
    );
  }

  onChange=()=>{console.log("It Works")}
}

export default App;
