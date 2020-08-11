<template>
  <div id="app">
    <h1>小程序</h1>
    <div>
      <i class="toutiao toutiaofenxiang"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="box"></div>
    <!-- 路由出口 -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
.box {
  width: 100px;
  height: 200px;
  background-color: pink;
}
</style>
