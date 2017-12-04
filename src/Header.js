import React, { Component } from 'react';

class Header extends Component {
    style =
        {
            headerText:
                {
                    color: "green",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "10px"
                }
        };
    render() {
        return (
            <div>
                <p style={this.style.headerText}>{this.props.title}</p>
            </div>

        );
    }
}

export default Header;