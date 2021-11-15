import Vue from "vue";
import Router from "vue-router"; // Router is a Vue plug-in
import Home from "@/components/Home";
import About from "@/components/About";

Vue.use(Router); // tells Vue to use the Router plug-in

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      compontne: About
    }
  ]
});
