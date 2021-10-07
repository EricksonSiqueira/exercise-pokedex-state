import React, {Component} from 'react';
import '../data'
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      pokemonFilter: 'fire',
    }
    this.setPokemonFilter = this.setPokemonFilter.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  setPokemonFilter() {

  }
  nextPokemon() {
    const lastIndex = pokemons.length - 1;
    const { pokemonIndex } = this.state;
      this.setState((previousValue, _props) => ({
        pokemonIndex: (pokemonIndex === lastIndex) ? 0 : previousValue.pokemonIndex + 1,
      }))
  }
  render() {
    const {pokemonIndex} = this.state;
    return(
      <div className="pokedex">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main className="pokedex-cards">
          <Pokemon key={pokemons[pokemonIndex].id} pokemonData={pokemons[pokemonIndex]} />
        </main>
        <section>
          <button onClick={this.nextPokemon} className="next-btn">Próximo</button>
        </section>
      </div>
    );
  }
}

export default Pokedex;
