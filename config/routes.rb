Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users, only: [:index, :edit, :update] do
  end
  get 'messages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
