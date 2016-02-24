import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class Actions {

	static setComments(params) {
		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENT,
			comments: params
		});

	}


	static addComment(params) {
		AppDispatcher.dispatch({
			actionType: Constants.ADD_COMMENT,
			comment: params
		});
	}
}
export default Actions