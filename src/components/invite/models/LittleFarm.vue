<template>
  <div class="invite-container">
    <h3>
      Chá de Bebê da
    </h3>
    <h1>Maitê</h1>

    <div>
      <h2>
        Dia 13/09
      </h2>
      <h2>
        Horário 11:00
      </h2>
    </div>

    <div>
      <h2>
        Local: Minha Casa
      </h2>
      <p>Ver localização no mapa</p>
      <h2>
        Sugestão de presente
      </h2>
      <h5>Fraldas Pompers tamanho M</h5>
    </div>

    <p>Tema Fazendinha</p>
    <div class="flex-column">
      Precisando de um convite digital interativo?
      <button @click="goToInvite">
        Veja nossos modelos.
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goToInvite = () => router.push("/invite");
</script>

<style scoped>
.invite-container {
  min-height: 100vh;
  width: 100%;
  background-image: url('@/assets/fazendinha.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex-column{
  display: flex;
  flex-direction: column;
}
</style>