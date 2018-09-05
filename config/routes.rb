Rails.application.routes.draw do
  root 'ingredients#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :ingredients, only: [:index, :new, :create]

  namespace :api do
   namespace :v1 do
     resources :ingredients, only: [:index, :show, :new, :create, :update] 
     
  end
    
 end
  
end
