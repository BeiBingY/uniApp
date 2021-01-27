<template>
	<view class="nav">
		<swiper class="swiper" @change="swiperChange">
			<swiper-item v-for="item in newNavData" :key="item.index">
				<view class="nav-swiper-item">
					<view class="nav-item" v-for="ite of item.content" :key="ite.id">
						<img class="nav-item-img" :src="ite.imgUrl" alt="">
						<view class="nav-item-text">{{ite.title}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="nav-itemIndex" v-if="navItemNumber>1">
			<view class="nav-itemIndex-item" v-for="(item,index) of navItemNumber" :key="index" :style="index==current?'background:#DD524D;':''"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current: 0,
			}
		},
		props:['navData'],
		
		computed:{
			//获取nav数据生成的 item 页数数量
			navItemNumber(){   
				let navItemNumber = this.newNavData.length
				return navItemNumber
			},
			
			// 将navData数据进行处理转换生成每页10条数据
			newNavData() {
				let newNavData = []
				let itemLength = Math.ceil(this.navData.length/10)
				for(let i=0,length=itemLength;i<length;i++){
					newNavData.push({index:i,content:[]})
				}
				for(let i=0,length = this.navData.length;i<length;i++){
					newNavData[Math.ceil((i+1)/10)-1].content.push(this.navData[i])
				}
				return newNavData
			}
		},
		
			
		methods:{
			swiperChange(event){
				this.current = event.detail.current
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.nav{
		margin: 10px 0;
		.swiper{
			height: 170px;
			.nav-swiper-item{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
			}
			.nav-item{
				width: 20%;
				text-align: center;
				padding: 10px 5px;
				box-sizing: border-box;
				.nav-item-img{
					width: 40px;
					height: 40px;
				}
				.nav-item-text{
					font-size: 12px;
					line-height: 20px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		
		.nav-itemIndex{
			width: 100vw;
			height: 4px;
			padding: 4px 0;
			display: flex;
			justify-content: center;
			.nav-itemIndex-item{
				width: 5px;
				height: 3px;
				background: #ddd;
				margin: 0 1px;
			}
		}
	}
</style>
