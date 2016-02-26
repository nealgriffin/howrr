class Comment < ActiveRecord::Base
	has_ancestry
	belongs_to :restaurant

	def self.upvote(id)
		comment = find(id)
		comment.update_attributes(rank: comment.rank.to_i + 1)
	end
end
