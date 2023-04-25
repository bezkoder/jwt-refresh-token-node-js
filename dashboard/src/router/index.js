import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/users",
        name: "Users",
        component: () => import("@/components/users/List.vue"),
      },
      {
        path: "/users/add",
        name: "AddUsers",
        component: () => import("@/components/users/AddEditUser.vue"),
      },
      // Institutions Related routes
      {
        path: "/institutions",
        name: "Institutions",
        component: () => import("@/components/institutions/List.vue"),
      },
      {
        path: "/institutions/add",
        name: "AddInstitutions",
        component: () => import("@/components/institutions/AddEdit.vue"),
      },
      {
        path: "/modules",
        name: "modules",
        component: () => import("@/components/modules/Index.vue"),
      },
      {
        path: "/modules/add",
        name: "AddModules",
        component: () => import("@/components/modules/CreateModule.vue"),
      },

      {
        path: "/topics/:id",
        name: "topics",
        component: () => import("@/components/modules/TopicsList.vue"),
      },
      {
        path: "/topics/:id/add",
        name: "AddTopics",
        component: () => import("@/components/modules/CreateTopic.vue"),
      },
      {
        path: "/contenteditor",
        name: "ContentEditor",
        component: () => import("@/components/ContentEditor.vue"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/components/test.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  //mode: "history",
  // history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ name: "login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
