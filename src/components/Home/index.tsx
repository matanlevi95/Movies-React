import * as React from 'react';
import { Component } from 'react';
import Header from "../Header"

 
class Home extends React.Component<any, any> {
    state = {   }
    render() { 
        return ( <div>
            <Header title="Home Page"/>
        </div> );
    }
}
 
export default Home;