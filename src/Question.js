import React, { Component } from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        this.setState({ value: event.target.value });
        this.props.questionOnValueChange(event.target.value);
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.questionOnSubmit(event);
        this.setState({value:""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.props.question}
                    {this.props.questionType === 'text' &&
                        <input type="text" required value={this.state.value} onChange={this.handleChange} />
                    }
                    {this.props.questionType === 'select' &&
                        <select value={this.state.value} onChange={this.handleChange} required>
                            {this.props.answers.map(answer => <option key={answer} value={answer}>{answer}</option>)}
                        </select>
                    }
                    {this.props.questionType === 'radio' &&

                        this.props.answers.map(answer =>
                            <label key={answer}>{answer}
                            <input required checked={answer==this.state.value} onChange={this.handleChange} type="radio" value={answer}></input>
                            </label>
                        )}
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default Question;