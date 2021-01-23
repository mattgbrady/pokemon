import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_poke_types, select_poke_type, select_pokemon } from "../actions";

class renderPokeTypeList extends Component {
  constructor(props) {
    super(props);
    this.state = { activePokemonType: null };
  }
  componentDidMount() {
    this.props.fetch_poke_types();
  }
  onTitleClick(type) {
    if (type === this.state.activePokemonType) {
      this.setState({ activePokemonType: null });
    } else {
      this.setState({ activePokemonType: type });
    }
  }

  renderPokemonList() {
    let key = 0;
    return this.props.pokemonSelectedType.pokemonList.map((pokemonType) => {
      key += 1;
      return (
        <React.Fragment key={key}>
          <div
            className="transition visible item"
            onClick={() => {
              this.props.select_pokemon(pokemonType.pokemon.name);
            }}
          >
            {pokemonType.pokemon.name}
          </div>
        </React.Fragment>
      );
    });
  }

  renderTypeList() {
    let key = 0;
    return this.props.pokemonTypes.map((type) => {
      key += 1;
      const active = type.name === this.state.activePokemonType ? "active" : "";
      return (
        <React.Fragment key={key}>
          <div className="ui accordion">
            <div
              className={`title ${active} item`}
              key={key}
              onClick={() => {
                this.onTitleClick(type.name);
                this.props.select_poke_type(type.name, type.url);
              }}
            >
              <i className="dropdown icon"></i>
              {type.name}
            </div>{" "}
            <div className={`content ${active} ui list`}>
              {type.name === this.props.pokemonSelectedType.type
                ? this.renderPokemonList(type.name)
                : ""}
            </div>
          </div>
        </React.Fragment>
      );
    });
  }
  render() {
    return <div> {this.renderTypeList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonTypes: state.pokemonTypes,
    pokemonSelectedType: state.pokemonSelectedType,
    pokemonSelected: state.pokemonSelected,
  };
};

export default connect(mapStateToProps, {
  fetch_poke_types,
  select_poke_type,
  select_pokemon,
})(renderPokeTypeList);
