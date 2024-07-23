<template>
    <up-sticky bgColor="#F4F4F4" customNavHeight="0" >
        <view style="display: flex;align-items: center;height: 70rpx;width: 100%;" :scrollable="false">
        <up-tabs @change="changeTab" :list="tabslist" :current="current" active-color="#D01F25" style="width: 100%;" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width:100%;font-width:9900;"></up-tabs>

        </view>
    </up-sticky>
</template>

<script setup>
import { uni } from '@dcloudio/uni-h5';
import { onShow, onHide,onLoad } from "@dcloudio/uni-app"
import { ref, reactive, onMounted } from 'vue';
let current = ref(1);
onLoad((options)=>{
    current.value = options.current || 1;
})
onShow(()=>{
}) 
const tabslist = reactive([
    {
      name: '我抽的',
    },
    {
      name: '抽对象',
    },
    {
      name: '开分店',
    },
  ])
const changeTab =(e)=>{
    switch (e.index) {
        case 0:
            uni.navigateTo({
                url: '/pages/myExtraction/index?current=0'
            })
            break;
        case 1:
            uni.navigateTo({
                url: '/pages/index/index?current=1'
            })
            break;
        case 2:
            uni.navigateTo({
                url: '/pages/openShop/index?current=2'
            })
            break;
        default:
            break;
    }
}
</script>
<style scoped>
</style>