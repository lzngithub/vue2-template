<template>
  <div class="login-box">
    <div>登录页</div>
    <label for="">账号：</label>
    <input type="text" v-focus />
    <div>
      <el-button @click="add" class="login">登录</el-button>
      {{ $store.state.count }}
    </div>
  </div>
</template>

<script>
import { setUserInfo } from "@/utils";
export default {
  name: "Login",
  data() {
    return {
      data: {
        username: "laiang",
        password: "",
      },
    };
  },
  created() {
    console.log('通过插件绑定的项目id：'+this.$projectId)
  },
  methods: {
    async login() {
      let { code, data } = await this.$api.mock.login();
      if (code === 200) {
        setUserInfo(data);
        this.$router.push("/home");
      }
    },
    add() {
      this.$store.commit('increment', {
        count: 10,
      })
    }
  },
};
</script>

<style lang="less">
.login-box {
  .login {
    font-size: 12px;
  }
}
</style>