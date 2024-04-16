<template>
  <tabbar></tabbar>
  <view class="myExtraction">
    <view style="display: flex;align-items: center;height: 70rpx;width: 100%;" :scrollable="false">
        <up-tabs @change="changeTab" :list="tabslist" :current="current" active-color="#F4F4F4" style="width: 100%;" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width:100%;font-width:9900;">
        </up-tabs>
      </view>
  </view>

</template>

<script setup>
import tabbar from '@/components/tabbar.vue'
const tabslist=[{
  name:'我的放入'
},
{
  name:'我的抽取'
}]
</script>

<style scoped>
.myExtraction{
  display: flex;
  flex-direction: column;
}
</style>