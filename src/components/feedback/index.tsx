import * as React from 'react';
import Header from "../Header"
 
class Feedback extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { };
    }
    render() { 
        const {Title} = this.props.match.params
        console.log(Title);
        return ( <div>
            <Header title="Feedback"/>
            <span>Please tell us what you think about the movie <strong>{Title}</strong></span>
            <br/>
            <textarea rows={10} cols={50}/>
            <button ></button>
        </div> );
    }
}
 
export default Feedback;