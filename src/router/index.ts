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

    // Temas dos convites de chá revelação
    {
      path: "/invite/pink-blue",
      name: "pink-blue",
      component: () => import("@/components/invite/models/gender-reveal/PinkBlue.vue")
    },
    {
      path: "/invite/boy-or-girl",
      name: "boy-or-girl",
      component: () => import("@/components/invite/models/gender-reveal/BoyOrGirl.vue")
    },

    // Temas dos convites de casamento
    {
      path: "/invite/leaves-green",
      name: "leaves-green",
      component: () => import("@/components/invite/models/marriage/LeavesGreen.vue")
    },
    {
      path: "/invite/soft-rose",
      name: "soft-rose",
      component: () => import("@/components/invite/models/marriage/SoftRose.vue")
    },

    // Temas dos convites corporativos
    {
      path: "/invite/chic-black",
      name: "chic-black",
      component: () => import("@/components/invite/models/corporate/ChicBlack.vue")
    },
    {
      path: "/invite/yellow-bubble",
      name: "yellow-bubble",
      component: () => import("@/components/invite/models/corporate/YellowBubble.vue")
    },

    // ---------------- Convites Ativos ----------------
    {
      path: "/invite/maite-p",
      name: "maite-p",
      component: () => import("@/components/invite/invites/MaiteP.vue")
    },
    {
      path: "/invite/maite-m",
      name: "maite-m",
      component: () => import("@/components/invite/invites/MaiteM.vue")
    },
    {
      path: "/invite/maite-g",
      name: "maite-g",
      component: () => import("@/components/invite/invites/MaiteG.vue")
    },
  ]
});

export default router;