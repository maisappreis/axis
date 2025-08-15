<template>
  <h1>Convites Digitais Interativos</h1>
  <h3>
    Convites animados com GIFs, vídeos, música, slides de fotos, dinâmicos, clicáveis, com contável regressiva.
    Dê vida ao seu convite! Personalizamos conforme a sua necessidade.
  </h3>
  <h5>
    convites de aniversário - convites de casamento - convites de eventos corporativos -
    convites de chá de bebê - convites de chá revelação
  </h5>
  <p>Catálogo com todos os convites modelos</p>
  <div>
    <button @click="goToLittleFarm">
      Fazendinha
    </button>
    <button @click="goToLittleMermaid">
      Pequena Sereia
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToLittleFarm = () => router.push("/invite/fazendinha");
const goToLittleMermaid = () => router.push("/invite/pequena-sereia");

</script>