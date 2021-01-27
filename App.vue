
 
<!-- 页面的入口文件 本身不是页面
 
 这里不能编写视图元素
 
 这个文件的作用包括： 
 调用应用生命周期函数、配置全局样式、配置全局的存储globalData -->


<script>
	export default {
		
		// 全局变量，全端通用，使用状态管理，请使用vuex
		// js中操作globalData的方式如下： getApp().globalData.text = 'test'
		// 在应用onLaunch时，getApp对象还未获取，暂时可以使用this.$scope.globalData获取globalData。
		globalData:{
			text: '内容'
		},
		
		// 初始化完成时触发(全局只触发一次)
		onLaunch: function() {
			// console.log('App Launch',this.$scope.globalData)
			const that = this
			uni.getSystemInfo({
				success:function(e){
					// console.log(e)
					// 获取页面状态栏高度
					that.$store.commit('set_statusBarHeight',e.statusBarHeight)
				}
			})
			
		},
		
		// 启动或从后台进入前台显示 触发
		onShow: function() {
			// console.log('App Show',getApp().globalData.text)
			console.log('App Show')
		},
		
		// 从前台进入后台 触发
		onHide: function() {
			console.log('App Hide')
		},
		
		// 报错时触发
		onError: function(err){
			console.log('App error',err)
		},
		
		// 对nvue页面发送的数据进行监听
		onUniNViewMessage: function(){
			console.log('App uniNViewMessage')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
</style>
