$(function(){
//		var slices=10;
		var half=slices/2;
		
	 	var oShow = document.getElementById("show");
        var oBox = document.getElementById('box');
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var oLi = oBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
        var oBoxHeight=$('#box').height();
        var oBoxWidth=$('#box').width();
        var oDivHeight=oBoxHeight/half;
        var oDivWidth=oBoxWidth/2;
        var oImg = oBox.getElementsByTagName("ul")[0].getElementsByTagName("img");
        oShow.iNow = 0;
        oShow.urls = []; /*当前背景  给oshow对象添加一个自定义属性保存当前显示的图片*/
        oShow.off = false;
        /*保存图片路径*/
       
       oShow.style.width=oBoxWidth+'px';
       oShow.style.height=oBoxHeight+'px';
       
       for (var i=0;i<oLi.length;i++) {
       		oLi[i].style.width=oBoxWidth+'px';
       		oLi[i].style.height=oBoxHeight+'px';
       }
       	
        for (var i = 0; i < half; i++) {
            var oDiv1 = document.createElement("div");
            var oDiv2 = document.createElement("div");
            oDiv1.style.width=oDivWidth+'px';
       		oDiv1.style.height=oDivHeight+'px';
       		oDiv2.style.width=oDivWidth+'px';
       		oDiv2.style.height=oDivHeight+'px';       		
            oDiv2.className = "div2"; 
            
           	oDiv1.innerHTML="<em class='em1' style='background-position:0 "+(-i)*oDivHeight+"px;width:"+oDivWidth+"px;height:"+ oDivHeight+"px'></em><span class='span1' style='width:10px;height:"+ oDivHeight+"px'></span>" +
           	"<em class='em2' style='background-position:0 "+(-i)*oDivHeight+"px;width:"+oDivWidth+"px;height:"+oDivHeight+"px'></em><span class='span2' style='width:"+oDivWidth+"px;height:10px'></span>"
           	
           	oDiv2.innerHTML="<em class='em1' style='background-position:"+(-oDivWidth)+"px  "+(-i)*oDivHeight+"px;width:"+oDivWidth+"px;height:"+ oDivHeight+"px'></em><span class='span1' style='width:10px;height:"+ oDivHeight+"px'></span>" +
           	"<em class='em2' style='background-position:"+(-oDivWidth)+"px "+(-i)*oDivHeight+"px;width:"+oDivWidth+"px;height:"+oDivHeight+"px'></em><span class='span2' style='width:"+oDivWidth+"px;height:10px'></span>"
           	
           	
            oShow.appendChild(oDiv1);
            oShow.appendChild(oDiv2);
        }
        oLi[0].style.display = "block";
        /***********/
        //获取图片
        for (var i = 0; i < oImg.length; i++) {
            oShow.urls.push(oImg[i].getAttribute("src"));
        }
            prev.onclick = function () {
                if(oShow.off){
                    return; //
                }
                oShow.off = true;
                var iNext = oShow.iNow - 1;
                if (iNext < 0) {
                    iNext = oShow.urls.length - 1;
                }
                tab(iNext);//切换图片
            };
        next.onclick = function () {
            if(oShow.off){
                return; //
            }
            oShow.off = true;
            var iNext = oShow.iNow + 1;
            if (iNext >= oShow.urls.length) {
                iNext = 0;
            }
            tab(iNext);//切换图片
        };
        function tab(iNext) {
            var oEm1 = oShow.getElementsByClassName("em1");
            var oEm2 = oShow.getElementsByClassName("em2");
            var oDiv = oShow.getElementsByTagName("div");
            for (var i = 0; i < oEm1.length; i++) {
                //当前的这一张
                oEm1[i].style.backgroundImage = "url(" + oShow.urls[oShow.iNow] + ")";
                //后面的哪一张
                oEm2[i].style.backgroundImage = "url(" + oShow.urls[iNext] + ")";
            }
            oShow.style.display = "block";
            oLi[oShow.iNow].style.display = "none";

            //给具体的十个div绑定定时器  实现旋转效果
            for (var i = 0; i < slices; i+=2) {
                var time = (i+1)*50;
                oDiv[i].style.transform = "rotateX(0deg)";//左边
                oDiv[i + 1].style.transform = "rotateX(0deg)";//右边
                //具体每个div绑定定时器
                setTimer(oDiv[i], time,"move1");
                setTimer(oDiv[i + 1], time,"move2")
            }
            //动画执行完成之后
            setTimeout(function(){

                oShow.iNow = iNext;
                oLi[oShow.iNow].style.display = "block";///inext.inow
                oShow.style.display = "none";
                oShow.off = false;
            },(oDiv.length*50+1500))

        }
        function setTimer(obj,time,name){
            obj.timer = setTimeout(function(){
                //开启定时器之前先清除定时器
                clearTimeout(obj.timer);
                obj.style.animation = name + " 1.5s";
                obj.style.transform = "rotateX(180deg)";

                obj.timer = setTimeout(function(){
                    obj.style.animation = "";
                    clearTimeout(obj.timer);
                    obj.timer = null;
                },1500);
            },time)
        }
        
        
        
        
})