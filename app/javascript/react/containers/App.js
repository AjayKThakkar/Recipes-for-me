import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import IngredientsIndexContainer from './IngredientsIndexContainer'
import AddIngredientFormContainer from './AddIngredientFormContainer'



export const App = () => {
  return (
    <Router history={browserHistory} >
      <Route path='/' >
        <IndexRoute component={IngredientsIndexContainer} />
        <Route path='/ingredients' component={IngredientsIndexContainer} />
        <Route path='/ingredients/new' component={AddIngredientFormContainer} />
      </Route>
    </Router>
  )
}

export default App
