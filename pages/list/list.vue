<template>
	<view class="list">
		<!-- #ifdef APP-PLUS||H5 -->
		<v-header :headerData="headerData"></v-header>
		<!-- #endif -->
		
		<v-tab :filter="filter" @select="selectResult"></v-tab>
		
		<!-- #ifdef APP-PLUS -->
		<view class="content-list" :style="{marginTop: marginTop+'px'}">
		<!-- #endif -->
		
		<!-- #ifndef APP-PLUS -->
		<view class="content-list">
		<!-- #endif -->
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
	import Header from "@/components/header/header"
	import filtrate from "@/components/filtrate/filtrate.vue"
	import tab from "@/components/tab/tab.vue"
	export default{
		data(){
			return{
				//头部导航栏数据
				headerData:{
					isLeft: true,  //是否显示左边返回按钮
					isRight: false, //是否显示右边操作按钮
					isContent: true,	//是否显示title内容
					tittle:'列表' 	//tittle内容
				},
				filter:[
					{
						tittle:'区域',
						name: 'area',
						type: 1,
						isChecked: false,
						isShow: true,
						contentList:[
							{
								id: 1,
								tittle:'城区',
								name: 'urbanArea',
								isChecked: false,
								childList:[
									{
										id: 1,
										tittle: '不限',
										isChecked: false,
										childList:[]
									},
									{
										id: 2,
										tittle: '莞城区',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											}
										]
									},
									{
										id: 3,
										tittle: '东城区',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											}
										]
									},
									{
										id: 4,
										tittle: '南城区',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											},{
												id: 2,
												tittle: '南城',
												isChecked: false,
											},{
												id: 3,
												tittle: '运河东',
												isChecked: false,
											},{
												id: 4,
												tittle: '宏远南',
												isChecked: false,
											},{
												id: 5,
												tittle: '胜利路',
												isChecked: false,
											},{
												id: 6,
												tittle: '下坝',
												isChecked: false,
											}
										]
									},
									{
										id: 5,
										tittle: '万江区',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											}
										]
									},
									{
										id: 6,
										tittle: '虎门镇',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											}
										]
									}
								]
							},
							{
								id: 2,
								tittle:'地铁',
								name: 'metro',
								isChecked: false,
								childList:[
									{
										id: 1,
										tittle: '不限',
										isChecked: false,
										childList:[]
									},
									{
										id: 2,
										tittle: '1号线',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											},{
												id: 2,
												tittle: '虎门火车站',
												isChecked: false,
											},{
												id: 3,
												tittle: '寮夏站',
												isChecked: false,
											},{
												id: 4,
												tittle: '西平站',
												isChecked: false,
											},{
												id: 5,
												tittle: '东城站',
												isChecked: false,
											},{
												id: 6,
												tittle: '蛤地站',
												isChecked: false,
											}
										]
									},
									{
										id: 3,
										tittle: '2号线',
										isChecked: false,
										childList:[
											{
												id: 1,
												tittle: '不限',
												isChecked: false,
											}
										]
									}
								]
							}
						]
					},
					{
						tittle:'价格',
						name:'price',
						type: 2,
						isChecked: false,
						isShow: true,
						contentList:[
							{
								id: 1,
								tittle:'单价',
								name:'unitPrice',
								isChecked: false,
								childList:[
									{
										id: 1,
										tittle: '不限',
										isChecked: false
									},
									{
										id: 2,
										tittle: '10000元/m²以下',
										isChecked: false
									},
									{
										id: 3,
										tittle: '10000-15000元/m²',
										isChecked: false
									},
									{
										id: 4,
										tittle: '15000-20000元/m²',
										isChecked: false
									},
									{
										id: 5,
										tittle: '20000-25000元/m²',
										isChecked: false
									},
									{
										id: 6,
										tittle: '25000-30000元/m²',
										isChecked: false
									}
								]
							},
							{
								id: 2,
								tittle:'总价',
								name:'totalPrice',
								isChecked: false,
								childList:[
									{
										id: 1,
										tittle: '不限',
										isChecked: false
									},
									{
										id: 2,
										tittle: '100万以下',
										isChecked: false
									},
									{
										id: 3,
										tittle: '100-200万',
										isChecked: false
									},
									{
										id: 4,
										tittle: '200-300万',
										isChecked: false
									},
									{
										id: 5,
										tittle: '300-400万',
										isChecked: false
									},
									{
										id: 6,
										tittle: '400-500万',
										isChecked: false
									}
								]
							}
						]
					},
					{
						tittle:'类型',
						name: 'genre',
						type: 3,
						isChecked: false,
						isShow: true,
						contentList:[
							{
								id: 1,
								tittle: '住宅',
								isChecked: false
							},
							{
								id: 2,
								tittle: '公寓',
								isChecked: false
							},
							{
								id: 3,
								tittle: '商住',
								isChecked: false
							},
							{
								id: 4,
								tittle: '别墅',
								isChecked: false
							},
							{
								id: 5,
								tittle: '仓库',
								isChecked: false
							},
							{
								id: 6,
								tittle: '写字楼',
								isChecked: false
							},
							{
								id: 7,
								tittle: '商铺',
								isChecked: false
							},
							{
								id: 8,
								tittle: '厂房',
								isChecked: false
							},
							{
								id: 9,
								tittle: '小产权',
								isChecked: false
							},
							{
								id: 10,
								tittle: '不限',
								isChecked: false
							}
						]
					},
					{
						tittle:'筛选',
						name: 'filtrate',
						type: 4,
						isChecked: false,
						isShow: true,
						contentList:[
							{
								id: 1,
								tittle:'面积',
								name: 'acreage',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '50m²以下',
										isChecked: false
									},
									{
										id: 2,
										tittle: '50-70m²',
										isChecked: false
									},
									{
										id: 3,
										tittle: '70-90m²',
										isChecked: false
									},
									{
										id: 4,
										tittle: '90-110m²',
										isChecked: false
									},
									{
										id: 5,
										tittle: '110-130m²',
										isChecked: false
									},
									{
										id: 6,
										tittle: '130-150m²',
										isChecked: false
									},
									{
										id: 7,
										tittle: '150-200m²',
										isChecked: false
									},
									{
										id: 8,
										tittle: '200m²以上',
										isChecked: false
									}
								]
							},
							{
								id: 2,
								tittle:'特色',
								name: 'feature',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '打折优惠',
										isChecked: false
									},
									{
										id: 2,
										tittle: '品牌房企',
										isChecked: false
									},
									{
										id: 3,
										tittle: '地铁沿线',
										isChecked: false
									},
									{
										id: 4,
										tittle: '精装现房',
										isChecked: false
									},
									{
										id: 5,
										tittle: '名校周边',
										isChecked: false
									},
									{
										id: 6,
										tittle: '配幼儿园',
										isChecked: false
									},
									{
										id: 7,
										tittle: '优秀物业',
										isChecked: false
									},
									{
										id: 8,
										tittle: '不限',
										isChecked: false
									}
								]
							},
							{
								id: 3,
								tittle:'状态',
								name: 'status',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '在售',
										isChecked: false
									},
									{
										id: 2,
										tittle: '待售',
										isChecked: false
									},
									{
										id: 3,
										tittle: '期房',
										isChecked: false
									},
									{
										id: 4,
										tittle: '现房',
										isChecked: false
									},
									{
										id: 5,
										tittle: '尾房',
										isChecked: false
									},
									{
										id: 6,
										tittle: '售馨',
										isChecked: false
									},
									{
										id: 7,
										tittle: '不限',
										isChecked: false
									}
								]
							},
							{
								id: 4,
								tittle:'装修',
								name: 'fitment',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '毛坯',
										isChecked: false
									},
									{
										id: 2,
										tittle: '简装',
										isChecked: false
									},
									{
										id: 3,
										tittle: '精装',
										isChecked: false
									},
									{
										id: 4,
										tittle: '不限',
										isChecked: false
									}
								]
							},
							{
								id: 5,
								tittle:'楼层',
								name: 'level',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '低层',
										isChecked: false
									},
									{
										id: 2,
										tittle: '多层',
										isChecked: false
									},
									{
										id: 3,
										tittle: '高层',
										isChecked: false
									},
									{
										id: 4,
										tittle: '不限',
										isChecked: false
									}
								]
							},
							{
								id: 6,
								tittle:'时间',
								name: 'time',
								isChecked: false,
								content:[
									{
										id: 1,
										tittle: '近期开盘',
										isChecked: false
									},
									{
										id: 2,
										tittle: '未来一个月',
										isChecked: false
									},
									{
										id: 3,
										tittle: '未来三个月',
										isChecked: false
									},
									{
										id: 4,
										tittle: '未来半年',
										isChecked: false
									},
									{
										id: 5,
										tittle: '过去一个月',
										isChecked: false
									},
									{
										id: 6,
										tittle: '过去三个月',
										isChecked: false
									},
									{
										id: 7,
										tittle: '不限',
										isChecked: false
									}
								]
							}
						]
					},
					{
						tittle:'↑↓',
						type: 5,
						name:'sort',
						isChecked: false,
						isShow: true,
						contentList:[
							{
								id: 1,
								tittle: '默认排序',
								isChecked: false
							},
							{
								id: 2,
								tittle: '单价由低到高',
								isChecked: false
							},
							{
								id: 3,
								tittle: '单价由高到低',
								isChecked: false
							},
							{
								id: 4,
								tittle: '开盘时间最近',
								isChecked: false
							},
							{
								id: 5,
								tittle: '开盘时间最远',
								isChecked: false
							}
						]
					},
				]
			}
		},
		
		components:{
			"v-filtrate":filtrate,
			"v-tab":tab,
			'v-header': Header,
		},
		computed:{
			marginTop(){
				let statusBarHeight = this.$store.state.statusBarHeight
				return (statusBarHeight+ 44)*2
			}
		},

		methods:{
			selectResult(value){ //选择之后的数据 合集
				this.newTabsData = value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		.content-list{
			padding: 82rpx 20rpx 20rpx 20rpx;
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
					.content-list-item-r-centent{
						font-size: 24rpx;
						text-align: justify;
					}
				}
			}
		}
	}
</style>
