import * as React from 'react';
import { Component } from 'react';



class Header extends Component<any, any> {
    state = {}
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
            );
    }
}

export default Header;