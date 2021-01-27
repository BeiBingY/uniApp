<template>
	<view>
		<view class="content-list-block">
			<view class="content-list-block-item" v-for="item of 10" :key="item">
				<view class="content-list-block-item-t">
					<view class="content-list-block-item-img"></view>
				</view>
				<view class="content-list-block-item-b">
					<view class="content-list-block-item-title">标题</view>
					<view class="content-list-block-item-centent">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</view>
				</view>
			</view>
		</view>
		<view class="content-list">
			<view class="content-list-item" v-for="item of 10" :key="item">
				<view class="content-list-item-l">
					<view class="content-list-item-img"></view>
				</view>
				<view class="content-list-item-r">
					<view class="content-list-item-r-title">标题</view>
					<view class="content-list-item-r-centent">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.content-list-block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx;
		.content-list-block-item {
			width: 48%;
			box-sizing: border-box;
			border-radius: 8rpx;
			margin-bottom: 30rpx;
			box-shadow: 0 0 12rpx rgba(0, 0, 0, 0.05);
			.content-list-block-item-t {
				margin-bottom: 10rpx;
				.content-list-block-item-img {
					width: 100%;
					height: 180rpx;
					background: #ccc;
				}
			}
			.content-list-block-item-b {
				font-size: 32rpx;
				padding: 10rpx;
				.content-list-block-item-title {
					font-weight: bold;
					@include cms-multi-line-ellipsis($lineLimit: 1, $lineHeight: 60rpx);
				}
				.content-list-block-item-centent {
					font-size: 24rpx;
					text-align: justify;
					@include cms-multi-line-ellipsis($lineLimit: 2, $lineHeight: 40rpx);
				}
			}
		}
	}
	.content-list{
		padding: 20rpx;
		.content-list-item{
			display: flex;
			border-bottom: 2rpx solid #eee;
			.content-list-item-l{
				padding: 20rpx 10rpx;
				.content-list-item-img{
					width: 240rpx;
					height: 180rpx;
					background: #ccc;
				}
			}
			.content-list-item-r{
				flex: 1;
				font-size: 32rpx;
				padding: 20rpx 10rpx;
				.content-list-item-r-title {
					font-weight: bold;
					@include cms-multi-line-ellipsis($lineLimit: 1, $lineHeight: 60rpx);
				}
				.content-list-item-r-centent{
					font-size: 24rpx;
					text-align: justify;
					@include cms-multi-line-ellipsis($lineLimit: 2, $lineHeight: 40rpx);
				}
			}
		}
	}
</style>
