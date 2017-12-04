import React, { Component } from 'react';

class Button extends Component {
    style={ButtonText:{color:"green", cursor:"pointer", marginTop:"10px"}};
    render() {
    return (
        <div>
            {this.props.options.map(option=><p>option</p>)}
            <p style={this.style.ButtonText}>Button</p>
        </div>

    );
  }
}

export default Button;
