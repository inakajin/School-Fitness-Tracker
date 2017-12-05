import React, { Component } from 'react';

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.log(event);
      this.setState({value: event.target.value});
      this.props.questionOnValueChange(event.target.value);
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.props.questionOnSubmit}>
          <label>
            {this.props.question}
            {this.props.questionType==='text' && 
            <input type="text" required value={this.state.value} onChange={this.handleChange} />
        }
           {this.props.questionType==='select' && 
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="School A">School A</option>
            <option value="School B">School B</option>
            <option value="School C">School C</option>
            <option value="School D">School D</option>
            </select>
        }
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  

  export default Question;