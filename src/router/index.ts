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

    // Temas dos convites infantis
    {
      path: "/invite/fazendinha",
      name: "fazendinha",
      component: () => import("@/components/invite/models/childlike/LittleFarm.vue")
    },
    {
      path: "/invite/pequena-sereia",
      name: "pequena-sereia",
      component: () => import("@/components/invite/models/childlike/LittleMermaid.vue")
    },

    // Temas dos convites de casamento
    {
      path: "/invite/leaves-green",
      name: "leaves-green",
      component: () => import("@/components/invite/models/marriage/LeavesGreen.vue")
    },
  ]
});

export default router;