<template>
	<view class="view">
		<view class="con">
			<scroll-view scroll-y="true" style="height:100%;" :scroll-into-view="bottomId">
				<view class="item" v-for="(item,index) of list" :key="index" :id="'bottom'+index">
					<view class="item-l" v-if="formId!=item.formId">
						<view class="item-l-li">
							<view class="item-l-li-l">
								<image class="item-l-li-img" :src="item.formUser.headImg"></image>
							</view>
							<view class="item-l-li-r">
								<view class="item-l-li-con">{{item.data}}</view>
							</view>
						</view>
					</view>
					<view class="item-r" v-else>
						<view class="item-r-li">
							<view class="item-r-li-r">
								<view class="item-r-li-con">{{item.data}}</view>
							</view>
							<view class="item-r-li-l">
								<image @click="imgShow(item.formUser.headImg)" class="item-r-li-img" :src="item.formUser.headImg"></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="bottom-view">
			
			<view class="bottom-view-c">
				<view class="bottom-view-c-l">
					<input class="input" v-model="inputValue" type="text" placeholder="请输入内容">
				</view>
				<view class="bottom-view-c-r">
					<button @click="addImg" class="btn" style="background:#F0AD4E">图片</button>
				</view>
				<view class="bottom-view-c-r">
					<button @click="submit" class="btn">发送</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {http} from "@/js_sdk/luch-request/index.js"
	export default({
		data(){
			return {
				ws: null,
				is_open_socket:false,
				bottomId: '',
				list:[],
				inputValue:'\ue415',
				formId: '',
				toId:'',
				type: '',
				isbtn: true
			}
		},
	
		onUnload(){
			const that = this
			if(that.is_open_socket){
				let reason = that.formId+'-'+that.toId
				if(this.type){
					reason += ('-'+this.type)
				}
				that.ws.close({
					reason: reason,
					success(res) {
						that.is_open_socket = false;
						console.log("关闭成功", res)
					},
					fail(err) {
						console.log("关闭失败", err)
					}
				})
			}
		},
		
		methods:{
			addImg(){
				console.log('上传图片')
				const that = this
				uni.chooseImage({
					count: 1,
					success:res=>{
						console.log(res.tempFilePaths[0],'获取照片')
						http.upload('/upload',{
							filePath: res.tempFilePaths[0], 
							name:'file'
						}).then(res => {
							console.log(res)
						}).catch(err => {
							console.log(err,'err')
						});
					}
				})
			},
			
			
			
			imgShow(url){  //图片预览
				uni.previewImage({
					current:url,
					urls:[url],
					success:(res)=>{
						console.log(res,'预览')
					}
				})
			},
			
			clickInt(){  //创建连接
				const that= this
				if(!that.is_open_socket){
					that.ws = uni.connectSocket({
						url: 'ws://127.0.0.1:3000/websocket',
						success(data) {
							console.log("websocket连接成功")
						}
					})
					
					// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
					that.ws.onOpen((res) => {  
						console.log("WebSocket连接正常打开中...！");
						that.is_open_socket = true;
						// 注：只有连接正常打开中 ，才能正常成功发送消息
						
						that.sendData('上线了',that.toId)
						// 注：只有连接正常打开中 ，才能正常收到消息
						that.ws.onMessage((res) => {    //监听服务器发送的消息
							let data = JSON.parse(res.data)
							that.list.push(data)
							setTimeout(()=>{
								that.bottomId = 'bottom'+(that.list.length-1)
							},300)
						});
					})
					
					// 这里仅是事件监听【如果socket关闭了会执行】
					that.ws.onClose(() => {
						that.is_open_socket = false;
						console.log("已经被关闭了")
					})
					
					that.ws.onError(function(err){
						that.is_open_socket = false;
						uni.showModal({
							title: '提示',
							content:"服务器异常，"+err.errMsg,
						})
					})	
				}
			},
			
			
			
			clickSet(index){   //发送数据
				const that = this
				if (this.is_open_socket) {
					// websocket的服务器的原理是:发送一次消息,同时返回一组数据【否则服务器会进去死循环崩溃】
					
					this.sendData('你好',index)
				}
			},
			
			submit(){
				if(this.inputValue){
					if(this.isbtn){
						this.isbtn = false
						this.sendData(this.inputValue,this.toId)
					}
				}else{
					uni.showToast({
						title:'请先输入内容',
						icon:'loading',
						mask: true
					})
				}
			},
			
			sendData(params,toId){
				const that = this
				let data = JSON.stringify({
					formId: this.formId,
					data: params,
					toId: toId,
					type: this.type
				})
				
				that.ws.send({
					data: data,
					async success() {
						that.isbtn = true
						that.inputValue = ''
						console.log("消息发送成功");
					}
				})
			}
		},
		
		onLoad(options) {
			this.toId = options.toId
			if(options.toId=='liuerlong'){
				uni.setNavigationBarTitle({
					title: '柳二龙'
				})
			}
			if(options.toId=='xiaowu'){
				uni.setNavigationBarTitle({
					title: '小舞'
				})
			}
			if(options.toId=='tansan'){
				uni.setNavigationBarTitle({
					title: '唐三'
				})
			}
			
			// #ifdef MP-WEIXIN
			this.formId = 'tansan'
			// #endif
			// #ifdef H5
			this.formId = 'liuerlong'
			// #endif
			// #ifdef MP-BAIDU
			this.formId = 'xiaowu'
			// #endif
			
		},
		onShow() {
			if(!this.is_open_socket){
				this.clickInt()
			}
		}
	})
</script>

<style lang="scss" scoped>
	.view{
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		display: flex;
		flex-direction: column;
		.con{
			flex:1;
			background: #ccc;
			overflow: hidden;
			.item-l{
				padding: 20rpx;
				.item-l-li{
					display: flex;
					justify-content: flex-start;
					.item-l-li-l{
						.item-l-li-img{
							width: 60rpx;
							height: 60rpx;
							border-radius: 8rpx;
							margin-right: 20rpx;
							display: block;
						}
					}
					.item-l-li-r{
						flex: 1;
						display: flex;
						.item-l-li-con{
							max-width: 70%;
							font-size: 32rpx;
							background: #fff;
							line-height: 40rpx;
							min-height: 60rpx;
							border-radius: 8rpx;
							padding: 10rpx 20rpx;
							box-sizing: border-box;
							text-align: justify;
						}
					}
				}
			}
			.item-r{
				padding: 20rpx;
				.item-r-li{
					display: flex;
					justify-content: flex-end;
					.item-r-li-l{
						.item-r-li-img{
							width: 60rpx;
							height: 60rpx;
							border-radius: 8rpx;
							margin-left: 20rpx;
							display: block;
						}
					}
					.item-r-li-r{
						flex: 1;
						display:flex;
						justify-content: flex-end;
						.item-r-li-con{
							max-width: 70%;
							font-size: 32rpx;
							background: #fff;
							line-height: 40rpx;
							min-height: 60rpx;
							border-radius: 8rpx;
							padding: 10rpx 20rpx;
							box-sizing: border-box;
							text-align: justify;
						}
					}
				}
			}
		}
		.bottom-view{
			width: 100%;
			height: 100rpx;
			background: #fff;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
			font-size: 32rpx;
			.bottom-view-c{
				display: flex;
				.bottom-view-c-l{
					flex:1;
					.input{
						height: 80rpx;
						width: 100%;
						background:#eee;
						border-radius: 8rpx;
						padding: 0 10rpx;
						box-sizing: border-box;
					}
				}
				.bottom-view-c-r{
					margin-left: 20rpx;
					.btn{
						background: #f60;
						color: #fff;
						height: 80rpx;
						line-height: 80rpx;
						font-size: 32rpx;
					}
				}
			}
		}
	}
	
</style>
