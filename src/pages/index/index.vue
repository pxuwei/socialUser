<template>
  <view class="content">
    <up-swiper
            :list="list1"
            @change="change"
            @click="click"
            class="swiper"
    ></up-swiper>
    <view class="signIn_View">
      <view class="love">
        <view style="display: flex;flex-direction: row;align-items: center;">
          <up-image style="margin-right: 15rpx;" src="../../static/icon/love.png" width="32px" height="32px" ></up-image>
          <span>我的爱心</span>
        </view>
        <view>
          <span>0</span>
        </view>
      </view>
      <view class="location">
        <up-image style="margin-right: 15rpx;" src="../../static/icon/map.png" width="32px" height="32px" ></up-image>

        <span>北京市 </span>
      </view>
    </view>
    <view class="card">
      <view class="card_left">
        <up-image style="margin-right: 15rpx;" src="../../static/card/male.png" width="128px" height="64px" ></up-image>
        <span style="color: #1295DA;font-weight: 600;margin: 30rpx 0rpx;">男生纸条选择</span>
        <up-button  :ripple="true" size="medium" type="warning" text="放入一张男生纸条"></up-button>
        <up-button style="margin: 20rpx 0rpx;"  :ripple="true" size="medium" type="warning" text="抽取一张男生纸条"></up-button>
        <view style="display: flex;width: 100%;">
          <up-button style="width: 50%;margin-right: 5rpx;"  :ripple="true" size="medium" type="warning" text="五连抽"></up-button>
          <up-button style="width: 50%;margin-left: 5rpx;background-color: red"  :ripple="true" size="medium" type="warning" text="十连抽"></up-button>
        </view>
      </view>

      <view class="card_right">
        <up-image style="margin-right: 15rpx;" src="../../static/card/female.png" width="128px" height="64px" ></up-image>
        <span style="color: #1295DA;font-weight: 600;margin: 30rpx 0rpx;">男生纸条选择</span>
        <up-button  :ripple="true" size="medium" type="warning" text="放入一张女生纸条"></up-button>
        <up-button style="margin: 20rpx 0rpx;"  :ripple="true" size="medium" type="warning" text="抽取一张女生纸条"></up-button>
        <view style="display: flex;width: 100%;">
          <up-button style="width: 50%;margin-right: 5rpx;"  :ripple="true" size="medium" type="warning" text="五连抽"></up-button>
          <up-button style="width: 50%;margin-left: 5rpx;background-color: red"  :ripple="true" size="medium" type="warning" text="十连抽"></up-button>
        </view>
      </view>
    </view>
    <view class="square_title">
      <span>纸条广场</span>
      <span >筛选</span>
    </view>
    <view class="square_card">
      <view>
        <span style="color: pink">[女生]</span>
        <span>云南省</span>
      </view>
      <view class="square_card_content">
        <view >
          <up-image style="margin-right: 15rpx;" shape="circle" src="../../static/card/male.png" width="52px" height="52px" ></up-image>

        </view>
        <view style="display: flex;flex-direction: column;width: 100%;">
          <span style="font-size:larger;">昵称</span>
          <span style="font-size:large;margin: 5rpx 0rpx;">文案</span>
          <view class="square_card_content_img">
            <up-image style="margin-right: 5rpx;" src="../../static/card/male.png" class="squareImage" width="100px" height="100px" ></up-image>
            <up-image style="margin-right: 5rpx;" src="../../static/card/male.png" class="squareImage" width="100px" height="100px" ></up-image>
            <up-image style="margin-right: 5rpx;" src="../../static/card/male.png" class="squareImage" width="100px" height="100px" ></up-image>
            <up-image style="margin-right: 5rpx;" src="../../static/card/male.png" class="squareImage" width="100px" height="100px" ></up-image>
            <up-image style="margin-right: 5rpx;" src="../../static/card/male.png" class="squareImage" width="100px" height="100px" ></up-image>
          </view>
          <up-button style="width: 100rpx;flex-direction:row-reverse;" shape="circle" type="warning" text="抽取"></up-button>

        </view>

      </view>
    </view>
  </view>
</template>

<script setup >
  import { reactive } from "vue"
  const list1 = reactive([
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png', 
  ])

</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F4;
    padding: 0rpx 20rpx;
    box-sizing: border-box;
  }
  .swiper{
    width:100vw;
  }
  .signIn_View{
    display: flex;
    flex-direction: row;
    width:100%;
    margin-top: 15rpx;
  }
  .love{
    background-color: white;
    border-radius: 20rpx;
    width:50%;
    height: 70rpx;
    padding: 20rpx;
    box-sizing: border-box;
    font-weight: 800;
    line-height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5rpx;
  }
  .location{
    background-color: #AD8F99;
    border-radius: 20rpx;
    width:50%;
    height: 70rpx;
    padding: 20rpx;
    box-sizing: border-box;
    font-weight: 800;
    display: flex;
    align-items: center;
    color: white;
    margin-left: 5rpx;

  }
  .card{
    display: flex;
    flex-direction: row;
    width:100%;
    margin-top: 15rpx;
    border-radius: 20rpx;
  }
  .card_left{
    background-color: #575A6B;
    width: 50%;
    height: 550rpx;
    border-radius: 25rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 5rpx;
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
  }
  .card_right{
    background-color: #575A6B;
    width: 50%;
    height: 550rpx;
    border-radius: 25rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5rpx;
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
  }
  .square_title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    box-sizing: border-box;
    font-weight: 800;
    background-color: white;
    width: 100%;
    margin-top: 25rpx;
    border-radius: 10rpx;

  }
  .square_card{
    width: 100%;
    background-color: white;
    border-radius: 15rpx;
    margin-top: 15rpx;
    padding: 20rpx;
    box-sizing: border-box;
  }
  .square_card_content{
    margin-top: 20rpx;
    display: flex;
    flex-direction: row;
    overflow: hidden
  }
  .square_card_content_img{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100rpx, 1fr));
    grid-auto-flow: row; */
  }


</style>