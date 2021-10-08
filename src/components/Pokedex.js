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
    this.resetPokemonIndex = this.resetPokemonIndex.bind(this);
    this.resetPokemonArr = this.resetPokemonArr.bind(this);
    this.setPokemonFilter = this.setPokemonFilter.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  
  resetPokemonIndex() {
    this.setState((_previousValue, _prop) => ({
      pokemonIndex: 0,
    }))
  }
  resetPokemonArr(){
    this.resetPokemonIndex()
    this.setState((_previousValue, _prop) => ({
      pokemonArr: pokemons,
    }))
  }
  setPokemonFilter({target}) {
    this.resetPokemonIndex();
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === target.value)
    this.setState(() => ({
      pokemonArr: filteredPokemons,
    }))
  }
  previousPokemon() {
    const { pokemonIndex ,pokemonArr } = this.state;
    const lastIndex = pokemonArr.length - 1;
    this.setState((previousValue, _props) => ({
      pokemonIndex: (pokemonIndex === 0) ? lastIndex : previousValue.pokemonIndex - 1,
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
          <button onClick={this.previousPokemon} className="btn red-btn">Anterior</button>
          <button onClick={this.nextPokemon} className="btn green-btn">Próximo</button>
        </section>
        <section>
          <button onClick={this.resetPokemonArr} className="btn black-btn">Todos</button>
          <button onClick={this.setPokemonFilter} value="Fire" className="btn orange-btn">Fire</button>
          <button onClick={this.setPokemonFilter} value="Electric" className="btn yellow-btn">Electric</button>
          <button onClick={this.setPokemonFilter} value="Bug" className="btn light-green-btn">Bug</button>
          <button onClick={this.setPokemonFilter} value="Poison" className="btn light-purple-btn">Poison</button>
          <button onClick={this.setPokemonFilter} value="Psychic" className="btn pink-btn">Psychic</button>
          <button onClick={this.setPokemonFilter} value="Normal" className="btn grey-btn">Normal</button>
          <button onClick={this.setPokemonFilter} value="Dragon" className="btn purple-btn">Dragon</button>
        </section>
      </div>
    );
  }
}

export default Pokedex;
