<template>
	<view class="detail">
		<!-- 轮播图区域 -->
		<swiper class="swiper" autoplay circular>
			<swiper-item v-for="item of swiperData" :key="item.id">
				<view class="swiper-item">
					<image class="swiper-img" :src="item.imgUrl" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 标题区域 -->
		<view class="view-flex">
			<view class="title">标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称</view>
			<view class="share">
				<view>
					<image class='share-icon' src="../../static/logo.png" mode=""></image>
					<view>分享</view>
				</view>
			</view>
		</view>
		
		<!-- 价格区域 -->
		<view class="view">
			<view class="price">￥ <text class="price-number">8</text>.00/天 <text class="inventory">库存：20</text></view>
			<view class="price-detail">
				<view class="price-detail-row">
					<view class="price-detail-row-l">满90天</view>
					<view class="price-detail-row-c">
						<view class="price-detail-row-c-width" :style="{width:width}"></view>
					</view> 
					<view class="price-detail-row-r">￥199.00/天</view>
				</view>
				<view class="price-detail-row">
					<view class="price-detail-row-l">满900天</view>
					<view class="price-detail-row-c">
						<view class="price-detail-row-c-width" :style="{width:width}"></view>
					</view> 
					<view class="price-detail-row-r">￥199.00/天</view>
				</view>
			</view>
		</view>
		
		<!-- 服务区域 -->
		<view class="view">
			<view class="view-row">
				<view class="view-row-l">运费</view>
				<view class="view-row-r">送货上门 到付/包邮</view>
			</view>
			<view class="view-row">
				<view class="view-row-l">服务</view>
				<view class="view-row-r">免押金 可续租</view>
			</view>
		</view>
		
		<!-- 租赁流程 -->
		<view class="view">
			<view class="scheme">
				<view class="scheme-item" :class="schemeCurrent==0?'scheme-title-active':''" @click="schemeClick(0)">
					<image class="scheme-icon" src="../../static/logo.png" mode=""></image>
					<view>租赁流程</view>
				</view>
				<view class="scheme-item" :class="schemeCurrent==1?'scheme-title-active':''" @click="schemeClick(1)">
					<image class="scheme-icon" src="../../static/logo.png" mode=""></image>
					<view>买断方案</view>
				</view>
				<view class="scheme-item" :class="schemeCurrent==2?'scheme-title-active':''" @click="schemeClick(2)">
					<image class="scheme-icon" src="../../static/logo.png" mode=""></image>
					<view>续租方案</view>
				</view>
			</view>
			<swiper class="scheme-swiper"  @change="schemeSwiperChange" :current="schemeCurrent">
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-item-item">
							<view class="swiper-item-item-number">01</view>
							<view>选品下单</view>
						</view>
						<view class="scheme-triangle"></view>
						<view class="swiper-item-item">
							<view class="swiper-item-item-number">02</view>
							<view>减免结算</view>
						</view>
						<view class="scheme-triangle"></view>
						<view class="swiper-item-item">
							<view class="swiper-item-item-number">03</view>
							<view>支付租金</view>
						</view>
						<view class="scheme-triangle"></view>
						<view class="swiper-item-item">
							<view class="swiper-item-item-number">04</view>
							<view>归还/续租/买断</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="scheme-title">
							<view>买断</view>
							<view>规则</view>
						</view>
						<view class="scheme-content">
							<view class="scheme-emphasis">终生拥有</view>
							<view>买断价=市场价-已付租金 买断增幅</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="scheme-title">
							<view>续租</view>
							<view>方案</view>
						</view>
						<view class="scheme-content">
							<view>按照所选天数对应的最低价格</view>
							<view>专线服务全程为你答疑问题</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 详情、参数明细区域 -->
		<view class="content">
			<view class="content-title">
				<view :class="current==0?'content-title-active':''" @click="titleClick(0)">详情信息</view>
				<view :class="current==1?'content-title-active':''"  @click="titleClick(1)">参数明细</view>
			</view>
			<swiper class="swiper" @change="swiperChange" :current="current">
				<swiper-item>
					<view class="swiper-item">
						<scroll-view scroll-y="true" class="scroll-view">
							<view>1</view>
						</scroll-view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<scroll-view scroll-y="true" class="scroll-view">
							<view>2</view>
						</scroll-view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	
		<!-- 底部导航栏 -->
		<view class="bottom-nav">
			<view class='nav1'>
				<image class="nav-icon" src="../../static/logo.png" mode=""></image>
				<view>首页</view>
			</view>
			<view class='nav1'>
				<image class="nav-icon" src="../../static/logo.png" mode=""></image>
				<view>客服</view>
			</view>
			<view class='nav1'>
				<image class="nav-icon" src="../../static/logo.png" mode=""></image>
				<view>购物车</view>
			</view>
			<view class='nav2'>
				<view class="add-cart">加入购物车</view>
				<view class="add">立即租用</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				swiperData:[
					{
						id:1,
						imgUrl: 'https://pic.rmb.bdstatic.com/8fb0963634167b6f8cd93b76cce832bb.gif'
					},
					{
						id:2,
						imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4183488019,3469806694&fm=26&gp=0.jpg'
					},
				],
				width: '80%',
				current: 0,
				schemeCurrent: 0
			}
		},
		
		methods:{
			schemeSwiperChange(event){
				this.schemeCurrent = event.detail.current
			},
			schemeClick(index){
				this.schemeCurrent = index
			},
			swiperChange(event){
				this.current = event.detail.current
			},
			titleClick(index){
				this.current = index
			},
		}
	})
</script>

<style lang="scss" scoped>
	.detail{
		padding-bottom: 100rpx;
		.swiper{
			height: 400rpx;
			.swiper-item{
				.swiper-img{
					width: 100%;
				}
			}
		}
		.view-flex{
			display: flex;
			align-items: center;
			padding: 20rpx 20rpx 0 20rpx;
			.title{
				flex: 1;
				font-size: 36rpx;
				font-weight: 600;
				line-height: 44rpx;
				padding-right: 20rpx;
			}
			.share{
				font-size: 28rpx;
				text-align: center;
				.share-icon{
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
		.view{
			border-bottom: 20rpx solid #eee;
			padding: 20rpx;
			.price{
				color: red;
				font-size: 28rpx;
				font-style:italic;
				.price-number{
					font-size: 40rpx;
					font-weight: 600;
					margin-left: 10rpx;
				}
				.inventory{
					color: #999;
					margin-left: 40rpx;
					font-size: 24rpx;
					font-style: normal;
				}
			}
			.price-detail{
				background: #F5F5F5;
				font-size: 24rpx;
				color: #666;
				padding: 20rpx;
				border-radius: 10rpx;
				margin-top: 20rpx;
				.price-detail-row{
					display: flex;
					align-items: center;
					.price-detail-row-l{
						flex: 1.2;
					}
					.price-detail-row-c{
						flex: 3.2;
						height: 8rpx;
						border-radius: 8rpx;
						background: #ccc;
						.price-detail-row-c-width{
							height: 8rpx;
							border-radius: 8rpx;
							background: linear-gradient(to right,#fd0,#f50);
						}
					}
					.price-detail-row-r{
						flex: 1.5;
						text-align: right;
					}
				}
			}
			.view-row{
				display: flex;
				align-items: center;
				font-size: 30rpx;
				padding: 10rpx 0;
				.view-row-l{
					flex: 1;
				}
				.view-row-r{
					flex: 5;
				}
			}
			.scheme{
				display: flex;
				font-size: 28rpx;
				.scheme-item{
					flex: 1;
					text-align: center;
					.scheme-icon{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.scheme-title-active{
					color: #FF8C00;
				}
			}
			.scheme-swiper{
				height: 150rpx;
				background: rgba(255,140,0,0.2);
				margin-top: 20rpx;
				border-radius: 10rpx;
				padding: 30rpx 0;
				box-sizing: border-box;
				.swiper-item{
					border-left: 20rpx solid #FF8C00;
					height: 100%;
					display: flex;
					align-items: center;
					.scheme-title{
						width: 100rpx;
						border-right: 2rpx solid #FF8C00;
						font-size: 28rpx;
						font-weight: 600;
						line-height: 45rpx;
						text-align: center;
						color: #FF8C00;
					}
					.scheme-content{
						font-size: 26rpx;
						color: #666;
						line-height: 45rpx;
						padding: 0 10rpx 0 20rpx;
						.emphasis{
							font-weight: bold;
						}
					}
					.swiper-item-item{
						font-size: 24rpx;
						padding: 0 10rpx;
						line-height: 45rpx;
						.swiper-item-item-number{
							font-size: 34rpx;
							font-weight: 600;
							color: #FF8C00;
						}
					}
					.scheme-triangle{
						width: 0;
						height: 0;
						border-top: 10rpx solid transparent;
						border-left: 10rpx solid #FF8C00;
						border-bottom: 10rpx solid transparent;
						margin: 0 10rpx;
					}
				}
			}
		}
		.content{
			/* #ifdef H5 */
			height: calc(100vh - 94px);
			/* #endif */
			/* #ifndef H5 */
			height:calc(100vh - 50px);
			/* #endif */
			.content-title{
				height: 80rpx;
				display:flex;
				align-items: center;
				justify-content: space-around;
				font-size: 30rpx;
				border-bottom: 2rpx solid #eee;
				box-sizing: border-box;
				.content-title-active{
					color: #f50;
				}
			}
			.swiper{
				height: calc(100% -  80rpx);
				background:#eee;
				.swiper-item{
					.scroll-view{
						height: 100%;
					}
				}
				
			}
		}
		.bottom-nav{
			width: 100%;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 99;
			border-top: 2rpx solid #ddd;
			background: #fff;
			display: flex;
			align-items: center;
			.nav1{
				flex: 1;
				font-size: 26rpx;
				text-align: center;
				.nav-icon{
					width: 50rpx;
					height: 50rpx;
				}
			}
			.nav2{
				flex: 4;
				display: flex;
				text-align: center;
				font-size: 30rpx;
				color: #fff;
				.add-cart{
					flex: 1;
					line-height: 100rpx;
					background: #f50;
				}
				.add{
					line-height: 100rpx;
					flex: 1;
					background: red;
				}
			}
		}
	}
</style>
