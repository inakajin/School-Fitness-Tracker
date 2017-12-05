import React, { Component } from 'react';

class StudentData extends Component {
    style =
        {
            headerText:
                {
                    color: "green",
                    width: "100%",
                    textAlign: "left",
                    marginTop: "10px",
                    marginLeft: "10px"
                }
        };
    render() {
        return (
            <form>
                <label>
                    First Name:
                    <input onChange={this.props.onChange} type="text" name="firstname"/>
                </label>
          
                <label>
                    Last Name:
                    <input onChange={this.props.onChange} type="text" name="lastname"/>
                </label>

                <label>
                    Student ID Number:
                    <input onChange={this.props.onChange} type="text" name="studentidnumber"/>
                </label>

                <label>
                    Select Your School:
                    <select value={1} onChange={this.props.onChange}>
                        <option value="School A">School A</option>
                        <option value="School B">School B</option>
                        <option value="School C">School C</option>
                        <option value="School D">School D</option>
                    </select>
                    <input type="submit" value="Submit" />
                </label>
      
            </form>

        );
    }
}

export default StudentData;