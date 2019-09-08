import React, { Component } from 'react'
import "./poke.css"
// const poke_API= 
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const poke_API =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : (number))

class Pokecard extends Component {
    render() {
        let imgSrc = `${poke_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="pokes">
                <h1 className="P-TIT">{this.props.name} </h1>
                <div className="P-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <h1 className="P-data">Type: {this.props.type} </h1>
                <h1 className="P-data">ID: {this.props.id} </h1>
            </div>
        )
    }
}

export default Pokecard;