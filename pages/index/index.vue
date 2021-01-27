<template>
	<view class="home">
		<!-- #ifdef APP-PLUS||H5 -->
		<v-header :headerData="headerData"></v-header>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view class="content" :style="{marginTop: marginTop+'rpx'}">
		<!-- #endif -->
		
		<!-- #ifndef APP-PLUS -->
		<view class="content">
		<!-- #endif -->
			<!-- 搜索框 -->
			<new-search :city="city"></new-search>
			<!-- 轮播图 -->
			<new-swiper :swiperData="swiperData"></new-swiper>
			<!-- 导航菜单按钮 -->
			<new-nav :navData="navData"></new-nav>
			<!-- 广播 -->
			<v-notice></v-notice>
			<!-- 魔方图片排列 -->
			<v-cube :type="1"></v-cube>
			
			<v-list></v-list>
			
			
			<!-- #ifdef APP-PLUS -->
				<view> {{appid}} </view>
				<view @click="plusready">推送</view>
				<view @click="show">原生增强提示框插件</view>
				<view @click="ast">消息提示框</view>
				<view @click="requestLocation">请求定位</view>
				<view @click="galleryImg">从相册中选</view>
				<view @click="geolocation">获取地理位置</view>
				<view @click="look">图片预览</view>
				<view>151</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import Header from "@/components/header/header"
	import Search from "@/components/search/search"
	import Swiper from "@/components/index/swiper"
	import Nav from "@/components/index/nav"
	import Cube from "@/components/index/cube"
	import Notice from "@/components/index/notice"
	import list from "@/components/list/index"
	
	export default {
		data() {
			return {
				//头部导航栏数据
				headerData:{
					isLeft: false,  //是否显示左边返回按钮
					isRight: false, //是否显示右边操作按钮
					isContent: true,	//是否显示title内容
					tittle:'首页' 	//tittle内容
				},
				// swiper数据
				swiperData:[],
				// Nav数据
				navData: [],
				appid: 0,
				onBackTime: null,
				
				
			}
		},
		
		components:{
			newSwiper:Swiper,
			newNav: Nav,
			'v-header': Header,
			'v-cube':Cube,
			"v-notice": Notice,
			newSearch:Search,
			"v-list": list
		},
		
		onLoad(options) {
			// #ifdef APP-PLUS
			var appid  = plus.runtime.appid;
			this.appid = appid
			console.log('测试应用的 appid 为：' + appid);
			// #endif
			
		},
		created() {
			this.requestData('')
		},

		
		methods: {
			
			// #ifdef APP-PLUS
			look(){
				plus.nativeUI.previewImage([
					"http://img5.imgtn.bdimg.com/it/u=3892521478,1695688217&fm=26&gp=0.jpg",
					"http://img5.imgtn.bdimg.com/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
					"http://img1.imgtn.bdimg.com/it/u=1179913871,1028413478&fm=26&gp=0.jpg",
					"http://img1.imgtn.bdimg.com/it/u=1080687329,2167885490&fm=26&gp=0.jpg"
				])	
			},
			ast(){
				console.log("点击了")
				let str = '来了，老弟'
				plus.nativeUI.toast("<font style=\"color:#FFFFFF;font-size:15px;margin:50%;\">"+str+"",
				{
					duration:"long",
					verticalAlign:"center",
					type:"richtext",
					background:"rgba(0, 0, 0, 0.5)",
				});
			},
			plusready(){
				// 扩展API加载完毕，现在可以正常调用扩展API
				// 获取客户端标识信息
				plus.push.createMessage('这就是推送内容？？？','草拟吗',{id000:0});
				
				setTimeout(()=>{
					var info = plus.push.getClientInfo();
					console.log( JSON.stringify( info ) );
				},1000)
				
			},
			
			geolocation(){
				plus.geolocation.getCurrentPosition(function(p){
					console.log('Geolocation success: ',p);
				}, function(e){
					console.log('Geolocation error: ' + e.message);
				} );
			},
			show(){
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
				dcRichAlert.show({
				        position: 'center',
				        title: "提示信息",
				        titleColor: '#FF0000',
				        content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
				        contentAlign: 'conter',
				        checkBox: {
				            title: '不再提示',
				            isSelected: true
				        },
				        buttons: [{
				            title: '取消'
				        }, {
				            title: '否'
				        }, {
				            title: '确认',
				            titleColor: '#3F51B5'
				        }]
				}, result => {
				        console.log(result)
				});
			},
			galleryImg() {
				// 从相册中选择图片
			    plus.gallery.pick( function(path){
			    	console.log(path);
			    }, function ( e ) {
			    	console.log( "取消选择图片" );
			    }, {filter:"image"} );
			},
			
			requestLocation(){
				// 申请定位权限
				plus.android.requestPermissions(['android.permission.ACCESS_FINE_LOCATION'], function(e){
					if(e.deniedAlways.length>0){	//权限被永久拒绝
						// 弹出提示框解释为何需要定位权限，引导用户打开设置页面开启
						console.log('Always Denied!!! '+e.deniedAlways.toString());
					}
					if(e.deniedPresent.length>0){	//权限被临时拒绝
						// 弹出提示框解释为何需要定位权限，可再次调用plus.android.requestPermissions申请权限
						console.log('Present Denied!!! '+e.deniedPresent.toString());
					}
					if(e.granted.length>0){	//权限被允许
						//调用依赖获取定位权限的代码
						console.log('Granted!!! '+e.granted.toString());
					}
				}, function(e){
					console.log('Request Permissions error:'+JSON.stringify(e));
				});
			},
			
			// #endif
			
			// 请求首页数据
			requestData(ev){
				const that = this
				this.$http.get('/').then(res => {
					console.log(res,'草拟吗')
					this.appid = res.data.length
					that.swiperData = res.data.swiperData
					that.navData = res.data.navData
					if(ev.onPullDownRefresh){
						uni.stopPullDownRefresh()
					}
				}).catch(err => {
					console.log('请求失败',err)
					if(ev.onPullDownRefresh){
						uni.stopPullDownRefresh()
					}
				});
			},
			
			btn2(){
				this.$store.dispatch('set_title',{title: 'action'})
			}
		},
		
		// 下拉刷新事件
		onPullDownRefresh() {
			let options = {onPullDownRefresh:1}
			this.requestData(options)
		},
		
		computed:{
			city(){
				return this.$store.state.city
			},
			
			marginTop(){
				let statusBarHeight = this.$store.state.statusBarHeight
				return (statusBarHeight + 44)*2
			}
		},
		
		onShow(){
			
		},
	}
</script>

<style lang="scss" scoped>
	.home{
		.content{
			position: relative;
		}
	}
	
</style>
