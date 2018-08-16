class Api::V1::IngredientsController < ApplicationController


  def index
    ingredients = Ingredient.all
    render json: ingredients
    # @ingredients = Ingredient.select(:id, :name)
    # @ingredients.order(:name)
    # result = {ingredients: @ingredients}
    # render :json => result
  end

  def show
    render json: Ingredient.find(params[:id])
  end

  def new
    @ingredient = Ingredient.new
  end

end
