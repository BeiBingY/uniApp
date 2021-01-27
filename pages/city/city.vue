<template>
	<view>
		<new-header :headerData="headerData"></new-header>
		<view class="city-body">
			<view class="topInput" @touchmove.stop.prevent="preventTouchmove">
				<input class="input" @input="inputv" type="text" placeholder="请输入城市关键字">
				<view class="model" v-if="modelList.modelShow">
					<scroll-view v-if="modelList.modelList.length>0" scroll-y="true" style="height:100%;padding:10px;box-sizing: border-box;">
						<view class="select-item" v-for="item of modelList.modelList" :key="item.id" @click="handlConfirm(item.name)">{{item.name}}</view>
						
					</scroll-view>
					<view v-else style="text-align: center;color:#999;font-size:12px;padding-top:100px;">
						暂无该城市
					</view>
				</view>
			</view>
			<view class="hotCity">
				<view class="hotCity-title">当前城市</view>
				<view class="hotCity-content">
					<view class="hotCity-content-item">
						<view class="hotCity-content-item-c hotCity-active" @click="handlConfirm(confirmCity)">{{confirmCity}}</view>
					</view>
				</view>
			</view>
			<view class="hotCity">
				<view class="hotCity-title">热门城市</view>
				<view class="hotCity-content">
					<view class="hotCity-content-item" v-for="item of city.hotCities" :key="item.id">
						<view class="hotCity-content-item-c"  @click="handlConfirm(item.name)">{{item.name}}</view>
					</view>
					
				</view>
			</view>
			<view class="classify" v-for="(item,key) in city.cities" :key="key">
				<view class="classify-title" :id="key">{{key}}</view>
				<view class="classify-list">
					<view class="classify-list-item" v-for="ite of item" :key="ite.id"  @click="handlConfirm(ite.name)">{{ite.name}}</view>
				</view>
			</view>
			<view class="letters-list">
				<view class="letters-list-item" v-for="item of letters" :key="item" @touchstart.stop.prevent="handleTouchStart(item)" :ref='item' @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import city from "../../utils/city.js"
	import Header from "@/components/header/header.vue"
	export default{
		data(){
			return{
				//头部导航栏数据
				headerData:{
					isLeft: true,  //是否显示左边返回按钮
					isRight: false, //是否显示右边操作按钮
					isContent: true,	//是否显示tittle内容
					tittle:'城市选择' 	//tittle内容
				},
				city: {},
				touchStatus: false,
				startY: 0,
				timer: null,
				letter: '',
				inputValue: '',
			}
		},
		components:{
			newHeader: Header
		},
		
		created() {
			this.city = city.data
		},
		
		computed:{
			confirmCity(){
				return this.$store.state.city
			},
			modelList(){
				const city = this.city.cities
				let modelShow = false
				let modelList ={
					modelShow: false,
					modelList: []
				}
				if(this.inputValue){
					for(let i in city){
						for(let j=0,length=city[i].length;j<length;j++){
							
							if(city[i][j].name.indexOf(this.inputValue)>=0||city[i][j].spell.toLowerCase().indexOf(this.inputValue)>=0){
								modelList.modelList.push(city[i][j]);
							}
						}
					}
					modelList.modelShow = true
				}
				return modelList
			},
			letters(){
				const letters = []
					
				for(let i in this.city.cities){
					letters.push(i)
				}
				return letters
			}
		},
		watch: {
		    letter () {
				const that = this
				if (this.letter) {
					uni.createSelectorQuery().select(".city-body").boundingClientRect(data=>{//目标节点
					　　uni.createSelectorQuery().select('#'+that.letter).boundingClientRect((res)=>{//最外层盒子节点
					　　　　uni.pageScrollTo({
					　　　　　　duration:0,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
					　　　　　　scrollTop:res.top - data.top - 100,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
					　　　　})
					　　}).exec()
					}).exec();
				}
		    }
		  },
		
		methods:{
			preventTouchmove(){
				return false
			},
			inputv(event){
				this.inputValue = event.detail.value
			},
			handleTouchStart (item) {
				this.handleLetterChange(item)
				this.touchStatus = true
			},
			handleTouchMove (e) {
				if (this.touchStatus) {
					if (this.timer) {
					  clearTimeout(this.time)
					}
					this.timer = setTimeout(() => {
					  const touchY = e.touches[0].clientY
					  const index = parseInt(Math.floor(touchY - this.startY) / 20) 
					  if (index >= 0 && index < this.letters.length) {
						this.handleLetterChange(this.letters[index])
					  }
					}, 16)
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			},
			handleLetterChange (letter) {
				this.letter = letter
			},
			handlConfirm(item){
				this.$store.commit('set_city',item)
				uni.navigateBack({
					delta: 1
				})
			}
		},
		mounted() {
			const that = this
			setTimeout(()=>{
				uni.createSelectorQuery().select('.letters-list').boundingClientRect((res)=>{
					that.startY = res.top
				}).exec()
			},2000)
		}
	}
</script>

<style lang="scss" scoped>
	.city-body{
		padding: 60px 10px 10px 10px;
		background: #fff;
		.topInput{
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #ccc;
			position: fixed;
			top:0;
			/* #ifdef H5 */
			top: 44px;
			/* #endif */
			left: 0;
			z-index: 2;
			background: #fff;
			padding: 5px 10px;
			box-sizing: border-box;
			.input{
				border: 1px solid #ccc;
				border-radius: 5px;
				width: 100%;
				height: 40px;
				padding: 0 10px;
				font-size: 12px;
				box-sizing: border-box;
				text-align: center;
			}
			.model{
				width: 100vw;
				height: calc(100vh - 94px);
				background: #fff;
				position: absolute;
				top: 50px;
				left: 0;
				z-index: 2;
				box-sizing: border-box;
				.select-item{
					border-bottom: 1px solid #eee;
					line-height: 35px;
					font-size: 14px;
				}
			}
		}
		.hotCity{
			.hotCity-title{
				font-size: 16px;
				color: #000;
				padding: 10px 0;
			}
			.hotCity-content{
				display: flex;
				flex-wrap: wrap;
				.hotCity-content-item{
					width: 33.33%;
					padding: 10px;
					box-sizing: border-box;
					.hotCity-content-item-c{
						font-size: 14px;
						line-height: 30px;
						border: 1px solid #ccc;
						color: #000;
						border-radius: 5px;
						text-align: center;
					}
					.hotCity-active{
						background: #4CD964;
						color:#fff;
					}
				}
			}
		}
		.classify{
			.classify-title{
				color: #000;
				font-size: 18px;
				font-weight: 600;
				background: #eee;
				padding: 0 10px;
				line-height: 40px;
				box-sizing: border-box;
			}
			.classify-list{
				.classify-list-item{
					font-size: 16px;
					line-height: 40px;
					padding: 0 10px;
					border-bottom: 1px solid #eee;
					box-sizing: border-box;
				}
			}
		}
		.letters-list{
			width: 25px;
			// height: 70vh;
			position: fixed;
			bottom: 20px;
			right: 0;
			z-index: 1;
			font-size: 12px;
			text-align: center;
			display: flex;
			flex-direction: column;
			// justify-content: space-around;
			// align-items: center;
			.letters-list-item{
				width: 100%;
				height: 20px;
			}
		}
	}
</style>
