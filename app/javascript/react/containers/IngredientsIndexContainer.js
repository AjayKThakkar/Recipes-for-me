import React, { Component } from 'react';
import IngredientTile from '../components/IngredientTile';
import { Link } from 'react-router'
import YoutubeTile from '../components/YoutubeTile';

class IngredientsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsArray: []
    };
  }

  componentDidMount() {
      fetch('/api/v1/ingredients.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          ingredientsArray: body.ingredients
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let ingredients = this.state.ingredientsArray.map( ingredient => {
      return (
        <IngredientTile
          key={ingredient.id}
          id={ingredient.id}
          name={ingredient.name}
        />
      );
    });

    return (
      <div className="columns text-center">
        <h1 className="app-title">Recipe Creator</h1>
          {ingredients}
          <center><YoutubeTile/></center>
          <Link to='/ingredients/new'>
            <button>Add Ingredients</button>
          </Link>
      </div>
    );
  }
}

export default IngredientsIndexContainer;
