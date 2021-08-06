<template>
  <view class="pics">
    <scroll-view class="left" scroll-y>
      <view
        :class="active === index ? 'active' : ''"
        v-for="(item,index) in cates"
        :key='index'
        @click="leftCateClick(index)"
       >
       {{item.name}}
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        cates: [],
        active: 0 
      }
    },
    onLoad(){
      this.getPicsCate()
    },
    methods: {
      async getPicsCate(){
        const res = await this.$request({
          url: '/home/catitems'
        })
        for(let i = 0; i < 4; i++) {
          this.cates.push(...res.message)
        }
      },
      leftCateClick(i){
        this.active = i
      }
    }
  }
</script>

<style lang="scss">
  page{
    height: 100%;
  }
  .pics{
    height: 100%;
    .left{
      width: 200rpx;
      height: 100%;
      border-right: 1px solid #eee;
      view{
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 30rpx;
      }
      .active{
        background: $shop-color;
        color: #fff;
      }
    }
  }

</style>
