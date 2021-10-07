import React, {Component} from 'react';
import '../data'
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
    }

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    if(this.state.pokemonIndex === pokemons.length - 1){
      this.setState((_previousValue, _props) => ({
        pokemonIndex: 0,
      }))
    } else {
      this.setState((previousValue, _props) => ({
        pokemonIndex: previousValue.pokemonIndex + 1,
      }))
    }
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
