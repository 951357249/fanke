window.onload = function(){
	var oUname = Id("input_phone");
	var oPwd = Id("input_password");
	var oReg = Id("submitRegister_false");
	var oLog = Id("login");
	var oSpanUn = Id("un");
	var oSpanPwd = Id("pass");
	var arr = [false,false];
// 	oUname.onblur = function(){
// 		var uname = oUname.value;
// 		var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
// 		if(!re.test(uname)){
// 			oSpanUn.innerHTML = '您的用户名不符合规则';
// 			oSpanUn.style.color = 'red';
// 			arr[0] = false;
// 		}else{
// 			oSpanUn.innerHTML = '中文、字母、数字、下划线的组合,3到12位';
// 			oSpanUn.style.color = 'yellow';
// 			arr[0] = true;
// 		}
// 	}
// 	oPwd.onblur = function(){
// 		var pwd = oPwd.value;
// 		var re = /^\w{6,12}$/;
// 		if(!re.test(pwd)){
// 			oSpanPwd.innerHTML = '您的密码不符合规则';
// 			oSpanPwd.style.color = 'red';
// 			arr[1] = false;
// 		}else{
// 			oSpanPwd.innerHTML = '字母、数字、下划线，6到12位';
// 			oSpanPwd.style.color = 'yellow';
// 			arr[1] = true;
// 		}
// 	}
	oReg.onclick = function(){
		var uname = oUname.value;
		var pwd = oPwd.value;
		console.log(uname,pwd);
// 		if(!uname){
// 			alert('用户名不能为空！');
// 			return;
// 		}
// 		if(arr.indexOf(false) != -1){
// 			alert('请正确填写信息！');
// 			return;
// 		}
		
		var cookieStr = getCookie('registorUser') ? getCookie('registorUser') : '';
		var cookieObj = convertCookieStrToObj(cookieStr);
		if(uname in cookieObj){
			alert('用户名已存在！');
			return;
		}else{
			cookieObj[uname] = pwd;
			cookieStr = convertObjToCookieStr(cookieObj);
			createCookie('registorUser',cookieStr,7);
			alert('注册成功！');
		}
		
	}
	oLog.onclick = function(){
		location.href = 'login.html';
	}
	
	function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
	function Id(id){
		return document.getElementById(id);
	}
}