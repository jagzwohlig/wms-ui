import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
// import User from '../views/User/View-User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  // user
  {
    path: "/viewUser",
    name: "/viewUser",
    component: () => import("../views/User/viewUser.vue")
  },
  {
    path: "/createUser",
    name: "/createUser",
    component: () => import("../views/User/createUser.vue")
  },
  {
    path: "/editUser/:id",
    name: "/editUser",
    component: () => import("../views/User/editUser.vue")
  },
  // company
  {
    path: "/viewCompany",
    name: "/viewCompany",
    component: () => import("../views/Company/viewCompany.vue")
  },
  {
    path: "/createCompany",
    name: "/createCompany",
    component: () => import("../views/Company/createCompany.vue")
  },
  {
    path: "/editCompany/:id",
    name: "/editCompany",
    component: () => import("../views/Company/editCompany.vue")
  },
  // inbound
  {
    path: "/viewInbound",
    name: "/viewInbound",
    component: () => import("../views/Inbound/viewInbound.vue")
  },
  {
    path: "/createInbound",
    name: "/createInbound",
    component: () => import("../views/Inbound/createInbound.vue")
  },
  {
    path: "/editInbound/:id",
    name: "/editInbound",
    component: () => import("../views/Inbound/editInbound.vue")
  },
  // outbound
  {
    path: "/viewOutbound",
    name: "/viewOutbound",
    component: () => import("../views/Outbound/viewOutbound.vue")
  },
  {
    path: "/createOutbound",
    name: "/createOutbound",
    component: () => import("../views/Outbound/createOutbound.vue")
  },
  {
    path: "/editOutbound/:id",
    name: "/editOutbound",
    component: () => import("../views/Outbound/editOutbound.vue")
  },
  // logs
  {
    path: "/viewLogs",
    name: "/viewLogs",
    component: () => import("../views/Logs/viewLog.vue")
  },
  {
    path: "/viewReport",
    name: "/viewReport",
    component: () => import("../views/Report/viewReport.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
