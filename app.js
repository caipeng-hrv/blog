var app = require('koa')()
  , logger = require('koa-logger')
  , views = require('koa-views')
  , http = require('http');

//加载leveldb
require('./modules/db');
//加载mongodb
require('./modules/mongodb');
var router = require('./routes/index');
var bodyParser = require('koa-body');
app.use(bodyParser());
// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition

// mount root routes  
app.use(router.routes());
http.createServer(app.callback()).listen(3000);
console.log('this server listening 3000')
