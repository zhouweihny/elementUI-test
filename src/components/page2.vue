<template>
  <div class="page2">
    <h1>page2</h1>
    <p>axios get方法，post方法需要后台相应配置</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import http from '../util/http'

export default {
  name: 'page2',
  data () {
    return {
      msg: 'page2'
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      let params = {
        name: 'zw'
      }
      http.get('../static/test.json', {username:''}).then((res)=>{
        if (res.data.code == '0000') {
          console.log('请求成功')
          this.msg = res.data.data[0].customer;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
