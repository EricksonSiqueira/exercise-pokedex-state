import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemonData;
    const wheight = averageWeight.value.toFixed(1)
    const measurementUnit = averageWeight.measurementUnit;

    return (
      <article className="pokemon-card">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weigth: {wheight} {measurementUnit}</p>
        </div>
        <img src={image} alt="Pokemon gif" className="pokemon-img"></img>
      </article>
    );
  }
};
Pokemon.propTypes = {
  pokemonData: PropTypes.object.isRequired,
}


export default Pokemon;
