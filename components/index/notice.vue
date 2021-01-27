<template>
	<div class="notice">
		<view class="view">
			<view class="view-l">
				<image class="images" src="../../static/notice.png" mode=""></image>
			</view>
			<view class="view-r">
				<swiper class="swiper" :autoplay="true" :circular="true" :vertical="true">
					<swiper-item>
						<view class="swiper-item-view">特大喜讯：买一送一</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item-view">双十一来临，快快抢购</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice{
		background: #f9f9f9;
		.view{
			display: flex;
			align-items: center;
			padding: 20rpx;
			.view-l{
				.images{
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
					display: block;
				}
			}
			.view-r{
				flex: 1;
				.swiper{
					height: 40rpx;
					.swiper-item-view{
						height: 40rpx;
						line-height: 40rpx;
						font-size: 28rpx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>