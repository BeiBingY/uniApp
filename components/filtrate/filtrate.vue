<template>
	<view class="filtrate">
		<view class="filtrate-content">
			<scroll-view scroll-y="true">
				<view>
					<view class="filtrate-content-item" v-for="(item,index) of contentList" :key="item.id">
						<view class="filtrate-content-item-title" v-if="item.tittleShow">{{item.tittle}}</view>
						<view class="filtrate-content-item-i">
							<view class="filtrate-content-item-i-item" v-for="(ite,ind) of item.content" :key="ite.id" :class="{active:ite.isChecked}" @click="handlclick(index,ind)">{{ite.tittle}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="handleBtn">
				<view class="reset" @click="handlReset">重置</view>
				<view class="confim"  @click="handlConfim">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			
			}
		},
		props:['contentList'],
		methods:{
			handlReset(){   //重置
				let contentList = this.contentList
				for(let i=0,length=contentList.length;i<length;i++){
					for(let j=0,leng=contentList[i].content.length;j<leng;j++){
						contentList[i].content[j].isChecked = false
					}
				}
				this.contentList = contentList
			},
			handlclick(index,ind){
				this.contentList[index].content[ind].isChecked = !this.contentList[index].content[ind].isChecked
			},
			handlConfim(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.filtrate{
		.filtrate-content{
			width: 100vw;
			max-height: 450px;
			background:#fff;
			scroll-view{
				max-height:400px;
				.filtrate-content-item{
					padding: 5px 10px;
					.filtrate-content-item-title{
						text-align: left;
						padding-left: 5px;
						font-size: 14px;
					}
					.filtrate-content-item-i{
						display: flex;
						flex-wrap: wrap;
						.filtrate-content-item-i-item{
							font-size: 12px;
							padding: 0 10px;
							line-height: 20px;
							margin: 5px 5px;
							// background: #ccc;
						}
						.active{
							background: red;
							color: #fff;
						}
					}
				}
				
			}
			.handleBtn{
				height: 50px;
				display: flex;
				justify-content: space-around;
				padding: 10px;
				box-sizing: border-box;
				.reset{
					padding: 0 40px;
					background: #555555;
					color: #fff;
					line-height: 30px;
				}
				.confim{
					padding: 0 40px;
					background: red;
					color: #fff;
					line-height: 30px;
				}
			}
		}
		
		
	}
</style>
