class CommentForm extends React.Component {

	static get contextTypes() {
		return {
		  actions: React.PropTypes.func.isRequired
		}
	}
	constructor() {
		super();

		this.defaultState = {body: '', author: ''}
		this.state = this.defaultState;

	}

	submitComment(event) {
		event.preventDefault();
		this.context.actions.addComment(this.state);
		this.setState(this.defaultState);

	}

	onFieldChange(event) {
		let prop = {};
		prop[event.target.name] = event.target.value;
		this.setState(prop);
	}


	render() {
		return (
			<form>
				<label>Author</label>
				<input type="text" onChange={this.onFieldChange.bind(this)} name="author" value={this.state.author} />
				<label>Comment</label>
				<textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
				<button type="submit" onClick={this.submitComment.bind(this)} >Submit</button>

			</form>
		)
	}
}

export default CommentForm