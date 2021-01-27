<template>
	<view class="tabs">
		<view class="tabs-title" :style="{top:top+'px'}" @touchmove.stop.prevent="moveHandle">
			<view class="tabs-title-item" v-for="(item,index) of tabsData" :key="item.id" v-if="item.isShow" :class="{sortWidth:item.name=='sort'}">
				<view class="tabs-title-item-t" :class="{selectShow:item.isChecked}" @click="topTab(index)">{{item.tittle}}</view>
				<view class="item-model" :style="{top:(top+45)+'px',display:type==item.type?'block':''}" >
					
					<v-select :type="item.type" :contentList="item.contentList" @selectChildTab="selectChildTab" @hiddenModel="hiddenModel"></v-select>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Select from "@/components/select/select.vue"
	export default{
		data(){
			return{
				type: 0,
				newtabsData: []   //初始化一个空的数据容器，用于做操作数据的 中间值
			}
		},
		props:{
			filter:{
				type: Array,
				default: function () {
					return []
				}
			}
		},
		
		components:{
			"v-select":Select
		},
		computed:{
			// 将传过来的值进行页面化,便于操作数据
			tabsData(){
				let tabsData = this.newtabsData.length>0?this.newtabsData:this.filter
				return tabsData
			},
			top(){
				let statusBarHeight = this.$store.state.statusBarHeight
				let top = 0
				// #ifdef APP-PLUS || H5
				top = statusBarHeight + 44
				// #endif
				return top
			},
			// 整理选取的数据
			selectData(){
				let tabsData = this.tabsData
				let selectData = new Object
				
				for(let i=0,length = tabsData.length;i<length;i++){
					if(tabsData[i].isShow){
						selectData[tabsData[i].name] = 	{
															name:tabsData[i].tittle,
															value:{},
															isChecked: false
														}
					}
					
					// 提取类型为 1 和 2 选中的select值
					if(tabsData[i].type==2||tabsData[i].type==1){
						for(let j=0,leng = tabsData[i].contentList.length;j<leng;j++){
							if(tabsData[i].contentList[j].isChecked){
								for(let k=0,len=tabsData[i].contentList[j].childList.length;k<len;k++){
									if(tabsData[i].contentList[j].childList[k].isChecked){
										// 判断是否有三级列表选项
										if(tabsData[i].contentList[j].childList[k].childList&&tabsData[i].contentList[j].childList[k].childList.length>0){
											for(let m=0,le=tabsData[i].contentList[j].childList[k].childList.length;m<le;m++){
												if(tabsData[i].contentList[j].childList[k].childList[m].isChecked){
													selectData[tabsData[i].name].value.id = tabsData[i].contentList[j].id
													selectData[tabsData[i].name].value.tittle = tabsData[i].contentList[j].tittle
													selectData[tabsData[i].name].value.chileId = tabsData[i].contentList[j].childList[k].id
													selectData[tabsData[i].name].value.chileTittle = tabsData[i].contentList[j].childList[k].tittle
													selectData[tabsData[i].name].value.chileChileId = tabsData[i].contentList[j].childList[k].childList[m].id
													selectData[tabsData[i].name].value.chileChileTittle = tabsData[i].contentList[j].childList[k].childList[m].tittle
													selectData[tabsData[i].name].isChecked = true
												}
											}
										}else{
											selectData[tabsData[i].name].value.id = tabsData[i].contentList[j].id
											selectData[tabsData[i].name].value.tittle = tabsData[i].contentList[j].tittle
											selectData[tabsData[i].name].value.chileId = tabsData[i].contentList[j].childList[k].id
											selectData[tabsData[i].name].value.chileTittle = tabsData[i].contentList[j].childList[k].tittle
											selectData[tabsData[i].name].isChecked = true
										}
									}
								}
							}
						}
					}
					
					// 提取类型为 4 选中的select值
					if(tabsData[i].type==4){
						let newValue =[]
						for(let j=0,leng = tabsData[i].contentList.length;j<leng;j++){
							if(tabsData[i].contentList[j].isChecked){
								for(let k=0,len=tabsData[i].contentList[j].content.length;k<len;k++){
									if(tabsData[i].contentList[j].content[k].isChecked){
										newValue.push({
											id: tabsData[i].contentList[j].id,
											tittle: tabsData[i].contentList[j].tittle,
											chileId: tabsData[i].contentList[j].content[k].id,
											chileTittle: tabsData[i].contentList[j].content[k].tittle
										})
									}
								}
								selectData[tabsData[i].name].value = newValue
								selectData[tabsData[i].name].isChecked = true
							}
						}
					}
					
					// 提取类型为 5 或 3 选中的select值 
					if((tabsData[i].type==5&&tabsData[i].isShow)||tabsData[i].type==3){
						for(let j=0,leng = tabsData[i].contentList.length;j<leng;j++){
							if(tabsData[i].contentList[j].isChecked){
								selectData[tabsData[i].name].value.id = tabsData[i].contentList[j].id
								selectData[tabsData[i].name].value.tittle = tabsData[i].contentList[j].tittle
								selectData[tabsData[i].name].isChecked = true
							}
						}
					}
				}
				
				return selectData
			}
		},
		methods:{
			moveHandle(){    //禁止 模态穿透 滑动底下页面内容
				return false
			},
			
			hiddenModel(value){     //蒙层点击事件 
				this.type = value
			},
			
			topTab(index){   //点击头部选项
				if(this.type===this.tabsData[index].type){
					this.type = 0
				}else{
					this.type = this.tabsData[index].type
				}	
			},
			
			selectChildTab(value){  //监听每个项的选择结果，进行统一处理
				let tabData = this.tabsData
				for(let i=0,length=tabData.length;i<length;i++){	
					// 价格的操作 和 区域的操作 之后，数据的整合
					if((value.type==tabData[i].type&&value.type==2)||(value.type==tabData[i].type&&value.type==1)){
						tabData[i].contentList = value.newContentList
					}
					
					// 排序的操作 和 类型的操作 之后，数据的整合
					if((value.type==tabData[i].type&&value.type==5)||(value.type==tabData[i].type&&value.type==3)){ 
						for(let j=0,len =tabData[i].contentList.length;j<len;j++){
							if(tabData[i].contentList[j].id==value.item.id){
								tabData[i].contentList[j].isChecked = value.item.isChecked
							}else{
								tabData[i].contentList[j].isChecked = false
							}
						}
					}
					
					// 筛选的操作之后，数据的整合
					if(value.type==tabData[i].type&&value.type==4){
						tabData[i].contentList = value.newContentList
					}
				}
				this.newtabsData = tabData
			
				if(!value.showModul){    //是否隐藏 模态选项层  type 为0 即隐藏
					this.type = 0
				}
			}
		},
		watch:{
			selectData(){
				// 将是否有选中select的项 设置改变其标题栏目 状态
				let tabsData = this.tabsData
				let selectData = this.selectData
				for(let i=0,length=tabsData.length;i<length;i++){
					if(tabsData[i].isShow){
						tabsData[i].isChecked = selectData[tabsData[i].name].isChecked
					}
					
				}
				this.newtabsData = tabsData
				
				return this.$emit('select',this.selectData)
			}
		},
	
	}
</script>

<style lang="scss" scoped>
	.tabs{
		.tabs-title{
			width: 100%;
			display: flex;
			border-bottom:1px solid rgba(249,249,249,1);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1;
			.tabs-title-item{
				flex: 1;
				text-align: center;
				line-height: 44px;
				position: relative;
				.tabs-title-item-t{
					font-size: 28rpx;
					font-weight:400;
					color:rgba(16,29,55,1);
					background: #fff;
				}
				.selectShow{
					color: rgba(240,69,49,1);
				}
				.item-model{
					width: 100vw;
					height: calc(100vh - 44px);
					position: fixed;
					left: 0;
					top: 45px;
					display: none;
				}
			}
			.sortWidth{
				flex: 0.5;
			}
		}
	}
</style>
