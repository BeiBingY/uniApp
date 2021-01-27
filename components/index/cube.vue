/**
 * 图片魔方布局
 * 类型 type： 1(一张一排) 2(两张一排均分) 3(三张，左两张并列与右一张并排) 4(三张，左一张与右两张并列并排) 5(四张两排均分)
 */

<template>
	<div class="cube">
		<!-- 一张广告图 -->
		<view class="view" v-if="type==1">
			<view class="no1">
				<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix" @click="toPage(cubeData.link)"></image>
			</view>
		</view>
		<!-- 两张广告图平分左右 -->
		<view class="view" v-if="type==2">
			<view class="no2">
				<view class="no2-item">
					<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
				</view>
				<view class="no2-item">
					<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
				</view>
			</view>
		</view>
		<!-- 三张广告图平分 左一张,右两张 -->
		<view class="view" v-if="type==3">
			<view class="no3">
				<view class="no3-item">
					<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
				</view>
				<view class="no3-item">
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 三张广告图平分 左两张,右一张 -->
		<view class="view" v-if="type==4">
			<view class="no3">
				<view class="no3-item">
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(link)"></image>
					</view>
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
				</view>
				<view class="no3-item">
					<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
				</view>
			</view>
		</view>
		<!-- 四张广告图左右平分两张 -->
		<view class="view" v-if="type==5">
			<view class="no2">
				<view class="no2-item">
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
				</view>
				<view class="no2-item">
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
					<view class="no3-item-item">
						<image class="image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/c8c83f94-c120-4464-adb6-cc08a4b5b942.jpg_r_640x420x95_c00b7d3c.jpg" mode="widthFix"  @click="toPage(cubeData.link)"></image>
					</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			type:{
				type:Number,
				default: function(){
					return 1
				}
			},
			cubeData:{
				type: Object,
				default: function(){
					return {}
				}
			}
		},
		methods:{
			toPage(link){
				if(link){
					uni.navigateTo({
						url:'/'+link
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cube{
		.view{
			.no1{
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
				.image{
					width: 100%;
					display: block;
					border-radius: 10rpx;
				}
			}
			.no2{
				padding: 20rpx;
				display: flex;
				border-radius: 10rpx;
				box-sizing: border-box;
				.no2-item{
					flex: 1;
					height: 100%;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					.image{
						width: 100%;
						display: block;
					}
					.no3-item-item{
						flex: 1;
						overflow: hidden;
						.image{
							width: 100%;
							display: block;
						}
					}
				}
			}
			.no3{
				display: flex;
				border-radius: 10rpx;
				.no3-item{
					flex: 1;
					height: 100%;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					.image{
						width: 100%;
						display: block;
					}
					.no3-item-item{
						flex: 1;
						overflow: hidden;
						.image{
							width: 100%;
							display: block;
						}
					}
				}
			}
		}
	}
</style>