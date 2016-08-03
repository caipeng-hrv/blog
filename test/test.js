function add() {
	if (!this.result) {
		this.result = 0;
	}
	var args = [].slice.call(arguments);
	function ad(ar) {
		// var that = this;
		ar.forEach(function(e) {
			this.result += e;
		})
		console.log(this.result);
	}
	ad(args);
	return add;
};

add(1,2)(4,5,6).result