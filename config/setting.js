'use strict'
// require('../config/config');
const RippleAPI = require('ripple-lib').RippleAPI;
const co = require('co');
const api = new RippleAPI({
	server: 'ws://101.201.220.73:6006'
});
//1.设置全局rippleAPI变量；
global.api = api;
co(function*(){
	yield api.connection();
})