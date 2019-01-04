//获取非行内样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,1)[attr];
	}
}
//运动框架
function sport(obj,json){
	
	//1. 清除上一次的计时器
	clearInterval(obj.timer);
	//2. 开启新的计时器
	obj.timer = setInterval(function(){
		//1. 设置开关
		var stop = true;
		//2. 遍历json
		for(var attr in json){
			//1. 获取当前属性值
			//透明度和其它属性
			if(attr === 'opacity'){
				var cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				var cur = parseInt(getStyle(obj,attr));
			}
			
			
			//2. 计算速度
			var speed = (json[attr] - cur) / 8;
			// 0.75    // -0.75
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//3. 判断属性是否到达目标值，没有到达，开关为false
			if(cur != json[attr]){
				stop = false;
			}
			//4. 设置运动
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		//3. 停止计时器
		if(stop){
			clearInterval(obj.timer);
			alert('运动结束！');
		}
	},30)
}