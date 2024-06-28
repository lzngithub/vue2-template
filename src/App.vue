<template>
  <div id="app">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
}
.content {
  height: 100%;
}
</style>
