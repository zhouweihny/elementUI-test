<template>
  <el-menu :default-active="this.$route.name" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    
    <template v-for="(item,index) in urljson">
      <el-submenu :index='item.index' :key='index' v-if="item.submenu">
        <template slot="title">{{item.tit}}</template>
        <el-menu-item :key='index' :index='item.index' v-for="(item,index) in item.submenu" @click.native="jumpUrl(item.url)">{{item.tit}}</el-menu-item>
      </el-submenu>

      <el-menu-item :index='item.index' :key='index' v-else @click.native="jumpUrl(item.url)">{{item.tit}}</el-menu-item>
    </template>

  </el-menu>
</template>

<script>
export default {
  name: 'zheader',
  data () {
    return {
      urljson: [
        {
          "url": "page1",
          "index": "page1",
          "tit": "page1"
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
              "url": "javascript:;",
              "index": "22",
              "tit": "选项22"
            },
            {
              "url": "javascript:;",
              "index": "23",
              "tit": "选项23"
            }
          ]
        },
        {
          "url": "page3",
          "index": "page3",
          "tit": "page3"
        },
        {
          "url": "javascript:;",
          "index": "4",
          "tit": "订单管理"
        }
      ],
      cindex: 0,
      zheaderFlag: 1,
      curUrlPage: ''
    }
  },
  mounted () {
    console.log('br3')
  },
  computed: {
    curRouter () {
      return this.urlArr[this.cindex];
    },
    ctit () {
      return this.items[this.cindex];
    }
  },
  methods: {
    jump (index) {
      this.cindex = index;
      this.$router.push(this.urlArr[index]);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
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
.button-wrapper {
  margin-top: 10px;
}
.button-wrapper .mu-button {
  float: left;
}
.J_smenu {
  float: left;
}
</style>
