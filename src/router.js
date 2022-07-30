import Vue from "vue";
import Router from "vue-router";
import login from "./view/login.vue";
import index from "./view/index.vue";
import forgot from "./view/forgot.vue";
import categories from "./view/categories.vue";
import tour from "./view/tour.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: index },
    { path: "/login", component: login },
    { path: "/forgot", component: forgot },
    { path: "/categories/:id", component: categories },
    { path: "/tour/:id", component: tour },
  ],
});
