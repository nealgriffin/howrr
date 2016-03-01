import CommentForm from './comment_form';
import CommentList from './comment_list';

class Comment extends React.Component {
	static get propTypes() {
		return {
			id: React.PropTypes.number,
			author: React.PropTypes.string,
			body: React.PropTypes.string,
			rank: React.PropTypes.number
		}
	}

	static get contextTypes() {
		return {
			actions: React.PropTypes.func.isRequired
		}
	}
	constructor() {
		super()
		this.state = { isReplying: false};
	};
	onToggleReply() {
		this.setState({isReplying: !this.state.isReplying});
	}
	onCommentSubmitted(event) {
		this.setState({isReplying: false});
	}
	onUpvote(event) {
		this.context.actions.upvoteComment(this.props)
	}

	render() {
		const replyText = this.state.isReplying ? 'Hide' : 'Reply';
		return (
			<li className="comment">
				<p>{this.props.body}</p>
				<div>by: {this.props.author}</div>
				<div>Rank: {this.props.rank}</div>
				<button className="" onClick={this.onToggleReply.bind(this)}>{replyText}</button>
				<button className="" onClick={this.onUpvote.bind(this)}>+1</button>
				<CommentForm
					parent_id={this.props.id}
					isReplying={this.state.isReplying}
					onCommentSubmitted={this.onCommentSubmitted.bind(this)} />
				<CommentList comments={this.props.children} parent_id={this.props.id} />
			</li>
		);
	}
}
export default Comment
