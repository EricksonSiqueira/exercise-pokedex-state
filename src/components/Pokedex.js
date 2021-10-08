import React, {Component} from 'react';
import '../data'
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      pokemonArr: pokemons,
    }
    this.setPokemonFilter = this.setPokemonFilter.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.resetPokemonIndex = this.resetPokemonIndex.bind(this)
  }

  resetPokemonIndex() {
    this.setState((_previousValue, _prop) => ({
      pokemonIndex: 0,
    }))
  }

  setPokemonFilter({target}) {
    this.resetPokemonIndex();
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === target.value)
    this.setState(() => ({
      pokemonArr: filteredPokemons,
    }))
  }
  nextPokemon() {
    const { pokemonIndex, pokemonArr } = this.state;
    const lastIndex = pokemonArr.length - 1;
      this.setState((previousValue, _props) => ({
        pokemonIndex: (pokemonIndex === lastIndex) ? 0 : previousValue.pokemonIndex + 1,
      }))
  }
  render() {
    const {pokemonIndex, pokemonArr} = this.state;
    return(
      <div className="pokedex">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main className="pokedex-cards">
          <Pokemon key={pokemonArr[pokemonIndex].id} pokemonData={pokemonArr[pokemonIndex]} />
        </main>
        <section>
          <button onClick={this.nextPokemon} className="next-btn">Próximo</button>
        </section>
        <section>
          <button onClick={this.setPokemonFilter} value="Fire" className="next-btn">Fire</button>
          <button onClick={this.setPokemonFilter} value="Electric" className="next-btn">Electric</button>
          <button onClick={this.setPokemonFilter} value="Bug" className="next-btn">Bug</button>
          <button onClick={this.setPokemonFilter} value="Poison" className="next-btn">Poison</button>
          <button onClick={this.setPokemonFilter} value="Psychic" className="next-btn">Psychic</button>
          <button onClick={this.setPokemonFilter} value="Normal" className="next-btn">Normal</button>
          <button onClick={this.setPokemonFilter} value="Dragon" className="next-btn">Dragon</button>
        </section>
      </div>
    );
  }
}

export default Pokedex;
