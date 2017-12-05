import React, { Component } from 'react';

class PostSession extends Component {
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
                    The BEST part of the session was:
                    <input onChange={this.props.onChange} type="text" name="firstname"/>
                </label>
          
                <label>
                    The WORST part of the session was:
                    <input onChange={this.props.onChange} type="text" name="lastname"/>
                </label>

                <div>
                <label>
                    After participating in the activity, I would do it again on my own:
                    <input onChange={this.props.onChange} type="radio" value="option1"  
                       />
                      Strongly Agree
                </label>
          
                <label>
                <input onChange={this.props.onChange} type="radio" value="option2"  
                />
                Disagree
                </label>

                <label>
                <input onChange={this.props.onChange} type="radio" value="option3"  
                 />
                Strongly Disagree
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

export default PostSession;