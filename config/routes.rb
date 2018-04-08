Rails.application.routes.draw do

  namespace :api, defaults: {format: "json"} do
    scope module: :v1 do
      get 'examples', to: 'examples#index'
      namespace :auth do
        post "sign_in", to: "sessions#create"
        post "sign_out", to: "sessions#revoke"
      end
    end
  end
end
