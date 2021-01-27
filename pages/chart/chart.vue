<template>
	<view>
		<view>
			<input type="text" v-model="userValue.user_name" placeholder="请输入账号">
		</view>
		<view>
			<input type="text" v-model="userValue.user_password" placeholder="请输入密码">
		</view>
		<button @click="loginBtn">登录</button>
		<button @click="requireBtn">请求接口验证</button>
		<button @click="registerBtn">注册账号</button>
	</view>
</template>

<script>
	import { setToken } from '@/utils/token'
	export default {
		data() {
			return {
				userValue: {
					user_name: '18888888883',
					user_password: '18888888883'
				}
			}
		},
		
		onLoad(options) {
			console.log(options.id)
			uni.setNavigationBarTitle({
			    title: options.id
			});
			
		},
		
		methods: {
			requireBtn() {
				this.$test.get('/').then(res => {
					console.log(res,'草拟吗')
				}).catch(err => {
					console.log('请求失败',err)
				});
			},
			
			loginBtn() {
				let userValue = this.userValue
				if(userValue.user_name && userValue.user_password) {
					this.$test.post('/login', userValue).then(res => {
						console.log(res)
						if(res.statusCode == 200 && res.data.token) {
							setToken(res.data.token)
						}
					}).catch(err => {
						uni.showToast({
							title: '登录失败'
						})
					});
				}else {
					uni.showToast({
						title: '请正确输入账号和密码'
					})
				}
			},
			registerBtn() {
				let userValue = this.userValue
				if(userValue.user_name && userValue.user_password) {
					this.$test.post('/register', userValue).then(res => {
						console.log(res,'注册结果')
					}).catch(err => {
						uni.showToast({
							title: '登注册失败'
						})
					});
				}else {
					uni.showToast({
						title: '请正确输入账号和密码'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">

</style>