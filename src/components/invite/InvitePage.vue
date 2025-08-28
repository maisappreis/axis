<template>
  <div class="page-container">
    <div class="page-header">
      <div class="page-title">
        <h1 style="width: 80vw;">Convites Digitais Interativos</h1>
        <h3 style="max-width: 400px">
          Convites animados com GIFs, vídeos, música, slides de fotos,
          dinâmicos, clicáveis, com contável regressiva. <br>
          Dê vida ao seu convite!
        </h3>
      </div>
      <h3 class="menu" @click="scrollToModels">
        CATÁLOGO
      </h3>
    </div>
    
    <div id="models-section" style="height: 90vh;">
      <h1 style="width: 100vw;">Nossos modelos</h1>
      <span>Filtre por:</span>
      <div class="page-filters">
        <button
          :class="{ active: activeFilters.includes('birthday') }"
          @click="toggleFilter('birthday')">
          Convites de Aniversário
        </button>
        <button 
          :class="{ active: activeFilters.includes('marriage') }"
          @click="toggleFilter('marriage')">
          Convites de Casamento
        </button>
        <button 
          :class="{ active: activeFilters.includes('gender-reveal') }"
          @click="toggleFilter('gender-reveal')">
          Convites de Chá Revelação
        </button>
        <button 
          :class="{ active: activeFilters.includes('corporate') }"
          @click="toggleFilter('corporate')">
          Convites de Eventos Corporativos
        </button>
        <button 
          :class="{ active: activeFilters.includes('childlike') }"
          @click="toggleFilter('childlike')"> 
          Convites Infantis
        </button>
      </div>
      <p>Escolha o tema do seu convite!</p>
      <div class="page-invites">
        <div v-for="(invite, index) in filteredInvites" :key="index">
          <div class="invite-model" @click="goToInvite(invite.link)">
            <span style="margin-bottom: 10px;">{{  invite.name }}</span>
            <img class="model-img" :src=invite.src :alt=invite.alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

interface Invite {
  name: string,
  type: string,
  src: string,
  alt: string,
  link: string
}

const router = useRouter();
const invites = ref<Invite[]>([
  { name: "Fazendinha", type: "childlike", src: new URL("@/assets/images/models/little-farm.png", import.meta.url).href, alt: "little farm invite", link: "/invite/little-farm" },
  { name: "Pequena Sereia", type: "childlike", src: new URL("@/assets/images/models/little-mermaid.png", import.meta.url).href, alt: "little marmaid invite", link: "/invite/little-mermaid" },
  { name: "Leaves Green", type: "marriage", src: new URL("@/assets/images/models/leaves-green.png", import.meta.url).href, alt: "marriage invite", link: "/invite/leaves-green" },
  { name: "Chic Black", type: "corporate", src: new URL("@/assets/images/models/chic-black.png", import.meta.url).href, alt: "corporate invite", link: "/invite/chic-black" },
  { name: "Soft Rose", type: "marriage", src: new URL("@/assets/images/models/soft-rose.png", import.meta.url).href, alt: "marriage invite", link: "/invite/soft-rose" },
]);
// const invites = ref<Invite[]>([
//   { name: "Fazendinha", type: "childlike", src: "/axis-3D/models/little-farm.png", alt: "little farm invite", link: "/invite/little-farm" },
//   { name: "Pequena Sereia", type: "childlike", src: "/axis-3D/models/little-mermaid.png", alt: "little marmaid invite", link: "/invite/little-mermaid" },
//   { name: "Leaves Green", type: "marriage", src: "/axis-3D/models/leaves-green.png", alt: "marriage invite", link: "/invite/leaves-green" },
//   { name: "Chic Black", type: "corporate", src: "/axis-3D/models/chic-black.png", alt: "corporate invite", link: "/invite/chic-black" },
//   { name: "Soft Rose", type: "marriage", src: "/axis-3D/models/soft-rose.png", alt: "marriage invite", link: "/invite/soft-rose" },
// ]);
const activeFilters = ref<string[]>([]);

const scrollToModels = () => {
  const section = document.getElementById("models-section");
  section?.scrollIntoView({ behavior: "smooth" });
};

const goToInvite = (link: string) => router.push(link);

const toggleFilter = (type: string) => {
  if (activeFilters.value.includes(type)) {
    activeFilters.value = activeFilters.value.filter(f => f !== type);
  } else {
    activeFilters.value.push(type);
  }
};

const filteredInvites = computed(() => {
  if (activeFilters.value.length === 0) return invites.value;
  return invites.value.filter(invite => activeFilters.value.includes(invite.type));
});

</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: black;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.page-header {
  width: 100vw;
  height: 100vh;
}

.page-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;

  margin: 0;
  height: 80vh;

  background-image: url('@/assets/images/page/invite-page.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.menu {
  background-color: rgb(7, 92, 103);
  color: white;
  width: 100vw;
  padding: 30px 0;
  margin: 0;
  cursor: pointer;
}

.menu:hover {
  background-color: rgb(6, 68, 76);
}

.page-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 20px 0 50px 0;
}

button {
  margin: 3px 20px;
  padding: 10px;
  width: 250px;
  background-color: rgb(7, 92, 103);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(6, 68, 76);
}

button.active {
  border: 6px solid rgb(7, 92, 103);
  background-color: transparent;
  color: rgb(7, 92, 103);
  font-weight: bold;
}

.page-invites {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  
  margin: 15px 0;
  padding: 0 10px;
}

.invite-model {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 320px;
  margin: 15px;
  padding: 20px 10px;

  background-color: rgb(7, 92, 103);
  color: white;
  border-radius: 10px;
  border: 5px solid rgb(7, 92, 103);
  cursor: pointer;
}

.invite-model:hover {
  background-color: transparent;
  color: rgb(7, 92, 103);
  font-weight: bold;
}

.model-img {
  height: 100%;
  width: 100%;
}
</style>