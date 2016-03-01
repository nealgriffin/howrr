import Comment from '/components/comment'

class CommentList extends React.Component {

	static get contextTypes() {
		return {
			store: React.PropTypes.object.isRequired
		}
	}

	render() {
		return (
			<ul>
		  {this.props.comments.map((comment, i) => {
		  	return <Comment key={i} {... comment} />;
		  })}
		  </ul>
   );
  }
  // this is the render() method that was in the video:
	legacyRender() {
		return (
			<ul>
		  {this.context.store.comments(this.props.parent_id).map((comment, i) => {
		  	return <Comment key={i} {... comment} />;
		  })}
		  </ul>
		);
	}
}
export default CommentList
