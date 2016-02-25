import CommentForm from './comment_form';

class Comment extends React.Component {
	static get propTypes() {
		return {
			id: React.PropTypes.number,
			author: React.PropTypes.string,
			body: React.PropTypes.string,
			rank: React.PropTypes.number
		}
	}
	render() {
		return (
			<li>
				<p>{this.props.body}</p>
				<div>by: {this.props.author}</div>
				<div>Rank: {this.props.rank}</div>
				<CommentForm parent_id={this.props.id} />
			</li>
		)
	}
}
export default Comment