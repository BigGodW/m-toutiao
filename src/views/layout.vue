<template>
  <div class="layout">
    <h2>layout</h2>
    <router-view></router-view>
    <div class="tabbar">
      <van-tabbar v-model="active" route>
        <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item name="qa" icon="search" to="/qa">问答</van-tabbar-item>
        <van-tabbar-item name="video" icon="play-circle-o" to="/video">视频</van-tabbar-item>
        <van-tabbar-item name="my" icon="manager-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:'home'
    }
  },
  methods:{
    
  }
}
</script>