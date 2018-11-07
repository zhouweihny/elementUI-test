<template>
  <div class="page3">
    <h1>page3</h1>

    <el-button type="primary" icon="el-icon-plus" circle @click="addSelect"></el-button>

    <template v-for="(options,index) in optionsd">
      <el-select v-model="hasSelected[index]" clearable placeholder="请选择" @change="changedata" class="zsel">
        <el-option
          v-for="item in options.option"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </template>


    <h1>sass测试</h1>
    <div class="J_sass">
      <p class="J_p">这是P标签</p>
      <div class="J_div">
        <span>这是div 下的 span 标签</span>
      </div>
    </div>

    <p class="J_p" ref="zuiref">这是外面的P.J_p标签，但是他有一个ref</p>

    <p class="J_ps">我使用了公用sass中个 $base_colo 样式，颜色是 #333 的</p>
    <p class="J_pss">我使用了公用sass中个 $base_colo_high 样式，我是红的</p>

  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      msg: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      countNum: 1,
      optionsd: [],
      hasSelected: []
    }
  },
  mounted () {
    this.optionsd.length = 0;

    this.addSelc();

    let $p = this.$refs.zuiref;
    $p.style.color = "#e600ff"
  },
  methods: {
    changedata (val) {
      this.resetdatas();
    },
    addSelc () {
      let attr = {
        ckey: "ckey_"+this.countNum,
        option: this.options
      }
      this.optionsd.push(attr);
      this.countNum++;
    },
    addSelect () {
      this.addSelc();
    },
    resetdatas () {
      this.options.forEach((v, k) => {
        v.disabled = false;
      })
      this.options.forEach((v, k) => {
        v.disabled = this.hasSelected.includes(v.value)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
@import  "../util/base_sass";

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
<style lang="scss" scoped>
.J_sass {
  background: red;
  
  .J_p {
    color: #fff;
  }

  .J_div {
    color: #000;

    span {
      display: block;
      height: 30px;
      line-height: 30px;
      text-align: left;
    }
  }
}
.J_ps {
  color: $base_colo;
}
.J_pss {
  color: $base_colo_high;
}
</style>
