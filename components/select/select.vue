<template>
	<view class="select">
		<view class="model" @click="hiddenModel"></view>
		<!-- 区域 展示形式-->
		<view class="select-content" v-if="type==1">
			<view class="select-content-view">
				<view class="select-content-view-l">
					<scroll-view scroll-y="true" class="scroll-y23">
						<view class="scroll-y23-view">
							<view class="scroll-y23-view-item" v-for="(item,index) of newContentList" :key="item.id">
								<view  class="scroll-y23-view-item-text" :class="{active:item.isChecked}" @click="handlClickOne(item)">{{item.tittle}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="select-content-view-c">
					<scroll-view scroll-y="true" class="scroll-y23">
						<view class="scroll-y23-view">
							<view class="scroll-y23-view-item" v-for="(item,index) of chileList" :key="item.id">
								<view  class="scroll-y23-view-item-text" :class="{active:item.isChecked}" @click="handlClickChile(item,type)">{{item.tittle}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="select-content-view-rr">
					<scroll-view scroll-y="true" class="scroll-y23">
						<view class="scroll-y23-view">
							<view class="scroll-y23-view-item" v-for="(item,index) of chilechileList" :key="item.id">
								<view  class="scroll-y23-view-item-text" :class="{active:item.isChecked}" @click="handlClickChileChile(item,type)">{{item.tittle}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		
		<!-- 价格 展示形式-->
		<view class="select-content" v-if="type==2">
			<view class="select-content-view">
				<view class="select-content-view-l">
					<scroll-view scroll-y="true" class="scroll-y23">
						<view class="scroll-y23-view">
							<view class="scroll-y23-view-item" v-for="(item,index) of newContentList" :key="item.id">
								<view  class="scroll-y23-view-item-text" :class="{active:item.isChecked}" @click="handlClickOne(item)">{{item.tittle}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="select-content-view-r">
					<scroll-view scroll-y="true" class="scroll-y23">
						<view class="scroll-y23-view">
							<view class="scroll-y23-view-item" v-for="(item,index) of chileList" :key="item.id">
								<view  class="scroll-y23-view-item-text" :class="{active:item.isChecked}" @click="handlClickChile(item,type)">{{item.tittle}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		
		<!-- 类型 展示形式-->
		<view class="select-content" v-if="type==3">
			<scroll-view scroll-y="true" class="scroll-view4">
				
				<view class="select-content-item-i">
					<view class="select-content-item-i-item" v-for="(item,index) of newContentList" :key="item.id">
						<view class="select-content-item-i-item-text" :class="{'active-border':item.isChecked}" @click="handClickItem(item,type)">{{item.tittle}}</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
		
		<!-- 筛选 展示形式-->
		<view class="select-content" v-if="type==4">
			<scroll-view scroll-y="true" class="scroll-view5">
				<view>
					<view class="select-content-item" v-for="(item,index) of newContentList" :key="item.id">
						<view class="select-content-item-title">{{item.tittle}}</view>
						<view class="select-content-item-i">
							<view class="select-content-item-i-item" v-for="(ite,ind) of item.content" :key="ite.id">
								<view class="select-content-item-i-item-text" :class="{'active-border':ite.isChecked}" @click="handlClick(item,ite)">{{ite.tittle}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="handleBtn">
				<view class="reset" @click="handlReset(type)">重置</view>
				<view class="confim"  @click="handlConfim(type)">确定</view>
			</view>
		</view>
	
		<!-- 排序 展示形式-->
		<view class="select-content" v-if="type==5">
			<scroll-view scroll-y="true" class="scroll-view1">
				<view class="select-content-item-i">
					<view class="select-content-item-i-item" v-for="(item,index) of newContentList" :key="item.id">
						<view class="select-content-item-i-item-text" :class="{active:item.isChecked}" @click="handClickItem(item,type)">{{item.tittle}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// 各个选项对应得 数据内容列表
				newContentList: []
			}
		},
		props:{
			contentList:{
				type: Array,
				default: function () {
					return []
				}
			},
			type:{
				type: Number
			}
		},
		created() {      
			//将传过来的 数据进行赋值到本页面，以便操作本页面单独数据
			this.newContentList = this.contentList
		},
		computed:{
			chileList(){      // 获取二级chile数据
				let chileList = [] 
				if(this.type==1||this.type==2){
					let newContentList = this.newContentList
					for(let i=0,length = newContentList.length;i<length;i++){
						if(newContentList[i].isChecked){
							if(newContentList[i].isChecked){
								chileList = newContentList[i].childList
							}
						}
					}
				}
				return chileList
			},
			chilechileList(){   // 获取三级chile数据
				let chilechileList = []
				if(this.type==1){
					let newContentList = this.newContentList
					for(let i=0,length = newContentList.length;i<length;i++){
						if(newContentList[i].isChecked){
							for(let j=0,leng = newContentList[i].childList.length;j<leng;j++){
								if(newContentList[i].childList[j].isChecked){
									chilechileList = newContentList[i].childList[j].childList
								}
							}
						}
					}
				}
				return chilechileList
			}
		},
		methods:{
			hiddenModel(){
				this.$emit('hiddenModel',0)
			},
			handlReset(type){   //重置
				let newContentList = this.newContentList
				for(let i=0,length=newContentList.length;i<length;i++){
					newContentList[i].isChecked =false
					for(let j=0,len=newContentList[i].content.length;j<len;j++){
						newContentList[i].content[j].isChecked = false
					}
				}
				this.newContentList = newContentList
			},
			
			handlClick(item,ite){    //点击筛选 里面的 各个选项
				let newContentList = this.newContentList
				
				// 操作各个点击到的item设置对应的  isChecked
				for(let i=0,length=newContentList.length;i<length;i++){
					if(newContentList[i].id==item.id){
						for(let j=0,len=newContentList[i].content.length;j<len;j++){
							if(newContentList[i].content[j].id==ite.id){
								newContentList[i].content[j].isChecked = !newContentList[i].content[j].isChecked
							}else{
								newContentList[i].content[j].isChecked = false
							}
						}
					}
				}
				
				// 操作各个点击到的item的父级 设置对应的 isChecked
				for(let i=0,length=newContentList.length;i<length;i++){
					newContentList[i].isChecked =false
					for(let j=0,len=newContentList[i].content.length;j<len;j++){
						if(newContentList[i].content[j].isChecked){
							newContentList[i].isChecked = true
						}
					}
				}
				this.newContentList = newContentList
			},
			
			handlConfim(type){  //点击确定按钮，将选中的数值 传送至 父级页面统一处理数据
				let selectData = {
					type: type,
					newContentList: this.newContentList,
					showModul: false
				}
				this.selectChild(selectData)
			},
			
			handlClickOne(item,type){   //点击第一竖排每一项
				// 操作点击到的 item, 设置其相对应的  isChecked值
				for(let i=0,length=this.newContentList.length;i<length;i++){
					if(this.newContentList[i].id==item.id){
						this.newContentList[i].isChecked = !this.newContentList[i].isChecked
					}else{
						this.newContentList[i].isChecked = false
					}
				}
			},
			
			handlClickChile(item,type){   //点击第二竖排每一项
				let newContentList = this.newContentList
				let showModul = false
				// 操作点击到的 item, 设置其相对应的  isChecked值
				for(let i=0,length = newContentList.length;i<length;i++){
					if(newContentList[i].isChecked){
						// 操作点击到的第二竖排 item, 设置其相对应的 isChecked值
						for(let j=0,leng = newContentList[i].childList.length;j<leng;j++){
							if(newContentList[i].childList[j].id==item.id){
								newContentList[i].childList[j].isChecked = !newContentList[i].childList[j].isChecked
								
									showModul = newContentList[i].childList[j].isChecked
								
							}else{
								newContentList[i].childList[j].isChecked = false
							}
						}
					}else{
						// 操作点击到的第二竖排 item, 清空其他 第二竖排 的选中状态
						for(let j=0,leng = newContentList[i].childList.length;j<leng;j++){
							newContentList[i].childList[j].isChecked = false
							// 当type为1时，操作点击到的第二竖排 item, 清空其他 第三竖排 的选中状态
							if(type==1){
								for(let k=0, le =newContentList[i].childList[j].childList.length;k<le;k++){
									newContentList[i].childList[j].childList[k].isChecked = false
								}
							}
							
						}
					}
				}
				this.newContentList = newContentList
				
				if(item.childList&&item.childList.length>0){
					
				}else{
					if(showModul){
						let selectData = {
							type: type,
							newContentList: newContentList,
							showModul: false
						}
						this.selectChild(selectData)
					}
					
				}
			},
			
			handlClickChileChile(item,type){ //点击第三竖排每一项
				let newContentList = this.newContentList
				let showModul = false
				// 操作点击到的 item, 设置其相对应的  isChecked值
				for(let i=0,length = newContentList.length;i<length;i++){
					if(newContentList[i].isChecked){
						for(let j=0,leng = newContentList[i].childList.length;j<leng;j++){
							if(newContentList[i].childList[j].isChecked){
								// 操作点击到的第三竖排 item, 设置其相对应的 isChecked值
								for(let k=0, le =newContentList[i].childList[j].childList.length;k<le;k++){
									if(newContentList[i].childList[j].childList[k].id==item.id){
										newContentList[i].childList[j].childList[k].isChecked = !newContentList[i].childList[j].childList[k].isChecked
										showModul = newContentList[i].childList[j].childList[k].isChecked
									}else{
										newContentList[i].childList[j].childList[k].isChecked = false
									}
								}
							}else{
								// 操作点击到的第二竖排 item, 清空其他 第三竖排 的选中状态
								for(let k=0, le =newContentList[i].childList[j].childList.length;k<le;k++){
									newContentList[i].childList[j].childList[k].isChecked = false
								}
							}
						}
					}
				}
				this.newContentList = newContentList
				if(showModul){
					let selectData = {
						type: type,
						newContentList: newContentList,
						showModul: false
					}
					this.selectChild(selectData)
				}
				
			},
			
			handClickItem(item,type){ //排序选择
				for(let i=0,length=this.newContentList.length;i<length;i++){
					if(this.newContentList[i].id==item.id){
						this.newContentList[i].isChecked = !item.isChecked
					}else{
						this.newContentList[i].isChecked = false
					}
				}
				let selectData = {
					type: type,
					item: item,
					showModul: false
				}
				if(!item.isChecked){
					selectData.showModul = true
				}
				this.selectChild(selectData)
			},
			
			selectChild(value){  //对每一项处理后的结果进行统一传值
				this.$emit('selectChildTab',value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.select{
		height: 100vh;
		.model{
			width:100%;
			height: 100%;
			background:rgba(0,0,0,0.25);
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
		}
		.select-content{
			width: 100vw;
			height: 254px;
			background:#fff;
			position: relative;
			z-index: 1;
			.select-content-view{
				width: 100%;
				height: 100%;
				display: flex;
				text-align: left;
				.select-content-view-l{
					flex: 1;
				}
				.select-content-view-c{
					flex: 1.75;
					background:rgba(248,248,248,1);
				}
				.select-content-view-r{
					flex: 3.5;
					background:rgba(248,248,248,1);
				}
				.select-content-view-rr{
					flex: 1.75;
					background:rgba(248,248,248,1);
				}
				.scroll-y23{
					height: 100%;
					.scroll-y23-view{
						padding: 4px 10px;
						box-sizing: border-box;
						.scroll-y23-view-item{
							.scroll-y23-view-item-text{
								font-size:28rpx;
								line-height: 28rpx;
								font-weight:400;
								color:rgba(51,51,51,1);
								padding: 20rpx 0;
							}
							.active{
								color:rgba(240,69,49,1);
							}
						}
					}
				}
			}
			.scroll-view1{
				height: 254px;
				.select-content-item-i{
					padding: 0 15px;
					.select-content-item-i-item{
						.select-content-item-i-item-text{
							text-align: left;
							font-size:28rpx;
							font-weight:400;
							line-height:35px;
							color:rgba(51,51,51,1);
						}
						.active{
							color:rgba(240,69,49,1);
						}
					}
				}
			}
			.scroll-view4{
				height: 254px;
				.select-content-item-i{
					display:flex;
					flex-wrap: wrap;
					padding: 5px 10px;
					.select-content-item-i-item{
						width: 25%;
						padding: 15rpx;
						box-sizing: border-box;
						.select-content-item-i-item-text{
							width: 150rpx;
							background:rgba(248,248,248,1);
							border-radius:2px;
							color:rgba(51,51,51,1);
							font-size:24rpx;
							font-weight:400;
							height: 32px;
							line-height:32px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
						}
						.active-border{
							background:rgba(255,255,255,1);
							border:1px solid rgba(240,69,49,1);
							border-radius:2px;
							color:rgba(240,69,49,1);
							box-sizing: border-box;
						}
					}
				}	
			}
			
			.scroll-view5{
				height:193px;
				.select-content-item{
					padding: 5px 10px;
					.select-content-item-title{
						text-align: left;
						padding-left: 5px;
						font-size: 36rpx;
						font-weight:600;
					}
					.select-content-item-i{
						display: flex;
						flex-wrap: wrap;
						.select-content-item-i-item{
							width: 25%;
							padding: 15rpx;
							box-sizing: border-box;
							.select-content-item-i-item-text{
								width: 150rpx;
								background:rgba(248,248,248,1);
								border-radius:2px;
								color:rgba(51,51,51,1);
								font-size:24rpx;
								font-weight:400;
								height: 32px;
								line-height:32px;
								border:1px solid rgba(248,248,248,1);
								border-radius:2px;
								box-sizing: border-box;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 1;
								overflow: hidden;
							}
							.active-border{
								background:rgba(255,255,255,1);
								border:1px solid rgba(240,69,49,1);
								color:rgba(240,69,49,1);
								border-radius:2px;
								box-sizing: border-box;
							}
						}
					}
				}
				
			}
			.handleBtn{
				height: 61px;
				border-top:1px solid rgba(249,249,249,1);
				display: flex;
				justify-content: space-around;
				padding: 10px 15px;
				box-sizing: border-box;
				.reset{
					flex:1;
					font-size:16px;
					font-weight:400;
					line-height: 40px;
					background:rgba(248,248,248,1);
					border-radius:2px;
					color:rgba(51,51,51,1);
					margin-right: 12rpx;
				}
				.confim{
					flex: 1;
					font-size:16px;
					font-weight:400;
					color: #fff;
					line-height: 40px;
					background:rgba(240,69,49,1);
					box-shadow:0px 0px 6px rgba(243,109,97,0.5);
					border-radius:2px;
					margin-left: 12rpx;
				}
			}
			
			
		}
		
		
	}
</style>
