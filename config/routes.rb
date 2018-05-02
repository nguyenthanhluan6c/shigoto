Rails.application.routes.draw do

  namespace :api, defaults: {format: "json"} do
    scope module: :v1 do
      resources :articles, only: [:index]
      namespace :auth do
        post "sign_in", to: "sessions#create"
        post "sign_out", to: "sessions#revoke"
      end
      get 'examples', to: 'examples#index'
    end
  end
end
