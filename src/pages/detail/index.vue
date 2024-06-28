<template>
  <div>
    <div>id：{{ id }}</div>
    <div>otherProp：{{ otherProp }}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "otherProp"],
  beforeRouteEnter(to, from, next) {
    console.log("组件进入导航守卫");
    
    next((vm) => {
      console.log("组件实例：", vm);
    });
  },
  created() {
    console.log('created生命周期')
  },
  mounted() {
    console.log('mounted生命周期')
  },
};
</script>

<style>
</style>