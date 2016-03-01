import Actions from '/actions'
import CommentStore from '/stores/comment_store'
import CommentList from '/components/comment_list'
import CommentForm from '/components/comment_form'

class CommentSection extends React.Component {
	constructor(props) {
		super();
		this.store = new CommentStore()
		this.actions = Actions
		this.actions.setComments(JSON.parse(props.comments));
	}
	static get childContextTypes() {
		return {
			store: React.PropTypes.object.isRequired,
			actions: React.PropTypes.func.isRequired
		}
	}
	getChildContext() {
		return {
			store: this.store,
			actions: this.actions
		}
	}
	// The warning was caused because the CommentList was being re-ordered and the parent component was effectively
	// destroying the children while the children had indicated a re-render.
	// The warning you were seeing wouldn't have appeared in production and it triggered a no-op
	//
	// Below is an alternate approach which is closer to a redux-esque pattern of keeping container
	// components "smart" and anything underneath "dumb". I've transformed the data structure into
	// a tree in the CommentStore, meaning that each <CommentList> can just pass down their children,
	// this enables us to listen only at the root node
	render() {
		return (
			<div>
				<CommentForm isReplying={ true } />
				<CommentList comments={this.store.commentsAsTree()} parent_id={null} />
			</div>
		)
	}

  // I've moved the store reference to a root node
	componentDidMount() {
		this.store.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		this.store.removeChangeListener(this._onChange.bind(this));
	}


	_onChange() {
		this.forceUpdate();
	}
}

window.CommentSection = CommentSection
export default CommentSection
