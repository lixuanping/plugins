var canvas = document.getElementById("canvas");

//返回一个用于在画布上绘图的环境。
var can = canvas.getContext("2d");

//窗口高度
var s = window.screen;

//沾满屏幕宽，高
var w = canvas.width = s.width; 
var h = canvas.height = s.height;

//设置或返回用于填充绘画的颜色、渐变或模式。
can.fillStyle = color1();

//生成字母数组
var words = Array(256).join("1").split("");

setInterval(draw, 50);

function draw() {
	//背景颜色
	can.fillStyle = 'rgba(0,0,0,0.05)';
	//第一次第一屏
	can.fillRect(0, 0, w, h);
	//字母流
	can.fillStyle = color1();
	
	//把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象。
	words.map(function(y, n) {
		           //将 Unicode 编码转为字符。   //生成字母       //生成随机数
		text = String.fromCharCode(Math.ceil(65 + Math.random() * 57));
		
		x = n * 10;
		
		can.fillText(text, x, y)
		
		                     
		words[n] = (y > 758 + Math.random() * 484 ? 0 : y + 10);
	});
}

//三种不同的画布流
//字母流的过程
function color1() {
	var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
	var color = "";
	for(var i = 0; i < 6; i++) {
		var n = Math.ceil(Math.random() * 15);
		color += "" + colors[n];
	}
	return '#' + color;
}


//字母流的过程
function color2() {
	var color = Math.ceil(Math.random() * 16777215).toString(16);
	while(color.length < 6) {
		color = '0' + color;
	}
	return '#' + color;
}


//字母流的过程
function color3() {
	return "#" + (function(color) {
		return new Array(7 - color.length).join("0") + color;
	})((Math.random() * 0x1000000 << 0).toString(16))
}