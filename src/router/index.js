import VueRouter from "vue-router";
import Vue from "vue";
import { Message } from "element-ui";
import { isLogin, getUserInfo } from "@/utils";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "main",
      alias: "/main",
    },
    {
      path: "/login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/detail/:id",
      component: () => import("@/pages/detail/index.vue"),
      props: (route) => ({
        ...route.params,
        otherProp: "otherProp",
      }),
      meta: {
        isAuth: true, // 该页面需要登录
      },
    },
    {
      path: "/home",
      component: () => import("@/pages/Home.vue"),
      children: [
        {
          path: "view",
          components: {
            a: () => import("@/pages/A.vue"),
            b: () => import("@/pages/B.vue"),
          },
        },
        {
          path: "foo",
          component: () => import("@/pages/foo/index.vue"),
        },
      ],
      meta: {
        isAuth: true,
      },
    },
    {
      path: "/about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "*",
      component: () => import("../pages/404.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to.matched, getUserInfo(), isLogin());
  if (to.matched.some((route) => route.meta.isAuth)) {
    if (isLogin()) {
      next();
    } else {
      Message({
        message: "请先登录",
        type: "warning",
      });
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
