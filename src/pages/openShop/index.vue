<template>
  <tabbar></tabbar>
  <view class="openShop">
    <span>开通店主吧，自己做老板</span>
    <span style="margin: 20rpx 0rpx;">轻松<span style="color: red;">日赚300＋</span><span style="color: red;">提现秒到</span></span>
    <span>开通店主吧，自己做老板</span>
    <up-button type="primary" text="开通分店" style="margin: 20rpx;border-radius: 15rpx;width: 80%;"></up-button>
  </view>
</template>

<script setup>
import tabbar from '@/components/tabbar.vue'

</script>

<style scoped>
.openShop{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
}
</style>