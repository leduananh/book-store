Rails.application.routes.draw do
  get 'hello/world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "react#index"

  # get '*', to: 'errors#page_not_found',constraints: lambda { |request| request.path =~ /.+\.users/ }

  match '*path', to: "react#redirect", via: :all
end
