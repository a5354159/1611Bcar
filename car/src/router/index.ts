import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: '/deilt',
    //   name: 'deilt',
    // //   // route level code-splitting
    // //   // this generates a separate chunk (about.[hash].js) for this route
    // //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/carDeit.vue')
    // },
    {
      path: "/carDeit",
      name: "carDeit",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/carDeit.vue")
    },
    // {
    //   path: '/car',
    //   name: 'car',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/car.vue')
    // },
    {
      path: "/quotation",
      name: "quotation",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/quotation.vue")
    },
    {
      path: "/type",
      name: "type",
      component: () => import(/* webpackChunkName:"about" */ "@/views/type.vue")
    }
  ]
});
