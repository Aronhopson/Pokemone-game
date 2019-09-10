import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 }
        this.Genrand = this.Genrand.bind(this);
    }
    Genrand() {
        //pick random no 1-10
        let rand = Math.floor(Math.random() * 10) + 1;
        //update with random no
        this.setState({num:rand})
    }
    render() {

        return (
            <div>
                <h1>This num is: {this.state.num}</h1>
                {this.state.num === 7 && <h1>You Won</h1>}
               {this.state.num !==7 && <button onClick={this.Genrand}>Cilk</button>}
            </div>
        )
    }
}

export default Clicker;