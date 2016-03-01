class Api {

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

	static post_w_promise(route, params) {
		return this.xhr(route, params, 'POST');
	}
	static put_w_promise(route, params) {
		return this.xhr(route, params, 'PUT');
	}
	static xhr(route, params, verb) {
		return new Promise( function(resolve, reject) {
			var req = new XMLHttpRequest();
			req.open(verb, route);
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


		}.bind(this) ).then(function(response) {
			return JSON.parse(response);
		});

	}

}
export default Api;