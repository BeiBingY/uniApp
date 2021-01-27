<template>
	<view class="header" :style="{paddingTop:statusBarHeight+'rpx'}">
		<view class="tittle">
			<view class="tittle-l" v-if="headerData.isLeft" @click="handClickLeft">
				<view class="gl"></view>
				<view>返回</view>
			</view>
			<view class="tittle-c" :class="{tittleR:headerData.isLeft&&!headerData.isRight}" v-if="headerData.isContent">{{headerData.tittle}}</view>
			<view class="tittle-r" v-if="headerData.isRight">
				<view @click="handClickRight">
					<view class="add">搜索</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
			
			}
		},
		props:['headerData'],
		methods:{
			handClickLeft(){  //点击左边按钮返回上一页
				uni.navigateBack({
				    delta: 1
				});
			},
			
			handClickRight(){
				console.log('点击右边按钮')
			}
		},
		created() {
			
		},
		computed:{
			statusBarHeight(){
				console.log(this.$store.state.statusBarHeight,'app和H5 页面状态栏高度')
				let statusBarHeight = this.$store.state.statusBarHeight*2
				return statusBarHeight
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 100vw;
		background: #8B5A2B;
		color: #fff;
		/* #ifndef APP-PLUS */
		position: sticky;
		/* #endif */
		/* #ifdef APP-PLUS */
		position: fixed;
		/* #endif */
		top: 0;
		left: 0;
		z-index: 999;
		.tittle{
			height: 100%;
			display: flex;
			align-items: center;
			.tittle-l{
				min-width: 80rpx;
				max-width: 120rpx;
				font-size: 24rpx;
				margin-left: 20rpx;
				display: flex;
				align-items: center;
				justify-content: start;
				.gl{
					width: 20rpx;
					height: 20rpx;
					border-top: 4rpx solid #fff;
					border-left: 4rpx solid #fff;
					transform:rotate(-45deg);
				}
			}
			.tittle-c{
				flex: 1;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 32rpx;
				overflow: hidden;
				text-overflow: ellipsis; 
				-o-text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
			}
			.tittleR{
				padding-right: 80rpx;
			}
			.tittle-r{
				min-width: 80rpx;
				max-width: 120rpx;
				font-size: 24rpx;
				text-align: right;
			}
		}
	}
		
</style>
