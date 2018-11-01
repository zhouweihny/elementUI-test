export default {
  state:{
    page3: {
      tit: '这是page3的store'
    }
  },
  mutations:{
    page3_changetit(state){//这里的state对应着上面这个state
      console.log(state.page3.tit)
    }
  },
  actions:{
    
  },
  getters:{
    page3_gettit(state){
      return state.page3.tit;
    }
  }
}