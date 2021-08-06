<template>
  <view class="news-detail">
    <text class="title">{{detail.goods_name}}</text>
    <view class="info">
      <text>发表时间：{{detail.add_time}}</text>
      <text>数量：{{detail.goods_number}}</text>
    </view>
    <view class="content">
      <rich-text :nodes="detail.goods_introduce"></rich-text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        id: 0,
        detail: {}
      }
    },
    onLoad(options){
      this.id = options.id
      this.getNewsDetail()
    },
    methods: {
      async getNewsDetail(){
        const res = await this.$request({
          url: '/goods/detail?goods_id=' + this.id
        })
        console.log('res :>> ', res);
        this.detail = res.message
      }
    }
  }
</script>

<style lang="scss">
  .news-detail{
    font-size: 30rpx;
    padding: 0 20rpx;
    .title{
      text-align: center;
      width: 710rpx;
      display: block;
      margin: 20rpx 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
