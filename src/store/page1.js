// 注意不能与其他store modules 重名
export default {
  state:{
    page1: {
      tit: '这是page1的store'
    }
  },
  mutations:{
    page1_changetit(state){//这里的state对应着上面这个state
      console.log(state.page1.tit)
    }
  },
  actions:{
  	
  },
  getters:{
    page1_gettit(state){
      return state.page1.tit;
    }
  }
}