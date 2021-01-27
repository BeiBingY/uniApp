import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		city: '东莞市',      	//选择城市
		statusBarHeight: 0, 	//状态栏高度
	},
	mutations:{
		set_title(state, v){
			state.title = v.title
		},
		set_city(state, v){
			state.city = v
		},
		set_statusBarHeight(state,v){
			state.statusBarHeight = v
		}
	},
	actions:{
		set_title({commit},v){
			commit('set_title',v)
		}
	}
})

export default store