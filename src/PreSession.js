import React, { Component } from 'react';

class PreSession extends Component {
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
                <div>
                <label>
                    Please select the session activity you participated in today:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                      onChange={this.handleOptionChange} />
                      Basketball
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                onChange={this.handleOptionChange} />
                Yoga
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                onChange={this.handleOptionChange} />
                Swimming
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                onChange={this.handleOptionChange} />
                Martial Arts
                </label>
                </div>
                
                <div>
                <label>
                    This section refers to how you felt before participating in the activity today:
                    Today, I felt:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                      onChange={this.handleOptionChange} />
                      Great
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                onChange={this.handleOptionChange} />
                Good
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                onChange={this.handleOptionChange} />
                OK
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                onChange={this.handleOptionChange} />
                Ill
                </label>
                </div>

                
                <div>
                <label>
                    Overall, I feel that my health is:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                      onChange={this.handleOptionChange} />
                      Very Good
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                onChange={this.handleOptionChange} />
                Good
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                onChange={this.handleOptionChange} />
                Bad
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                onChange={this.handleOptionChange} />
                Very Bad
                </label>
                </div>
      
            </form>

        );
    }
}

export default PreSession;