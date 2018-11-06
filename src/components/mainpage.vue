<template>
  <div>
    <zheader></zheader>
    <el-row>
      <el-col :span="4">
        <zleftmenu></zleftmenu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
    <zfooter></zfooter>
  </div>
</template>

<script>
import zheader from '@/components/zheader';
import zfooter from '@/components/zfooter';
import zleftmenu from '@/components/zleftmenu';

export default {
  name: 'mainpage',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  watch: {
    '$route.path': function(newVal, oldVal){
      console.log('您刚刚从 '+oldVal+' 出来，进入了 '+newVal+' 页面');
      this.$store.commit('change_zurl', this.$route.name);
    }
  },
  created () {
    /**
     * 注：先执行父的created，然后会执行子的方法，接着才会执行父的mounted
    **/
    this.$store.commit('change_zurl', this.$route.name);
  },
  mounted () {
    
    
  },
  methods: {
    
  },
  components: {zheader, zfooter, zleftmenu}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
