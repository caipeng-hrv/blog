
exports.get = function *(){
	console.log(this.request.query)
	var balances = api.getBalance(this.request.query.address,{currency:'XRP'});
	this.response.body = balances;
}