<template>
  <view class="goods-list">
    <goods-list :goods="goods" @goodClick="goodsClick"></goods-list>
    <view class="isOver" v-if="overFlag">到底了</view>
  </view>
</template>

<script>
  import goodsList from '../../components/goods-list/goods-list.vue'
  export default {
    components:{
      goodsList
    },
    data() {
      return {
        goods: [],
        pagenum: 1,
        pagesize: 10,
        overFlag: false
      }
    },
    onLoad(){
      this.getGoodsList()
    },
    onReachBottom(){
      if(this.goods.length < this.pagenum*10) return this.overFlag=true
      this.pagenum++
      this.getGoodsList()
    },
    onPullDownRefresh(){
      this.pagenum = 1
      this.goods = []
      this.overFlag = false
      setTimeout(() => {
        this.getGoodsList(() => uni.stopPullDownRefresh())
      }, 1000)
    },
    methods: {
      async getGoodsList(cb){
        const res = await this.$request({
          url: '/goods/search?pagenum=' + this.pagenum + '&pagesize='+this.pagesize
        })
        console.log('object :>> ', res);
        this.goods = [...this.goods, ...res.message.goods]
        cb && cb()
      },
      goodsClick(id){
        uni.navigateTo({
          url: '/pages/news-detail/news-detail?id=' + id
        })
      }
    }
  }
</script>

<style lang="scss">
.goods-list{
  background: #eee;
  .isOver{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 24rpx;
  }
}
</style>
