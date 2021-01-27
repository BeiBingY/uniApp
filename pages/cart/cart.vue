<template>
	<view class="cart">
		<view class="cart-list">
			<checkbox-group @change="checkboxChange" v-if="cartData.length>0">
				<view class="item" v-for="item of cartData" :key="item.id">
					<view class="item-l">
						<label>
							<image class="item-img" src="../../static/logo.png" mode=""></image>
							<view class="checkbox-view">
								<checkbox color="#f60" class="checkbox" :value="item.id" :checked="item.checked" />
							</view>
							
						</label>
					</view>
					<view class="item-r">
						<view class="item-title">{{item.title}}</view>
						<view class="item-subtitle" v-if="item.subTitle">{{item.subTitle}}</view>
						<view class="item-total">
							<view class="total-title">租用数量：</view>
							<view class="item-count">
								<view class="minus" @click="minus(item,'total')">-</view>
								<input class="input" type="text" v-model="item.total"/>
								<view class="add" @click="add(item,'total')">+</view>
							</view>
							<view class="total-title">套</view>
						</view>
						<view class="item-total"> 
							<view class="total-title">租用天数：</view>
							<view class="item-count">
								<view class="minus"  @click="minus(item,'totalDays')">-</view>
								<input class="input" type="text" v-model="item.totalDays"/>
								<view class="add" @click="add(item,'totalDays')">+</view>
							</view>
							<view class="total-title">天</view>
						</view>
						<view class="item-price">
							<view>￥ {{item.price}} <text class="item-color"> /天/套</text></view>
							<view><text class="item-color">合计</text>￥：{{item.price*item.total*item.totalDays}}</view>
						</view>
					</view>
				</view>
			</checkbox-group>
			<view v-else>暂无商品</view>
		</view>
		<view class="bottom-nav">
			<view class="totle-price">
				<view class="price">￥ {{totalPrice}}</view>
				<view class="hint">不包含运费</view>
			</view>
			<view class="set-r">
				<view class="set" @click="delect">删除</view>
				<view class="order" @click="submit">立即下单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				select: [], //选中的商品id集合
				cartData:[
					{
						id: '1',
						title: '名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题',
						subTitle:'',
						totalDays: 1,
						total: 1,
						price: 6,
						max:{
							total: 20,
							totalDays: 10
						},
						checked: false
					},
					{
						id: '2',
						title: '名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题2名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题',
						subTitle:'',
						totalDays: 1,
						total: 1,
						price: 7,
						max:{
							total: 5,
							totalDays: 3
						},
						checked: false
					}
				]
			}
		},
		computed:{
			totalPrice(){
				let cartData = this.cartData
				let totalPrice = 0
				for(let i=0, length=cartData.length; i<length; i++){
					totalPrice += cartData[i].total*cartData[i].totalDays*cartData[i].price
				}
				return totalPrice
			}
		},
		methods:{
			delect(){
				const that = this
				let cartData = that.cartData
				let select = that.select
				let newCartData = []
				if(select.length>0){
					uni.showModal({
						title:'提示',
						content:'确定删除？',
						success: (res) => {
							if(res.confirm){
								for(let i=0, length= cartData.length; i<length; i++){
									for(let j=0, leng = select.length;j<leng;j++){
										if(cartData[i].id!=select[j]){
											newCartData.push(cartData[i])
										}
									}
								}
								that.cartData = newCartData
							}
						}
					})
					
				}else{
					uni.showToast({
						title:'请先选择商品',
						icon:'none',
						mask: true
					})
				}
			},
			checkboxChange(event){
				this.select = event.detail.value
			},
			minus(item,type){    
				if(item[type]<=1){
					item[type] = 1
				}else{
					item[type] -= 1
				}
			},
			add(item,type){
				if(item[type]>=item.max[type]){
					item[type] = item.max[type]
				}else{
					item[type] += 1
				}
			},
			submit(){
				if(this.select.length==0){
					return uni.showToast({
						title:'请先选择商品',
						icon:'none',
						mask: true
					})
				}else{
					console.log(this.select)
				}
			}
		}
	})
</script>

<style lang="scss" scoped>
	.cart{
		.cart-list{
			.item{
				display: flex;
				padding: 20rpx;
				border-bottom: 2rpx solid #eee;
				.item-l{
					margin-right: 20rpx;
					.item-img{
						width: 160rpx;
						height: 160rpx;
						display: block;
					}
					.checkbox-view{
						text-align: center;
						padding-top: 20rpx;
						.checkbox{
							transform:scale(0.7);
						}
					}
					
				}
				.item-r{
					flex: 1;
					.item-title{
						font-size: 28rpx;
						font-weight: 600;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.item-subtitle{
						font-size: 26rpx;
					}
					.item-price{
						color: red;
						display: flex;
						font-size: 28rpx;
						justify-content: space-between;
						padding-top: 20rpx;
						.item-color{
							color: #000;
						}
					}
					.item-total{
						display: flex;
						justify-content: flex-end;
						align-items: center;
						padding-top: 10rpx;
						.total-title{
							font-size: 28rpx;
						}
						.item-count{
							display: flex;
							border: 2rpx solid #eee;
							border-radius: 6rpx;
							margin: 0 20rpx;
							.minus,.add{
								width: 50rpx;
								height: 50rpx;
								border-radius: 6rpx;
								background: #eee;
								text-align: center;
								line-height: 50rpx;
								font-size: 40rpx;
							}
							.input{
								width: 100rpx;
								height: 50rpx;
								background: #fff;
								font-size: 30rpx;
								text-align: center;
							}
						}
						
					}
				}
			}
		}
		.bottom-nav{
			width: 100%;
			height: 100rpx;
			background:#fff;
			border-top: 2rpx solid #eee;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 1;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			.totle-price{
				flex: 1;
				padding: 0 20rpx;
				.price{
					color: red;
					font-size: 36rpx;
					line-height: 48rpx;
				}
				.hint{
					color: #999;
					font-size: 24rpx;
				}
			}
			.set-r{
				flex: 1.5;
				display: flex;
				align-items: center;
				.set{
					flex: 1;
					text-align: center;
					line-height: 100rpx;
				}
				.order{
					flex: 3;
					background: #f60;
					color: #fff;
					text-align: center;
					line-height: 100rpx;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
