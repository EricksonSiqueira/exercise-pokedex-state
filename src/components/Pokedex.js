import React, {Component} from 'react';
import '../data'
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return(
      <div className="pokedex">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main className="pokedex-cards">
          {pokemons.map((pokemonData) => <Pokemon key={pokemonData.id} pokemonData={pokemonData} />)}
        </main>
      </div>
    );
  }
}

export default Pokedex;
