<template>
	<view class="swiperContent" v-if="swiperData.length">
		<swiper class="swiper" indicator-dots :autoplay="true" :interval="5000" :duration="1000" :circular="true">
			<swiper-item v-for="item in swiperData" :key="item.id">
				<img class="swiperImg" :src="item.url" alt="">
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['swiperData']
		
	}
</script>

<style lang="scss" scoped>
	.swiperContent{
		background: #eee;
		.swiper{
			height: 240px;
		}
		.swiperImg{
			width: 100%;
		}
	}
	
</style>
