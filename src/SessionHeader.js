import React, { Component } from 'react';

class SessionHeader extends Component {
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
            <div>
                <p style={this.style.headerText}>{this.props.title}</p>
                <p style={this.style.headerText}>{this.props.description}</p>
            </div>

        );
    }
}

export default SessionHeader;