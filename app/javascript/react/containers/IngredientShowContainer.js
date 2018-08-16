import React, { Component } from 'react';

class IngredientShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      reviews: []
    };
    this.submitReview = this.submitReview.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  componentDidMount() {
      fetch(`/api/v1/ingredients/${this.props.params.id}`)
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
          ingredient: body.ingredient
        });
      })
      .catch(error => {
        console.error(`Error in fetch`);
        console.error(error);
      });
    }
