Rails.application.routes.draw do

  root to: 'welcomes#index'

  get 'session/new' => 'session#new'
  get 'session' => 'session#index'
  post 'session' => 'session#create'
  get 'signout' => 'session#destroy'

  post 'searches' => 'searches#new'
  get 'searches' => 'searches#show'
  # get 'searches/:search' => 'searches#new'
  # post 'searches' => 'searches#create'

  resources :sightings
  resources :users







#        Prefix Verb   URI Pattern                   Controller#Action
#          root GET    /                             welcomes#index

#   session_new GET    /session/new(.:format)        session#new
#       session GET    /session(.:format)            session#index
#               POST   /session(.:format)            session#create

#      searches POST   /searches(.:format)           searches#new
#               GET    /searches(.:format)           searches#show

#     sightings GET    /sightings(.:format)          sightings#index
#               POST   /sightings(.:format)          sightings#create
#  new_sighting GET    /sightings/new(.:format)      sightings#new
# edit_sighting GET    /sightings/:id/edit(.:format) sightings#edit
#      sighting GET    /sightings/:id(.:format)      sightings#show
#               PATCH  /sightings/:id(.:format)      sightings#update
#               PUT    /sightings/:id(.:format)      sightings#update
#               DELETE /sightings/:id(.:format)      sightings#destroy

#         users GET    /users(.:format)              users#index
#               POST   /users(.:format)              users#create
#      new_user GET    /users/new(.:format)          users#new
#     edit_user GET    /users/:id/edit(.:format)     users#edit
#          user GET    /users/:id(.:format)          users#show
#               PATCH  /users/:id(.:format)          users#update
#               PUT    /users/:id(.:format)          users#update
              # DELETE /users/:id(.:format)          users#dest
# session_maptest GET    /session/maptest(.:format)    session#maptest



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
