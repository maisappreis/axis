<template>
  <div class="menu">
    <div class="option" @click="goToPage('/invite')">Convites Digitais</div>
    <div class="option" @click="goToPage('/print')">Impressão 3D</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goToPage = (link: string) => router.push(link);
</script>


<style scoped>
.menu {
  position: fixed;
  top: 60px;
  right: 0;

  width: 250px;
  height: fit-content;
}

.option {
  padding: 30px;
  text-align: left;
  cursor: pointer;
  background-color: var(--light-navy-blue);
  color: white;
}

.option:hover {
  background-color: var(--dark-navy-blue);
}
</style>