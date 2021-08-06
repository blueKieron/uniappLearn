<template>
  <view class="contact">
    <image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
    <view class="info">
      <view @click="phone">联系电话：400-618-9090 (点击拨打)</view>
      <view>地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
    </view>
    <map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        scale: 15,
        longitude: 120.473647,
        latitude: 36.10614,
        markers: [
          {
            longitude: 120.473647,
            latitude: 36.10614,
            iconPath: '../../static/logo.png',
            width: 30,
            height: 30
          }
        ]
      }
    },
    methods: {
      phone(){
        uni.makePhoneCall({
          phoneNumber: '400-618-9090'
        })
      }
    }
  }
</script>

<style lang="scss">
  .contact{
    .img{
      width: 750rpx;
      height: 320rpx;
    }
    .info{
      padding: 10rpx 20rpx;
      font-size: 30rpx;
      view{
        line-height: 50rpx;
        border-bottom: 1px solid #eee;
      }
    }
    .map{
      width: 750rpx;
      height: 750rpx;
    }
  }

</style>
