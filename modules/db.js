var LinvoDB = require("linvodb3");
var genify = require('thunkify-wrap').genify;
LinvoDB.dbPath = process.cwd() + '/db';
LinvoDB.prototype.insert_koa = genify(LinvoDB.prototype.insert);
LinvoDB.prototype.findOne_koa = genify(LinvoDB.prototype.findOne);
LinvoDB.prototype.find_koa = genify(LinvoDB.prototype.find);
global.db = {};
global.db.user =  new LinvoDB("user", {});
global.db.api = new LinvoDB('api',{});