var router = require('koa-router')();

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
router.post('/login', function*(next) {
	var user = yield global.db.user.findOne_koa({
		name: this.request.body.name
	});
	if (user && user.pwd == this.request.body.pwd) {
		var query = {};
		query['author.' + user.type] = user.name;
		var projects = yield global.db.api.find_koa(query);
		projects = ['money','process']
		yield this.render('list', {
			projects: projects
		});
	} else {
		yield this.render('index', {
			title: 'Have a good time!',
			msg: 'user is not exist or password is not correct!'
		});
	}
});
//注册页面
router.get('/register', function*() {
	yield this.render('register')
})
//注册操作
router.post('/register', function*() {
	console.log(this.request.body)
	var userId = yield global.db.user.insert_koa(this.request.body);
	console.log(userId);
	yield this.render('index', {
		title: 'Have a good time!',
		msg: ''
	});
})
module.exports = router;