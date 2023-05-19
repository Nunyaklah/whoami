import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/personality",
      name: "Personality",
      component: () => import("../views/Personality.vue"),
    },
    {
      path: "/results",
      name: "Results",
      component: () => import("../views/Result.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "Sign Up",
      component: () => import("../views/signup.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/signup", "/"];
  const authRequired = !publicPages.includes(to.path);
  

  if (authRequired && !authStore.token) {
    return "/login";
  }
});

export default router;
