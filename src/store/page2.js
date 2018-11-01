export default {
  state:{
    page2: {
      tit: '这是page2的store'
    }
  },
  mutations:{
    page2_changetit(state){//这里的state对应着上面这个state
      console.log(state.page2.tit)
    }
  },
  actions:{
    
  },
  getters:{
    page2_gettit(state){
      return state.page2.tit;
    }
  }
}