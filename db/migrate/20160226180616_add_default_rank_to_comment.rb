class AddDefaultRankToComment < ActiveRecord::Migration
  def change
  	change_column_default :comments, :rank, 0
  end
end
