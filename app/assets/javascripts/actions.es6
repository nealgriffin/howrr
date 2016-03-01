import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api';

class Actions {

	constructor(restaurantId) {
		this.restaurantId = restaurantId;
	}
	setComments(params) {

		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENTS,
			comments: params
		});

	};

	upvoteComment(comment) {
		Api.put_w_promise(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( function(response) { 
			AppDispatcher.dispatch({
				actionType: Constants.UPVOTE_COMMENT,
				comment: response
			});
		}).catch( function(error) { 
			console.error("Error!", error)
		})
	}


	addComment(params) {
		Api.post_w_promise(`/restaurants/${this.restaurantId}/comments.json`, {
			comment: params
		}).then( function(response) { 
			AppDispatcher.dispatch({
				actionType: Constants.ADD_COMMENT,
				comment: response
			});
		}).catch( function(error) { 
			console.error("Error!", error)
		})
	}
}
export default Actions