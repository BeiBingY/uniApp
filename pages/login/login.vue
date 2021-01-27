<template>
	<view class="login">
		<!-- #ifdef APP-PLUS||H5 -->
		<v-header :headerData="headerData"></v-header>
		<!-- #endif -->
		<view class="content">
			<form @submit="submit">
				<view class="row">
					<view class="row-l">账号：</view>
					<view class="row-r">
						<input name="ID" class="row-input" type="text" placeholder="请输入账号">
					</view>
				</view>
				<view class="row">
					<view class="row-l">密码：</view>
					<view class="row-r">
						<input name="password" type="text" class="row-input" :password="true" placeholder="请输入密码">
					</view>
				</view>
				<button class="btn" form-type="submit">登录</button>
				<button class="btn" @click="verify">验证</button>
			</form>
		</view>
		
	</view>
</template>

<script>
	import Header from "@/components/header/header"
	export default({
		data(){
			return{
				//头部导航栏数据
				headerData:{
					isLeft: false,  //是否显示左边返回按钮
					isRight: false, //是否显示右边操作按钮
					isContent: true,	//是否显示title内容
					tittle:'登录' 	//tittle内容
				},
				btnTrue:true
			}
		},
		components:{
			'v-header': Header
		},
		methods:{
			verify(){
				this.$test.get('/verify').then(res=>{
					console.log(res,'验证')
				}).catch(err=>{
					console.log(err,'请求失败')
				})
			},
			submit(e){
				const that = this
				if(this.btnTrue){
					if(!e.detail.value.ID){
						return uni.showToast({
							title: '请输入账号',
							icon: 'none'
						})
					}
					if(!e.detail.value.password){
						return uni.showToast({
							title: '请输入密码',
							icon: 'none'
						})
					}
					console.log(e.detail)
					that.$test.post('/login',{id:e.detail.value.ID,password:e.detail.value.password}).then(res=>{
						console.log(res,'登录成功')
						this.$store.commit('set_token',res.data.token)
					}).catch(err=>{
						console.log(err,'登录失败')
					})
				}
				
			}
		}
		
	})
</script>

<style lang="scss" scoped>
	.login{
		.content{
			margin: 400rpx 50rpx 100rpx;
			.row{
				display: flex;
				align-items: center;
				font-size: 34rpx;
				border-bottom: 2rpx solid #eee;
				padding: 20rpx;
				.row-l{
					
				}
				.row-r{
					flex: 1;
					.row-input{
						width: 100%;
						font-size: 30rpx;
						height: 50rpx;
					}
				}
			}
			.btn{
				background: #8B5A2B;
				color: #fff;
				font-size: 34rpx;
				margin-top: 100rpx;
			}
		}
	}
</style>
