
<template>
	<view class="member">
		<!-- #ifdef APP-PLUS||H5 -->
		<v-header :headerData="headerData"></v-header>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		<view class="top-view" :style="{marginTop: marginTop+'rpx'}">
		<!-- #endif -->
		
		<!-- #ifndef APP-PLUS -->
		<view class="top-view">
		<!-- #endif -->
		
			<view class="top-view-content">
				<view class="top-view-content-l">
					<view>
						<view class="top-view-img"></view>
					</view>
					<view>
						<view class="top-view-name">小仙猪</view>
					</view>
				</view>
				<view class="top-view-content-r">
					<view class="signin">签到</view>
				</view>
			</view>
			<view class="content-view">
				<view class="content-view-item" v-for="item of 4" :key="item">
					<view class="icon"></view>
					<view>消息通知</view>
				</view>
			</view>
		</view>
		<view class="placeholder"></view>
		<view class="swiper-view">
			<swiper class="swiper" indicator-dots autoplay :interval="5000" :duration="500">
				<swiper-item>
					<view class="swiper-item">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="list">
			<view class="item">
				<view>我的优惠券</view>
				<image class="right-icon" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="item">
				<view>收货地址</view>
				<image class="right-icon" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="item">
				<view>帮助中心</view>
				<image class="right-icon" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="item">
				<view>关于我们</view>
				<image class="right-icon" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="item">
				<view>投诉建议</view>
				<image class="right-icon" src="../../static/logo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from "@/components/header/header"
	import { http } from "@/js_sdk/luch-request/index.js"
	export default{
		data(){
			return {
				//头部导航栏数据
				headerData:{
					isLeft: false,  //是否显示左边返回按钮
					isRight: false, //是否显示右边操作按钮
					isContent: true,	//是否显示title内容
					tittle:'会员中心' 	//tittle内容
				},
			}
		},
		
		computed:{
			marginTop(){
				let statusBarHeight = this.$store.state.statusBarHeight
				return (statusBarHeight+ 44)*2
			}
		},
		
		components:{
			'v-header': Header
		},
		methods:{
			
		},
			
		onShow(){
			const that = this
		
		}
	}
</script>

<style lang="scss" scoped>
	.member{
		background: #eee;
		.top-view{
			width: 100%;
			height: 400rpx;
			background: red;
			color: #fff;
			position: relative;
			.top-view-content{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 70rpx 30rpx 30px 30rpx;
				.top-view-content-l{
					display: flex;
					align-items: center;
					.top-view-img{
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
						background: #ccc;
					}
					.top-view-name{
						font-size: 32rpx;
						padding: 0 20rpx;
					}
				}
				.top-view-content-r{
					.signin{
						width: 100rpx;
						border-radius: 50rpx;
						font-size: 24rpx;
						line-height: 50rpx;
						text-align: center;
						background: rgba(255,255,255,0.6);
					}
				}
				
				
			}
			.content-view{
				width: 90%;
				height: 200rpx;
				border: 2rpx solid #ccc;
				background: #fff;
				border-radius: 20rpx;
				position: absolute;
				bottom: -100rpx;
				left: 5%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				.content-view-item{
					flex: 1;
					font-size: 24rpx;
					text-align: center;
					color: #000;
					.icon{
						width: 100rpx;
						height: 100rpx;
						background: #ccc;
						border-radius: 50%;
						margin: 0 auto 10rpx;
					}
				}
				
					
			}
		}
		.placeholder{
			height: 120rpx;
		}
		.swiper-view{
			height: 200rpx;
			background: #fff;
			swiper{
				height: 200rpx;
				.swiper-item{
					width: 90%;
					height: 120rpx;
					background: #eee;
					border-radius: 60rpx;
					margin: 20rpx auto;
					text-align: center;
					line-height: 120rpx;
				}
			}
		}
		.list{
			background: #fff;
			padding: 0 20rpx;
			border-top: 20rpx solid #eee;
			.item{
				display:flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30rpx;
				padding: 0 20rpx;
				line-height: 100rpx;
				border-bottom: 2rpx solid #eee;
				.right-icon{
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>
