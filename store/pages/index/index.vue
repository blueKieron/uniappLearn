<template>
	<view class="home">
		<swiper indicator-dots circular>
      <swiper-item v-for="item in swipers" :key="item.goods_id">
        <image :src="item.image_src"></image>
      </swiper-item>
    </swiper>
    <view class="nav">
      <view class="nav-item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
        <view :class="item.icon"></view>
        <text>{{item.title}}</text>
      </view>
    </view>
    <view class="hot-goods">
      <view class="tit">推荐商品</view>
      <goods-list :goods="goods" @goodClick="goodsClick"></goods-list>
    </view>
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
				swipers: [],
        goods: [],
        navs: [
          {
            icon: 'iconfont icon-ziyuan',
            title: '超市',
            path: '/pages/goods/goods'
          },
          {
            icon: 'iconfont icon-guanyuwomen',
            title: '联系我们',
            path: '/pages/contact/contact'
          },
          {
            icon: 'iconfont icon-tupian',
            title: '社区图片',
            path: '/pages/pics/pics'
          },
          {
            icon: 'iconfont icon-shipin',
            title: '学习视频',
            path: '/pages/videos/videos'
          },
        ]
			}
		},
		onLoad() {
      this.getSwipers()
      this.getHotGoods()
		},
		methods: {
      async getSwipers(){
        const res = await this.$request({
          url: '/home/swiperdata'
        })
        // console.log(res)
        this.swipers = res.message
      },
      async getHotGoods(){
        const res = await this.$request({
          url: '/goods/search'
        })
        // console.log('object :>> ', res);
        this.goods = res.message.goods
      },
      navItemClick(url){
        uni.navigateTo({
          url
        })
      },
      goodsClick(id){
        uni.navigateTo({
          url: '/pages/goods-detail/goods-detail?id=' + id
        })
      }
		}
	}
</script>

<style lang="scss">
	.home{
    swiper{
      width: 750rpx;
      height: 380rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .nav{
      display: flex;
      .nav-item{
        width: 25%;
        text-align: center;
        view{
          width: 120rpx;
          height: 120rpx;
          background: $shop-color;
          border-radius: 60rpx;
          margin: 10px auto;
          line-height: 120rpx;
          color: #fff;
          font-size: 46rpx;
        }
        text{
          font-size: 30rpx;
        }
      }
    }
    .hot-goods{
      background: #eee;
      overflow: hidden;
      margin-top: 10px;
      .tit{
        height: 50px;
        line-height: 50px;
        color: $shop-color;
        text-align: center;
        letter-spacing: 20px;
        background: #fff;
        margin: 7rpx 0;
      }
    }
  }
</style>
