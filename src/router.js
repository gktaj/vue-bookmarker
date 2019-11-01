import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Editbookmark from "./components/Editbookmark.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
      // children: [
      //   {
      //     path: "/add",
      //     name: "add",
      //     component: () =>
      //       import("./components/Addbookmark.vue")
      //   }
      // ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      name: "edit",
      path: "/edit/:id",
      component: Editbookmark
    }
  ]
});
