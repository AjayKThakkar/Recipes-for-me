import React from 'react';

import { Link } from 'react-router';

const IngredientTile = (props) => {
  return (
      <div className="ingredient-tile">
        <div className="shadowbox">

          <Link to={`/ingredients/${props.id}`}>{props.name}</Link>
          <Link to={`/ingredients/${props.id}`}>{props.name}</Link>
        </div>
      </div>

  );
};

export default IngredientTile;
