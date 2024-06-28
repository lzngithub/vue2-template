<template>
  <div class="home-box">
    <Header></Header>
    <div class="main">
      <Side></Side>
      <div>
        <router-view name="default"></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Side from "@/components/Side.vue";
export default {
  name: "Home",
  components: {
    Header: Header,
    Side: Side,
  },
  data() {
    return {}
  },
};
</script>

<style scoped>
.home-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex-grow: 1;
  display: flex;
}
</style>