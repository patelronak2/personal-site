import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home")
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About")
  },
  {
    path: "/portfolio",
    name: "Work",
    component: () => import(/* webpackChunkName: "work" */ "../views/Work")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog")
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Resume")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
