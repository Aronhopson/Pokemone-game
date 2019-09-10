import React, {Component} from 'react';

class Bind extends Component{
    constructor(props){
        super(props);
        this.state= {clicked :false};
        this.handClk = this.handClk.bind(this)
    }
    handClk(e) {
        this.setState({clicked:true});
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.clicked ? "CLICKED" : "NOT CLICKED"}</h1>
                <button onClick={this.handClk}>Click</button>
            </div>
        )
    }
}

export default Bind;