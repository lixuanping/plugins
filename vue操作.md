## 移动端请求照片的时候403和监听滚动条和隐藏滚动条

```
<meta name="referrer" content="no-referrer"/>

window.addEventListener("scroll",function(){
  console.log(window.scrollY)
})；

加类名scroll-view
.scroll-view::-webkit-scrollbar{
  overflow: hidden;
  display: none!important;
}
document.body.addEventListener('click', () => {
});
```

## 阻止    表单提交和事件冒泡 和a标签跳转

```
<form action="https://www.baidu.com" @submit.prevent>@submit.prevent

<div @click="show1()">
 	<button @click.stop="show">vue点我</button>
</div>

<a href="javascript:void(0)" @click='del(item.id)'>删除</a>

v-on:click.prevent.self 会阻止所有的点击，
而 v-on:click.self.prevent 只会阻止对元素自身的点击

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

## 请求拦截

```
利用axios进行请求拦截
axios.interceptors.request.use(
    (config) => {
      if(条件（一般是tooken）) {
        config.headers.Authorization = 'sss'; 
        config.headers.名称  或者也可以写成  config.headers['名称']
        然后在request就可以看到  名称：sss
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
 );
 
 拦截响应
 axios.interceptors.response.use(response => {
 		这个是请求成功后的  可以对response（可以随便写）进行操作
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
	}
);
```

## 使用rem布局 

```
import rem from './js/rem.js'//引入rem
rem()//使用rem
还要在编辑器设置那里搜索cssrem  把下面的比例换成100 然后重启编辑器 注意编辑器是visual Code
```

## 保持滚动条位置

```
const router = new VueRouter({
	routes,
	///   这段加到  router   这是第二步
        scrollBehavior(to, from,savedPosition){
            if(to.name == 'home'){//name是路由里面的名字
                return {x: 0, y: window.myScroll || 0}
            }
        }
	//
})
这段也是放在main.js里面  这是第一步
router.beforeEach((to, from, next) => {
	if(from.name == 'home'){//如果离开的是name  那么保存滚动条高度
		window.myScroll = window.scrollY;
	}
})

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
```

## 拖拽方法

```
@mousedown="move($event,item,index)"
move(e, item, index) {
   const odiv = e.target;
   const disX = e.clientX - odiv.offsetLeft;
   const disY = e.clientY - odiv.offsetTop;
   // 拖拽时候执行的逻辑
   document.onmousemove = (event) => {
      event.preventDefault();
      item.x = event.clientX - disX;
      item.y = event.clientY - disY;
   };
   // 拖拽完以后执行
   document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
   };
},
```

## QRCode 插件使用(生成二维码的)

```
<div id="qrcode"></div>
import QRCode from 'qrcodejs2'; 
document.getElementById('qrcode').innerHTML = ''; // 清除上一次的内容
const qrcode = new QRCode('qrcode', { text: '这里可以放文字或者图片或者其他',
width: 140, height: 140 });
```

