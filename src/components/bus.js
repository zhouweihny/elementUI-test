import Vue from 'vue';

// 使用 Event Bus 进行组件间通信
const bus = new Vue();

/**
	import bus from '../common/bus';

  A页面发送事件
  bus.$emit('collapse', this.collapse);

  B页面监听事件
  bus.$on('collapse', msg => {
    this.collapse = msg;
  })
**/

export default bus;