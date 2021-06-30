<template>
  <div class="login">
    <div class="header">
      <van-nav-bar
        class="app-nav-bar"
        title="登陆"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.mobile"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.code"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登陆</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import {login} from '@/api/user'
import {Toast} from 'vant'
export default {
  data(){
    return{
      user:{
        mobile:"13922222222",
        code:"246810"
      }
    }
  },
  methods:{
    onSubmit(){
      this.$toast.loading({
        message:'登陆中...',
        forbidClick:true,
        duration:0
      })
      login(this.user).then(res=>{
        // 保存token信息
        const userToken = {}
        userToken.token = res.data.data.token
        userToken.refresh_token = res.data.data.refresh_token
        //console.log(userToken)
        this.$store.commit('setUser',userToken)
        this.$toast.success({
          message:'登陆成功',
          icon:'passed',
          duration:1000,
          className:'successToast'
        })
        
        this.$router.back()

      }).catch(err=>{
        this.$toast.fail({
          message:'账号或密码错误'
        })
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" >
.successToast{
  background: #07c160 !important;
}
</style>