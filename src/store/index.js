import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import S_page1 from '../store/page1.js';//引入某个store对象
import S_page2 from '../store/page2.js';
import S_page3 from '../store/page3.js';

export default new vuex.Store({
	state:{
	  main: {
	    tit: '这是main的store',
	    zheaderFlag: 1,
	    curUrlPage: ''
	  }
	},
	mutations:{
	  main_changetit(state){//这里的state对应着上面这个state
	    console.log(state.main.tit)
	  },
	  main_changeheaderflag(state, val){
	  	state.main.zheaderFlag = val;
	  },
	  main_getcurUrlPage(state, val){
	  	state.main.curUrlPage = val;
	  }
	},
	actions:{
		
	},
	getters:{
	  main_gettit(state){
	    return state.main.tit;
	  },
	  main_getheaderflag(state){
	  	return state.main.zheaderFlag;
	  },
	  main_getcurUrlPage(state){
	  	return state.main.curUrlPage;
	  }
	},
  modules: {
    S_page1,
    S_page2,
    S_page3
  }
})