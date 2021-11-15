import Vue from "vue";
import Router from "vue-router"; // Router is a Vue plug-in
import Home from "@/components/Home";
import About from "@/components/About";
import ViewProfile from "@/components/ViewProfile";

Vue.use(Router); // tells Vue to use the Router plug-in

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/profile/:user_id",
      name: "ViewProfile",
      component: ViewProfile
    }
  ]
});
