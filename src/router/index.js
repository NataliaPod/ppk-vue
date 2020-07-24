import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Specs from "../pages/Specs.vue";
import Teachers from "../pages/Teachers.vue";
import Blog from "../pages/Blog.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Головна",
    component: Home,
  },
  {
    path: "/Blog",
    name: "Блог",
    component: Blog,
  },
  {
    path: "/vykladachi",
    name: "Викладачі",
    component: Teachers,
  },
  {
    path: "/spetcіalіzatsii",
    name: "Всі спеціалізації",
    component: Specs,
  },
];

const dynamicRoutes = [
  {
    path: "/blog/:slug",
    name: "Стаття",
    component: () => import("../pages/SinglePost.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [...routes, ...dynamicRoutes],
});

export default router;
