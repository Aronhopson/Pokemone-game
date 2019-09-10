import React,{Component} from 'react';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "aaaa",
            score: 9
        }
    }
    render(){
        return(
            <div>
                <p>STATE</p>
                <p>YOUR NAME IS: {this.state.name}</p>
            </div>
        )
    }
}

export default Game ;
