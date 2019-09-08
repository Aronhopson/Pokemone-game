import React, { Component } from "react"
import Pokedex from "./pokedex"

class Pokegame extends Component {

    static defaultProps = {
        pokemone:
            [
                { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
                { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
                { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
                { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
                { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
                { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
                { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
                { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
            ]
    };

    render() {

        //Removing from hand1 and puuting it in hand1 ...keep repaeerting again and again
        let hand1 = [];
        let hand2 = [...this.props.pokemone];
        while (hand1.length < hand2.length) {
            let ranIDx = Math.floor(Math.random() * hand2.length);
            let ranPoke = hand2.splice(ranIDx, 1)[0];
            hand1.push(ranPoke);
        }
        let exp1 = hand1.reduce((exp, pokemone) => exp + pokemone.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemone) => exp + pokemone.base_experience, 0);
        return (

            <div>
                <Pokedex pokemone={hand1} exp={exp1} isWinner= {exp1 > exp2} />
                <Pokedex pokemone={hand2} exp={exp2} isWinner= {exp2 > exp1} />
            </div>
        )
    }
}
export default Pokegame; 