<template>
  <div class="my">
    <div class="header">
      <van-cell-group 
        center
        :border='false'
        >
        <van-cell center :border='false'>
        <van-button>编辑信息</van-button>
        <template #title>
          <van-image 
            round
            fit='cover'
            width='80px'
            height="80px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          ></van-image>
        </template>
      </van-cell>
      <van-cell>
        <van-grid :border='false'>
          <van-grid-item>
            <template #icon>123</template>
            <template #text>头条</template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>58</template>
            <template #text>关注</template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>895</template>
            <template #text>粉丝</template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>8944</template>
            <template #text>获赞</template>
          </van-grid-item>
        </van-grid>
      </van-cell>
      </van-cell-group>
    </div>
    <div>
      <van-grid :column-num="2" :border='false'>
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item icon="eye-o" text="历史" />
      </van-grid>
    </div>
    <van-cell-group>
      <van-cell title="消息通知" is-link />
      <van-cell title="小智同学" is-link />
    </van-cell-group>
    <div class="but">
      <van-button plain block type="info">退出登录</van-button>
    </div>
  </div>
</template>

<style lang="less">
.header{
  .van-cell-group{
  padding: 50px 0 0 0;
}
}
.but{
  padding: 10px;
}
</style>