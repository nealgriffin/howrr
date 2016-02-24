class RestaurantsController < ApplicationController
	def show
		@restaurant = Restaurant.find(params[:id])
		@comments = @restaurant.comments
	end
end
