## 前端UI

```
http://blog.talkingdata.com/?p=5993  这里面有21个ui库
点进去github然后跳转到对应的官网

cnpm install --save muse-ui 

mint ui  cnpm i mint-ui -S --save   https://mint-ui.github.io/#!/zh-cn

加载中  这两个引入main.js
import { Indicator } from 'mint-ui'
Vue.prototype.$loading = Indicator
ajax请求前
this.$loading.open();
ajax请求后
self.$loading.close();

上拉刷新  这两个引入main.js
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
这是html结构  
注意遍历的父元素要加v-lazy="i"  这个不用加的
<mt-loadmore :top-method="loadTop" ref="loadmore">
    <li v-for='(i,index) in arr' @click="xiang(index)" :key='index'>
    </li>
</mt-loadmore>
方法里面放这个
loadTop() {
      //上拉刷新  删除sessionStorage旧的数据 渲染新的数据
      this.$refs.loadmore.onTopLoaded();//只有这个是必要的
      sessionStorage.removeItem("goodslist");
      this.getNews();
}


滚动到底部加载更多（滚到底部拖拽看代码）
html结构
<mu-paper :z-depth="1" class="demo-loadmore-wrap">
<mu-container ref="container" class="demo-loadmore-content">
<mu-load-more :loading="loading" @load="load">
    <li v-for='(i,index) in arr' @click="xiang(index)" :key='index'>
    </li>
</mu-load-more>
</mu-container>
</mu-paper>
参数
return {
      arr: [],
      loading: false
};
方法
load() {
      //鼠标滚动到底部的时候加载再发起请求加载数据  就是在原来的基础上再加
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        var self = this;
        $.ajax({
          url: "http://localhost:18090/c",
          type: "get",
          data: {
            start: 0
          },
          success(a) {
            for (var i = 0; i < a.length; i++) {
              self.arr = self.arr.concat(a[i]);
            }
          }
        });
      }, 1000);
}

懒加载  引入main.js
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
html结构
v-lazy="路径"
<img v-lazy="i.photo.path" :src="i.photo.path" alt="" class="datu">


vue2 ui  这个里面有倒计时 
http://vue.ydui.org/docs/#/countdown  
$ cnpm install vue-ydui --save 

vant ui  有很多组件  https://youzan.github.io/vant/#/zh-CN/intro

cnpm i element-ui -S 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


这个不建议使用  跟sass编译有冲突  
swiper ui cnpm install swiper 下载模块以后引入  main.js 不用配置
import Swiper from "swiper"; //引入swiper js
import "../../css/swiper.min.css"; //引入swiper css
加上这两句就可以用v-for
observer: true, // 修改swiper自己或子元素时,自动初始化swiper
observeParents: true, // 修改swiper的父元素时,自动初始化swiper

cnpm install --save-dev bootstrap
```

## 移动端请求照片的时候403和监听滚动条

```
<meta name="referrer" content="no-referrer"/>
    window.addEventListener("scroll",function(){
       console.log(window.scrollY)
    })
```

## 自定义指令  一开始让输入框获得焦点

```
在input输入 v-focus
加在export default里面就可以了
directives:{
    focus:{
      inserted(el) {
         el.focus();
      }
    }
  },
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

## 表单操作    获取焦点的时候 失去焦点的时候

```
<form>
    <input type="text" onfocus="this.value = '';" 
    onblur="if (this.value == '') {this.value = 'Username';}">
    <div class="key">
         <input type="password"  onfocus="this.value = '';" 
         onblur="if (this.value == '') {this.value = 'Password';}">
   	</div>
</form>
```

## 路由守卫 用来判断用户进入某个页面是否需要登陆才能进去    就是权限问题

```
const routes = [
	{
		path: '/',//默认显示页面
		component: Shouye,
		name: Shouye,
		meta: {//限制进入这个页面需要权限 权限就是下面的cookie
			requireAuth: true,
		}
	}
]

to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        //判断该路由是否需要登录权限
        if (Cookie.get('token')) {
            //通过封装好的cookies读取token，如果存在，name接下一步如果不存在，那跳转回登录页
            next()//不要在next里面加"path:/",会陷入死循环
        }
        else {
            next({
                path: '/Login',
                query: {redirect: to.fullPath}//将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next()
    }
})

```

## 保持缓存

```
放到全局  在main.js
{
    path: 'shouye',
    component: shouye,
    meta:{//这个就是要缓存的组件 shouye
    	keepAlive:true
    }
},
在app.vue  这样就可以实现全局缓存
<keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>


在二级路由情况下 就是底部导航栏为二级路由 其中某一个页面为需要缓存的 
里面原本是注释掉的<router-view></router-view>  也就是切换路由时候的其他页面
后来就改成这样
{
    path: 'shouye',
    component: shouye,
    meta:{//这个就是要缓存的组件 shouye
    	keepAlive:true
    }
},
<template>
  <div id="box">
    <ul>
      <li v-for='(n,index) in tab' :key='index' @click='toggle(index)' :idx="index" :page="page">
        <i :class="[FontSize[index],{active:page==index}]"></i>
        <p v-text="n" :class="{active:page==index}"></p>
      </li>
    </ul>
    //<router-view></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
```

## 瀑布流

```
<div id="vm" class="pubu" v-cloak>
    <!-- 左边盒子 -->
    <ul id="show" class="yg yg_l">
        <li v-for="(item,index) in showwz" v-if="index%2==0">
        </li>
    </ul>
    <!-- 右边盒子 -->
    <ul class="yg yg_r">
        <li v-for="(item,index) in showwz" v-if="index%2==1">
        </li>
    </ul>
    <div style="clear: both;"></div>
</div>

样式
/* 左右盒子 */
.yg_l {
  float: left;
}
.yg_r {
  float: right;
}
.yg_l,
.yg_r {
  width: calc(50% - 5px);
}
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

## 使用rem布局  和  通过模块引入css样式

```
import rem from './js/rem.js'//引入rem
rem()//使用rem
还要在编辑器设置那里搜索cssrem  把下面的比例换成100 然后重启编辑器 注意编辑器是visual Code

引入css样式
@import url("../css/cards.css");
```

## 插槽的使用    组件---->模板

```
插槽内可以包含任何模板代码， 包括 HTML：  甚至其它的组件：
组件lun
<lun>
	ssssssssssss
	<div>aaaa</div>
	<div sloat='a'>bbbb</div>
	<div sloat='b'>cccc</div>
</lun>

<lun>
  	<span>幕尽落倾</span>
  	<slot></slot>//这就相当于ssssssssssss
</lun>


<lun>
  	<span>幕尽落倾</span>
  	<slot name='a'></slot>//这里就可以精确调用某一块到某个位置
  	<span>幕尽落倾</span>
  	<span>幕尽落倾</span>
  	<slot name='b'></slot>//这里就可以精确调用某一块到某个位置
</lun>

甚至其它的组件：
<lun>
  <font-awesome-icon name="user"></font-awesome-icon>
</lun>
```

## 插槽的使用    模板---->组件      作用域插槽

```
这是一个组件 假如有个数组  默认显示数组内容
<lun>
	<div>//这个div标签不要忘记
        <slot :itme='navs'>//这样就把内容传到插槽 然后这里就不会显示内容了
            <ul >
                <li v-for='i in navs'>{{i}}</li>
            </ul>
        </slot>
    </div>
</lun>

这里就可以遍历得到上面数组的内容了
<div slot-scope="slotProps">
	<button v-for=' i in slotProps.item'>{{i}}</button>
</div>

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

