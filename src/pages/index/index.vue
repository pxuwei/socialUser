<template>
  <tabbar></tabbar>
  <view class="content">
    <up-swiper
            :list="list1"
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
        <up-button  :ripple="true" size="medium" type="warning" @click="handleCard(1)" text="放入一张男生纸条"></up-button>
        <up-button style="margin: 20rpx 0rpx;"  :ripple="true" size="medium" type="warning" text="抽取一张男生纸条"></up-button>
        <view style="display: flex;width: 100%;">
          <up-button style="width: 50%;margin-right: 5rpx;"  :ripple="true" size="medium" type="warning" text="五连抽"></up-button>
          <up-button style="width: 50%;margin-left: 5rpx;background-color: red"  :ripple="true" size="medium" type="warning" text="十连抽"></up-button>
        </view>
      </view>

      <view class="card_right">
        <up-image style="margin-right: 15rpx;" src="../../static/card/female.png" width="128px" height="64px" ></up-image>
        <span style="color: #1295DA;font-weight: 600;margin: 30rpx 0rpx;">男生纸条选择</span>
        <up-button  :ripple="true" size="medium" type="warning" @click="handleCard(2)" text="放入一张女生纸条"></up-button>
        <up-button style="margin: 20rpx 0rpx;"  :ripple="true" size="medium" type="warning" text="抽取一张女生纸条"></up-button>
        <view style="display: flex;width: 100%;">
          <up-button style="width: 50%;margin-right: 5rpx;"  :ripple="true" size="medium" type="warning" text="五连抽"></up-button>
          <up-button style="width: 50%;margin-left: 5rpx;background-color: red"  :ripple="true" size="medium" type="warning" text="十连抽"></up-button>
        </view>
      </view>
    </view>


		<up-popup :show="putOpen" mode="bottom" round=10 @close="putOpen=false" @open="open">
            <view class="put_popup" >
              <view style="display: flex;align-items: center;">
                <u-avatar size="30" :src="'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'"></u-avatar>
                <span style="margin-left: 10px;font-weight:bold;">张三</span>
              </view>
              <view class="put_content">
                <view>
                  北京市
                </view>
                <view style="width:100%">
                  {{fileList}}
                  <up-textarea v-model="value1" placeholder="请输入内容" >

                  </up-textarea>

                </view>
                <view>
                  <up-upload
                    :fileList="fileList"
                    @afterRead="afterRead"
                    @delete="deletePic"
                    multiple
                    :maxCount="9"
                  ></up-upload>
                </view>
                <view style="display: flex;">
                  <view style="width: 30%;display: flex;justify-content: center;align-items: center;">
                    
                    <up-dropdown>
                      <up-dropdown-item v-model="contactValue" title="我的V号" :options="contactOption"></up-dropdown-item>
                    </up-dropdown>
                    <!-- 我的V号 -->
                  </view>
                  <view style="width: 70%;">
                    <up-textarea v-model="value2" height="30"  placeholder="只有抽到你的人才能看到" >
                    </up-textarea>
                    
                  </view>

                  <u-picker :show="pickerOpen" :columns="['V','Q']"></u-picker>
                </view>
              </view>                
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
		</up-popup>



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
          <view style="margin-left: auto;">
            <up-button style="width: 100rpx;" shape="circle" type="warning" text="抽取"></up-button>

          </view>
          <view>

          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script setup >
  import { reactive, ref } from "vue"
  import tabbar from '@/components/tabbar.vue'
  import { onLoad } from "@dcloudio/uni-app";
  import { GetSquare,PutCard} from "@/api/index.js"
  
  const contactOption = ref([{
    label: '我的V号',
		value: 1,
  },{
    label: '我的Q号',
		value: 0,

  }])
  onLoad((optins)=>{
    
    
    // GetSquare().then((res)=>{
    //   console.log(res)
    // })
    uni.login({
      provider:'weixin',
      success:(res)=>{
        console.log(res)
      },
      fail:(fail)=>{
        console.log(fail)
      },
    })
  })
  const list1 = reactive([
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',  
    'https://cdn.uviewui.com/uview/swiper/swiper3.png', 
  ])

  const putOpen = ref(false)
  const putTitle = ref('')
  const fileList = ref([])
  const contactValue = ref(1)
  const afterRead = ((event)=>{
    fileList.value = event
  })
  const handleCard = ((type)=>{
    putOpen.value = true
    type == 1 ? putTitle.value = '放入1张男生纸条' : putTitle.value = '放入1张女生纸条'
  })
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
    height: 100%;
    overflow: hidden;
    martop: 20rpx;
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
  .put_popup{
    display: flex;
    flex-direction: column;
    padding: 30rpx;
    box-sizing: border-box;
    border-radius: 30rpx;
  }
  .put_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15rpx;
    border:3rpx solid black;
    border-radius: 10rpx;
  }


</style>