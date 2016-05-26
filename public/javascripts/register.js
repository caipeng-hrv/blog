//提交表单前验证两次密码输入是否一样
$(function() {
	$('#register').submit(function() {
		var pwd = $('#password').val();
		var pwdRepeat = $('#secondPassword').val();
		if(pwd == pwdRepeat){
			return true;
		}else{
			alert('The two passwords you typed do not match');
			return false
		}
	});
});