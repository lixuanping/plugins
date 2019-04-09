## 注意！！！ 所有的模块安装  npm install vue-router --save后面加--save是打包时候也要用上的 --save-dev 再加上dev是不用打包的  例如脚手架是不用打包的  node-sass也是不用的

## 脚手架安装

```
脚手架  安装 前提是安装的node要8.xxx版本以上  且要安装了在npm商店下载了vue
npm i -g @vue/cli  下载
```

## 路由使用

```
https://router.vuejs.org/installation.html#direct-download-cdn

npm run build  这步是打包 路由不用这一步

1 下载路由
cnpm install vue-router--save

2 在main.js引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

3  定义路由  这里引入的就是每个页面 每个路由定义一个组件 
import aaa from 'xxx'//xxx是文件名字
import bbb from 'xxx'//xxx是文件名字
  
4  定义路由（固定写法) 第二个就是一打开页面需要展示的内容 
const routes = [{
		path: '/页面名字.vue',	
		component: aaa
	}，
	{
		path: '/',//默认显示页面
		component: Cycle
	}
]

5  把上面定义的路由赋予router （固定写法）
const router = new VueRouter({
	routes 
})
 
6  把第二步的到的值挂载在new Vue  然后返回给public里面的#app 就是第一项的内容
new Vue({
	router,
  	render: h => h(demo)
}).$mount('#app')

7  在app.vue 文件夹里面 <template>里面引入上面的 <router-view></router-view>

把你的项目（不包括node）拷贝到别的文件的时候直接 npm install 就可以直接配置你需要的文件
public  和  src  还有下面的三个文件 

scoped加在 style标签里面 就可以让里面的样式只对这页面生效
```

## vueX使用

```
cnpm install vuex --save

//引入Vuex  状态管理工具
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({//要把这个store注入到下面
	// 状态  保存你的东西
	state: {
		text: ''
	},
	//只有这步才会改变state里面的值
	mutations: {
		aaaa(state, data) {
			state.text = data;//改变值
		}
	},
	actions: {// setSearchText是随便取的名字 但要跟前端那边触发的一样 
		setSearchText(context, data) {//context是形参来的  用a也可以
			context.commit('aaaa', data)//是触发上面函数
		}
	},
	getters: {//前端触发这个函数 拿到值 
		getSearchText(state) {
			return state.text
		}
	}
})

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')

第一步  把输入的内容存放在vuex  触发main.js里面的t函数 看情况触发第几步
然后一直延续到第一步
methods: {
    Settext() {
      this.$store.dispatch("setSearchText",传的内容);//这一步就是异步的时候的 这时候就需要先触发actions
      						里面的函数实现一个过渡
      this.$store.commit("aaaa",传的内容);//这一步是同步的时候  如果是这时候直接触发的就是										mutations里面的函数
    }
}

computed: {
    aa() {
      //去vuex拿数据 触发getters函数 也就是上面的第四步
      return this.$store.getters.getSearchText;
    }
}

```

## 配置sass编译环境    scoped

```
安装 cnpm install node-sass --save-dev   cnpm install sass-loader --save-dev
在 style标签里面加上 lang='scss'
```

## 路由懒加载

```
分为  按需加载  和  非按需加载 
按需加载会在页面第一次请求的时候，把相关路由组件块的js添加上；非按需加载则会把所有的路由组件块的js包打在一起。当业务包很大的时候建议用路由的按需加载（懒加载）。

非按需加载
{
	path: '/',//默认显示页面
	component:  require("/xx/xxx/xx.vue");
	
}

按需加载
{
	path: '/',//默认显示页面
	component: function(reslove){
        require(["src/xx/xxx/xx.vue"], resolve);
	}
}

箭头函数的按需加载写法  （试过看不出什么区别）
component:  resolve => require(["src/xx/xxx/xx.vue"], resolve),//在需要懒加载的加上这一句
```

## axios请求和配置文件

```
cnpm install axios --save

在main.js引入
import axios from "axios";
Vue.prototype.$axios = axios;

$axios.get({ url: "http://localhost:18090/a",
        data: {
            
        }
})

还需要下载qs模块（post请求需要）
cnpm install qs --save
在main.js引入
import qs from 'qs';
Vue.prototype.$qs = qs;

let postData = this.$qs.stringify({//发送的数据
    username: this.user,
    password: this.pass
});
this.$axios({
    method: "post",//发送的类型
    url: "http://localhost:18090/a",//发送的地址
    data: postData//发送的数据
})
.then(res => {//返回的数据
    console.log(res.data)
})
.catch(function(error) {//错误前置 报错用的
    console.log(error);
});
```

## 组件传参（父向子传参）

```
复用这个组件 但要它们的颜色不一样
<qcontent type='hotel'/>
<qcontent type='flight'/>
<qcontent type='holiday'/>
在qcontent组件接收传过来的东西 然后判断
props: ["type"]
<button>{{type}}</button>
:class="{
    'red':type==='hotel',
    'blue':type==='flight',
    'green':type==='holiday'
}
```

## 点击事件之组件传参 （父向子）

```
默认显示页面  也是第一个组件  点击第一个组件 传给第二个组件
1，，，<ul>
	<li v-for='(n,index) in navs' :key='index' v-text='n.title' @click="next(index,n.id)"></li>
</ul>
第二个组件
2，，，<xcontent  ref='btn'/>  

1，，，methods: {//第一个组件方法
            next(index,id) {
                this.$refs.btn.childMethods(index,id)
            }
        }
2，，，methods: {//第二个组件里面写这个就可以得到第一个组件传过来的参数了
            childMethods(index,id){
            console.log(index,id)
            }
      }

```

## 点击事件之组件传参（子向父）

```
子组件
<div  @click="next">
</div>
methods: {//子组件方法
    next() {
   		this.$emit('随便起',你要传的参数)
  	}
}
父组件
声明一个方法
<div  @随便起（跟上面那个一样）="aaa">
</div>
methods: {//父组件方法
    aaa(msg) {
   		console.log(msg)//这就是你要的参数
  	}
}
```

## 兄弟通讯（一般用vuex）

## 嵌套路由之显示的是不同的页面

```
这种情况是底部有个固定板块  然后点击显示的是不同的页面
import faxian from './components/Find/Find.vue'//引入底部数据板块
{
		path: '/',
		component: Footer,//一开始默认显示页面为底部
		children: [
			{
				path: '',
				redirect: '/shouye'在底部的基础上加上首页
			},
			{
				path: 'shouye',
				component: shouye
			},
			{
				path: 'faxian',
				component: faxian//这个名字是引入名字 上面path要跟这个一样
			},
			{
				path: 'shang',
				component: shang
			},
			{
				path: 'Xuan',
				component: xuan
			},
			{
				path: 'me',
				component: me
			}
		]
}
在footer引入这个 因为这个就是要显示的页面
<router-view></router-view>

methods: {
    toggle: function(index) {
      this.page=index;
      //点击tab的时候切换到需要的页面
      if (index == 0) {
        location.href = "#/ShouYe";
      } else if (index == 1) {
        location.href = "#/faxian";
      } else if (index == 2) {  
        location.href = "#/shang";
      } else if (index == 3 && this.sessionStorage != null) {
        //判断是否登陆然后跳到对应的页面
        location.href = "#/Me";
      } else {
        location.href = "#/Xuan";
      }
    }
}
```

## 嵌套路由之显示的是相同的页面

```
方法一  点击的时候跳的路由显示的都是相同的content组件页面  可通过上面的组件传参来做  这样就不需要路由

方法二  通过路由来判断
{
		path: '/',
		component: wheader,
			children: [
			{
				path: 'aaa',
				name:'a',
				component: content
			},
			{
				path: '/bbb',
				name:'b',
				component: content
			},
			{
				path: '/ccc:id',
				name:'c',
				component: content
			}
		]
}



可直接跳到指定的路由  且传参（传到url）
 this.$router.push({
     path:'aaa',
     query:{aaaa:123},
});

或者可跳到指定的名字  且传参（传到url）  

 this.$router.push({
    name: "c",
    params: { id: 789 }
});
这两种区别是 第二个传到url上没有问号  不过需要在路径那边加上id  第一种则不需要


可以由组件二监听路由 判断 然后呈现不同的页面
```

## 跳转路由的方式

```
方法一  a标签直接跳转
<a href="#content-1">活动介绍</a>

方法二
可直接跳到指定的路由  且传参（传到url）
 this.$router.push({
     path:'aaa',//
     query:{aaaa:123},
});

这两种区别是 第二个传到url上没有问号  不过需要在路径那边加上id  第一种则不需要 path: '/c:id',
或者可跳到指定的名字  且传参（传到url）  
 this.$router.push({
    name: "c",
    params: { id: 789 }
});
```

## 快速删除node_modules文件夹

```
npm install rimraf -g
rimraf node_modules
```

