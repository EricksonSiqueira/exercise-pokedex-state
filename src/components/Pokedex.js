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
          <Pokemon key={pokemons[0].id} pokemonData={pokemons[0]} />
        </main>
        <section>
          <button className="next-btn">Próximo</button>
        </section>
      </div>
    );
  }
}

export default Pokedex;
