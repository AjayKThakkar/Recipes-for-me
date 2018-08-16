import React from 'react';
import TextField from './TextField';
import TextArea from './TextArea';

const AddIngredientForm = (props) => {
  return (
    <div className="row " >
    <div className = "medium-6 large-6 columns medium-centered large-centered small-6 small-centered" >
    <form className="row callout" onSubmit={props.handleFormSubmit}>
      <TextField
        label='Add First Ingredient'
        name='Ingredient'
        value={props.IngredientValue}
        handlerFunction={props.handleIngredientUpdate}
      />
      <TextField
        label='Add Second Ingredient'
        name='Ingredient'
        value={props.IngredientValue}
        handlerFunction={props.handleIngredientUpdate}
      />
      <TextField
        label='Add Third Ingredient'
        name='Ingredient'
        value={props.IngredientValue}
        handlerFunction={props.handleIngredientUpdate}
      />
      <TextField
        label='Add Fourth Ingredient'
        name='Ingredient'
        value={props.IngredientValue}
        handlerFunction={props.handleIngredientUpdate}
      />
      <TextField
        label='Add Fifth Ingredient'
        name='Ingredient'
        value={props.IngredientValue}
        handlerFunction={props.handleIngredientUpdate}
      />

      <button>Create Your Recipe </button>
    </form>
    </div>
    </div>
  );
};

export default AddIngredientForm;
