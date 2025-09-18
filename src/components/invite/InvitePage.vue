<template>
  <div class="page-container">
    <AxisHeader />
    <div class="page-header">
      <div class="page-title">
        <h1 style="width: 80vw;">Convites Digitais Interativos</h1>
        <h3 style="max-width: 400px">
          Convites animados, com fotos,
          dinâmicos, clicáveis, com contável regressiva. <br>
          Dê vida ao seu convite!
        </h3>
        <!-- <h3 style="max-width: 400px">
          Convites animados com GIFs, vídeos, música, slides de fotos,
          dinâmicos, clicáveis, com contável regressiva. <br>
          Dê vida ao seu convite!
        </h3> -->
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
          :class="{ active: activeFilters.includes('childlike') }"
          @click="toggleFilter('childlike')"> 
          Convites Infantis
        </button>
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
        
      </div>
      <h3>Escolha o seu tema favorito!</h3>
      <p style="margin: 5px 15px;">
        Após escolher o tema, personalizamos o convite para o seu evento.
      </p>
      <p style="margin: 0 15px;">
        Não gostou de nenhum? Criamos algo inteiramente novo, me chame no WhatsApp.
      </p>
      <div class="page-invites">
        <div v-for="(invite, index) in filteredInvites" :key="index">
          <div class="invite-model" @click="goToInvite(invite.link)">
            <span style="margin-bottom: 10px;">{{  invite.name }}</span>
            <img class="model-img" :src=invite.src :alt=invite.alt>
          </div>
        </div>
      </div>
    </div>
    <AxisFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { invites } from "@/utils/constants";
import AxisHeader from "../axis/AxisHeader.vue";
import AxisFooter from "@/components/axis/AxisFooter.vue";

const router = useRouter();
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
  let result = invites;

  if (activeFilters.value.length > 0) {
    result = invites.filter(invite =>
      invite.type.some(t => activeFilters.value.includes(t))
    );
  }

  return [...result].sort((a, b) => a.name.localeCompare(b.name));
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
  background-color: var(--light-gray);
}

.page-header {
  margin-top: 30px;
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
  background-color: var(--light-navy-blue);
  color: white;
  width: 100vw;
  padding: 24px 0;
  margin: 0;
  cursor: pointer;
}

.menu:hover {
  background-color: var(--dark-navy-blue);
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
  background-color: var(--light-navy-blue);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--dark-navy-blue);
}

button.active {
  border: 6px solid var(--light-navy-blue);
  background-color: transparent;
  color: var(--light-navy-blue);
  font-weight: bold;
}

.page-invites {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  
  padding: 10px 10px 30px 10px;
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

  background-color: var(--light-navy-blue);
  color: white;
  border-radius: 10px;
  border: 5px solid var(--light-navy-blue);
  cursor: pointer;
}

.invite-model:hover {
  background-color: transparent;
  color: var(--light-navy-blue);
  font-weight: bold;
}

.model-img {
  height: 100%;
  width: 100%;
}
</style>