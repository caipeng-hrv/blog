var router = require('koa-router')();
var user = require('./user');
//登录页面
router.get('/', function*(next) {
	try {
		yield this.render('index', {
			title: 'Have a good time!',
			msg: ''
		});
	} catch (e) {
		console.log(e);
	}
});
//登录操作
router.post('/login',user.logtestin);
//注册页面
router.get('/register', function*() {
	yield this.render('register')
})
//注册操作
router.post('/register',user.register)
module.exports = router;