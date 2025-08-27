import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "axis",
      component: () => import("@/components/axis3D/AxisPage.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/"
    },
    {
      path: "/print",
      name: "print",
      component: () => import("@/components/print/PrintingPage.vue")
    },
    {
      path: "/invite",
      name: "invite",
      component: () => import("@/components/invite/InvitePage.vue")
    },

    // Temas dos convites modelos
    {
      path: "/invite/fazendinha",
      name: "fazendinha",
      component: () => import("@/components/invite/models/LittleFarm.vue")
    },
    {
      path: "/invite/pequena-sereia",
      name: "pequena-sereia",
      component: () => import("@/components/invite/models/LittleMermaid.vue")
    },
  ]
});

export default router;