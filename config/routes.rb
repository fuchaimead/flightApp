Rails.application.routes.draw do
  namespace :api do
    resources :flights
  end 
end
