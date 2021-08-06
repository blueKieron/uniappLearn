<template>
  <view class="goods-list">
    <view class="goods-item" v-for="item in goods" :key="item.goods_id" @click="goodsItemClick(item.goods_id)">
      <image :src="item.goods_big_logo"></image>
      <view class="price">
        <text>¥{{item.goods_price}}</text>
        <text>¥{{item.goods_price}}</text>
      </view>
      <view class="name">
        {{item.goods_name}}
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    props:['goods'],
    methods: {
      goodsItemClick(id){
        // console.log(id)
        this.$emit('goodClick', id)
      }
    }
  }
</script>

<style lang="scss">
  .goods-list{
    padding: 0 15rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
      background: #fff;
      width: 355rpx;
      margin: 10rpx 0;
      padding: 15rpx;
      box-sizing: border-box;
      image{
        width: 80%;
        height: 150px;
        display: block;
        margin: auto;
      }
      .price{
        color: $shop-color;
        font-size: 36rpx;
        margin: 20rpx 0 2rpx;
        text:nth-child(2){
          color: #ccc;
          font-size: 28rpx;
          margin-left: 17rpx;
          text-decoration: line-through;
        }
      }
      .name{
        font-size: 28rpx;
        line-height: 50rpx;
        padding: 10rpx 0 15rpx;
      }
    }
  }
</style>
