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
      <div class="page-filters">
        <button>Convites de Aniversário</button>
        <button>Convites de Casamento</button>
        <button>Convites de Chá de Bebê</button>
        <button>Convites de Chá Revelação</button>
        <button>Convites de Eventos Corporativos</button>
      </div>
      <p>Catálogo com todos os convites modelos</p>
      <div class="page-invites">
        <div class="invite-model" @click="goToLittleFarm">
          Fazendinha
        </div>
        <div class="invite-model" @click="goToLittleMermaid">
          Pequena Sereia
        </div>
        <div class="invite-model" @click="goToLittleFarm">
          Fazendinha
        </div>
        <div class="invite-model" @click="goToLittleMermaid">
          Pequena Sereia
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToModels = () => {
  const section = document.getElementById("models-section");
  section?.scrollIntoView({ behavior: "smooth" });
};

const goToLittleFarm = () => router.push("/invite/fazendinha");
const goToLittleMermaid = () => router.push("/invite/pequena-sereia");

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

  background-image: url('@/assets/invite-page.png');
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
  margin: 50px 0;
}

button {
  margin: 10px 20px;
  padding: 10px;
  width: 180px;
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

.page-invites {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 15px 0;
  padding: 0 10px;
}

.invite-model {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 200px;
  margin: 15px;

  background-color: rgb(7, 92, 103);
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.invite-model:hover {
  background-color: rgb(6, 68, 76);
}
</style>