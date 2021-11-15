import Vue from "vue";
import Router from "vue-router"; // Router is a Vue plug-in
import HelloWorlHomed from "@/components/Home";

Vue.use(Router); // tells Vue to use the Router plug-in

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
