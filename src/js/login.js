var oUname = document.getElementById("vanclUserName");
var oPwd = document.getElementById("vanclPassword");
var oLog = document.getElementById("vanclLogin");
var oReg = document.getElementById("gotoReg");
oLog.onclick = function(){
	var uname = oUname.value;
	var pwd = oPwd.value;
	var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
	var obj = convertCookieStrToObj(cookieStr);
	if(obj[uname] == pwd){
		alert('登录成功！');
		location.href = 'index.html';
		createCookie('loginUser',uname,7);
		
	}else{
		alert('用户名与密码不匹配！');
		location.href = 'login.html';
	}
}
oReg.onclick = function(){
	location.href = 'registor.html';
}
function convertCookieStrToObj(str){
	if(!str){
		return {};
	}
	var obj = {};
	var arr = str.split(',');
	for(var i = 0,len = arr.length;i < len ;i ++){
		var list = arr[i].split(':');
		obj[list[0]] = list[1];
	}
	return obj;
}