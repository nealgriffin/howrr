import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';
import Api from '/api';

class Actions {

	constructor(restaurantId) {
		this.restaurantId = restaurantId;
		//this.watchInterval = setInterval(this.watch.bind(this), 1000)
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
	watch() {
		Api.get(`/restaurants/${this.restaurantId}/comments`).then( function(response) {
			this.setComments(response);
		}.bind(this))
	}
}
export default Actions