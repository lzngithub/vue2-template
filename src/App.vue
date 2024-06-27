<template>
  <div>
    <Home></Home>
  </div>
</template>
<script>
import Home from "./pages/Home/index.vue";

export default {
  name: "App",
  components: {
    Home: Home,
  },
  data() {
    return {
      count: 1,
    };
  },
};
</script>
<style></style>
