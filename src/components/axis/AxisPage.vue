<template>
  <div class="app-area">
    <AxisHeader />
    <div style="margin: 70px 0 20px 0;">
      <h3 class="title">
        Nossos Serviços
      </h3>
      <div class="services-area">
        <div v-for="(page, index) in pages" :key="index">
          <div class="services" @click="goToPage(page.link)">
            <span style="margin-bottom: 10px;">{{  page.name }}</span>
            <img class="model-img" :src=page.src :alt=page.alt>
          </div>
        </div>
      </div>
      <hr class="line">
      <h3 class="title">
        Nossos Contatos
      </h3>
      <div class="contact-area">
        <div class="contact" @click="goToInstagram">
          <!-- <font-awesome-icon icon="fa-instagram" /> -->
          Instagram
        </div>
        <div class="contact" @click="goToWhatsApp">WhatsApp</div>
      </div>
    </div>
    <AxisFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AxisHeader from "../axis/AxisHeader.vue";
import AxisFooter from "@/components/axis/AxisFooter.vue";

const router = useRouter();
const pages = ref<{
  name: string, link: string, src: string, alt: string
}[]>([
  {
    name: "Convites Digitais Iterativos", link: "/invite",
    src: new URL("@/assets/images/models/soft-rose.png", import.meta.url).href,
    alt: "Iterative digital invitations"
  },
  {
    name: "Impressão 3D", link: "/print",
    src: new URL("@/assets/images/3d-print.jpg", import.meta.url).href,
    alt: "3D print"
  },
]);

const goToPage = (link: string) => router.push(link);

const goToWhatsApp = () => {
  // Criação de links para WhatsApp: https://criar.wa.link/
  window.open("https://www.cutt.ly/WhatsApp-Axis3D", "_blank");
};

const goToInstagram = () => {
  window.open("https://www.instagram.com/axis3d_impressao3d/", "_blank");
};

</script>
<style scoped>
.title {
  color: var(--dark-navy-blue);
}

.services-area {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  
  margin: 15px 0;
  padding: 0 10px;
}

.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 320px;
  margin: 15px;
  padding: 20px 10px;

  background-color: var(--light-navy-blue);
  color: white;
  border-radius: 10px;
  border: 5px solid var(--light-navy-blue);
  cursor: pointer;
}

.services:hover {
  background-color: transparent;
  color: var(--light-navy-blue);
  font-weight: bold;
}

.model-img {
  height: 100%;
  width: 100%;
}

.line {
  color: var(--light-navy-blue);
  border: none;
  height: 3px;
  width: 50%;
  background-color: #333;
  margin: 20px auto;
  border-radius: 5px;
}

.contact-area {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.contact {
  background-color: var(--light-navy-blue);
  border: 3px solid var(--light-navy-blue);
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 15px;
  cursor: pointer;
}

.contact:hover {
  background-color: transparent;
  color: var(--light-navy-blue);
  font-weight: bold;
}
</style>