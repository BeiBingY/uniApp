<template>
	<view class="list">
		<view class="item" v-for="item of userList" :key="item.id" @click="itemClick(item)" @longpress="longpress(item)">
			<view class="item-l">
				<image class="item-l-img" src="../../static/logo.png"></image>
				<view class="item-total" v-if="item.total > 0">{{item.total > 99 ? '99+' : item.total}}</view>
			</view>
			<view class="item-r">
				<view class="item-r-title">
					<view class="title-name">{{item.name}}</view>
					<view class="title-time">{{item.time}}</view>
				</view>
				<view class="item-content">
					{{item.content}}
				</view>
			</view>
		</view>
		<view class="hint">暂无更多...</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userList: [
					{
						name: '老大',
						id: 1,
						content: '你大爷的',
						total: 9,
						time: '3分钟'
					},
					{
						name: '小二',
						id: 2,
						content: '客官慢走',
						total: 4,
						time: '5分钟'
					},
					{
						name: '小三',
						id: 3,
						content: '你好坏啊,你好坏啊,你好坏啊,你好坏啊,你好坏啊,你好坏啊,你好坏啊你好坏啊',
						total: 156,
						time: '1小时前'
					},
					{
						name: '李四',
						id: 4,
						content: '我好喜欢哦',
						total: 3,
						time: '10小时前'
					},
					{
						name: '王五',
						id: 5,
						content: '你丫的',
						total: 34,
						time: '1个星期前'
					},
					{
						name: '六爷',
						id: 6,
						content: '六六六',
						total: 0,
						time: '半个月前'
					},
					{
						name: '七大姑',
						id: 7,
						content: '快来，快来',
						total: 1,
						time: '一个月前'
					},
					{
						name: '八大姨',
						id: 8,
						content: '有小姐姐',
						total: 0,
						time: '两个月前'
					}
				]
			}
		},
		
		methods: {
			itemClick(item) {
				uni.navigateTo({
					url: '/pages/chart/chart?id='+item.id
				})
			},
			longpress(item) {
				console.log(item)
				uni.showActionSheet({
				    itemList: ['标记为未读', '删除该聊天'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			}
		}
	}
</script>

<style scoped lang="scss">
.list {
	.item {
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		border-bottom: 2rpx solid #eee;
		.item-l {
			margin-right: 20rpx;
			position: relative;
			.item-l-img {
				width: 100rpx;
				height: 100rpx;
			}
			.item-total {
				position: absolute;
				right: -10rpx;
				top: -10rpx; 
				line-height: 36rpx;
				padding: 0 10rpx;
				border-radius: 36rpx;
				background: red;
				color: #fff;
				font-size: 16rpx;
				margin-left: 10rpx;
			}
		}
		.item-r {
			flex: 1;
			.item-r-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title-name {
					font-size: 32rpx;
					font-weight: bold;
					display: -webkit-box;
					line-height: 40rpx;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
				.title-time {
					font-size: 16rpx;
					color: #ccc;
				}
			}
			.item-content {
				padding-top: 10rpx;
				color: #ccc;
				font-size: 24rpx;
				display: -webkit-box;
				line-height: 40rpx;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
	}
	.hint {
		color: #ddd;
		font-size: 24rpx;
		text-align: center;
		line-height: 100rpx;
	}
}
</style>