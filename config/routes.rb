Rails.application.routes.draw do
  namespace :api do
    resources :flights
  end

  get '*other', to: 'static#index'
end
