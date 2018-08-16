import React, { Component } from 'react';
import IngredientTile from '../components/IngredientTile';
import AddIngredientForm from '../components/AddIngredientForm';


class AddIngredientFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIngredient: '',
      errors: {}
    };
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleIngredientUpdate = this.handleIngredientUpdate.bind(this);
    this.validateaddIngredient = this.validateaddIngredient.bind(this);
  }

  handleClearForm(event) {
    this.setState({
      addIngredient:'',
      errors: {}
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let validIngredient = this.validateIngredient(this.state.addIngredient);


    if (validIngredient){
      let formPayLoad = {
        ingredient: this.state.addIngredient,
        ingredient_id: this.props.id
      };
      this.props.submitReview(formPayLoad);
      this.handleClearForm(event);
    }
  }
  validateaddIngredient(selection) {
    if (selection.trim() === '') {
      let newError = { reviewTitle: 'You must enter an Ingredient!' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.addIngredient;
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleIngredientUpdate(event) {
    this.setState  ({
      reviewIngredient: event.target.value
    });
  }
  render() {
      let errorDiv;
      let errorItems;
      if (Object.keys(this.state.errors).length > 0) {
        errorItems = Object.values(this.state.errors).map(error => {
          return(<li key={error}>{error}</li>);
        });
        errorDiv = <div className="alert-box alert round">{errorItems}</div>;
      }
      return (
           <div>
           <h3 className="form-title">Add Ingredient Form</h3>
           {errorDiv}
           <AddIngredientForm
             ingredientValue = {this.state.reviewIngredient}
             handleFormSubmit = {this.handleFormSubmit}
             handleClearForm = {this.handleClearForm}
             handleIngredientUpdate = {this.handleIngredientUpdate}
           />
           </div>
         );
       }
     }

     export default AddIngredientFormContainer;
