class AddForeignKeyToComments < ActiveRecord::Migration
  def change
  	add_reference :comments, :restaurant, index: true
  end
end
