var router = require('koa-router')();

//登录页面
router.get('/*', function*(next) {
	console.log(this.request.query)
	yield require('.' + path).get;
});
//登录操作
router.post('/*', function*(next) {
	yield require('.' + path).get;
});

module.exports = router;