import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/service",
    component: () => import("../views/customerService")
  },
  {
    path: "/mine",
    component: () => import("../views/Mine")
  },
  {
    path: "/cards/:card",
    component: () => import("../views/Cards")
  },
  {
    path: "/goods/:id",
    component: () => import("../views/Goods")
  },
  {
    path: "/vip",
    component: () => import("../views/preferVip")
  },
  {
    path: "/home",
    component: () => import("../views/Home")
  },
  {
    path: "/ticketmine/:index",
    component: () => import("../views/ticketMine")
  },
  {
    path: "/error",
    name: "Error",
    component: () => import(/* webpackChunkName: "index" */ "@v/Error")
  },
  {
    path: "/",
    component: () => import("../views/Home")
  }
];

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: routes
});
