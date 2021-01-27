<template>
	<view class="search">
		<view class="search-view">
			<view class="search-view-city">
				<view @click="handlCity">{{city}}</view>
			</view>
			<view class="search-view-input">
				<view>
					<input disabled="true" class="search-input" type="text" placeholder="请输入关键字搜索">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['city'],
		methods:{
			handlCity(){
				uni.navigateTo({
					url:"../../pages/city/city"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		.search-view{
			width: 100%;
			display: flex;
			position: absolute;
			top: 30rpx;
			left: 0;
			z-index: 1;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
			.search-view-city{
				max-width: 140rpx;
				height: 60rpx;
				background: #fff;
				color: #333;
				font-size: 24rpx;
				border-radius: 4rpx;
				line-height: 60rpx;
				padding: 0 20rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
			.search-view-input{
				margin-left: 20rpx;
				padding: 0 20rpx;
				flex: 1;
				height: 60rpx;
				background: #fff;
				border-radius: 30rpx;
				.search-input{
					font-size: 24rpx;
					height: 60rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
