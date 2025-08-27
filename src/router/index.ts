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
      path: "/invite/little-farm",
      name: "little-farm",
      component: () => import("@/components/invite/models/childlike/LittleFarm.vue")
    },
    {
      path: "/invite/little-mermaid",
      name: "little-mermaid",
      component: () => import("@/components/invite/models/childlike/LittleMermaid.vue")
    },

    // Temas dos convites de casamento
    {
      path: "/invite/leaves-green",
      name: "leaves-green",
      component: () => import("@/components/invite/models/marriage/LeavesGreen.vue")
    },

    // Temas dos convites corporativos
    {
      path: "/invite/chic-black",
      name: "chic-black",
      component: () => import("@/components/invite/models/corporate/ChicBlack.vue")
    },
  ]
});

export default router;