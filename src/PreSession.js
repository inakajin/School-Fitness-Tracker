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
                       />
                      Basketball
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                />
                Yoga
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                />
                Swimming
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                />
                Martial Arts
                </label>
                </div>
                
                <div>
                <label>
                    This section refers to how you felt before participating in the activity today:
                    Today, I felt:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                       />
                      Great
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                 />
                Good
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                />
                OK
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                />
                Ill
                </label>
                </div>

                
                <div>
                <label>
                    Overall, I feel that my health is:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                       />
                      Very Good
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                />
                Good
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                />
                Bad
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option4"  
                />
                Very Bad
                </label>
                </div>
      
            </form>

        );
    }
}

export default PreSession;