class Api {
	constructor() {
		this.request = new XMLHttpRequest();
	}

	static token() {
		let el = document.querySelector('meta[name="csrf-token"]');
		return el ? el.getAttribute('content') : '';
	}
	
	static headers() {
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-CSRF-Token': this.token(),
			'X-Requested-With': 'XMLHttpRequest'
		}
	}

	static post(route, params) {
		let request = new XMLHttpRequest();
		request.open('post', route, true);
		request.withCredentials = true;
		request.setRequestHeader('Accept', 'application/json');
		request.setRequestHeader('Content-Type', 'application/json');
		request.setRequestHeader('X-CSRF-Token', this.token() );
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		request.send(JSON.stringify(params));
	}
	
	static post_w_promise(route, params) {
		return new Promise( function(resolve, reject) {
			var req = new XMLHttpRequest();
			req.open('POST', route);
			req.withCredentials = true;
			req.setRequestHeader('Accept', 'application/json');
			req.setRequestHeader('Content-Type', 'application/json');
			req.setRequestHeader('X-CSRF-Token', this.token() );
			req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			req.onload = function() {
				if (req.status == 200) {
					resolve(req.response);
				} else {
					reject(Error(req.statusText));
				}
			};
			req.onerror = function() {
				reject(Error("Network Error"));
			};
			req.send(JSON.stringify(params));


		}.bind(this) );
	}

}
export default Api;