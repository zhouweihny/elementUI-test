<template>
  <div class="zelscroll">
  	<el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
			<el-row class="tac">
			  <el-col :span="24">
			    <el-menu
			      :default-active="get_zurl"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose" :default-openeds="openeds">
			      
			      <template v-for="(item,index) in urljson">
			        <el-submenu :index='item.index' :key='index' v-if="item.submenu">
			          <template slot="title">{{item.tit}}</template>
			          <el-menu-item :key='index' :index='item.index' v-for="(item,index) in item.submenu" @click.native="jumpUrl(item.url)">{{item.tit}}</el-menu-item>
			        </el-submenu>

			        <el-menu-item :index='item.index' :key='index' v-else @click.native="jumpUrl(item.url)">{{item.tit}}</el-menu-item>
			      </template>

			    </el-menu>
			  </el-col>
			</el-row>
	  </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'zleftmenu',
  data () {
    return {
      num: 60,
      urljson: [
        {
          "url": "page1",
          "index": "page1",
          "tit": "页面1"
        },
        {
          "url": "javascript:;",
          "index": "2",
          "tit": "我的工作台x",
          "submenu": [
            {
              "url": "page2",
              "index": "page2",
              "tit": "page2"
            },
            {
              "url": "page3",
              "index": "page3",
              "tit": "page3"
            },
            {
              "url": "page4",
              "index": "page4",
              "tit": "page4"
            },
            {
              "url": "javascript:;",
              "index": "2-4",
              "tit": "选项2-4"
            },
            {
              "url": "javascript:;",
              "index": "2-5",
              "tit": "选项2-5"
            },
            {
              "url": "javascript:;",
              "index": "2-6",
              "tit": "选项2-6"
            },
            {
              "url": "javascript:;",
              "index": "2-7",
              "tit": "选项2-7"
            },
            {
              "url": "javascript:;",
              "index": "2-8",
              "tit": "选项2-8"
            },
            {
              "url": "javascript:;",
              "index": "2-9",
              "tit": "选项2-9"
            }
          ]
        },
        {
          "url": "javascript:;",
          "index": "3",
          "tit": "消息中心"
        },
        {
          "url": "javascript:;",
          "index": "4",
          "tit": "订单管理"
        }
      ],
      openeds: ["2"]
    }
  },
  computed: {
    ...mapGetters([
      // 映射 this.get_zurl 为 store.getters.get_zurl
      'get_zurl'
    ])
  },
  mounted () {
    let _h = document.documentElement.clientHeight;
    document.querySelector(".zelscroll").style.height = (_h - 81)+'px';

    this.$nextTick(() =>{

    })
    this.zutil.domClass("el-menu-item").forEach((v,k)=>{
      // v.style.color = "red";
    });

  },
  methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
    jumpUrl(url) {
      if(url && url !== 'javascript:;'){
        this.$router.push(url);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zelscroll {
  height: 300px;
  overflow: hidden;
  width: 100%;
  margin: 10px 0;
  border-right: solid 1px #e6e6e6;
}
.zelscroll .el-menu {
  border: none;
}
</style>
<style>
.zelscroll .el-scrollbar{
  height: 100%;
}
.zelscroll .el-scrollbar__wrap{
  overflow: scroll;
  overflow-x: hidden;
}
</style>
