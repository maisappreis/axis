<template>
  <div class="header">
    <img class="logo-img" src="@/assets/images/page/logo.png" alt="logo" @click="goHomePage">
    <font-awesome-icon icon="fa-solid fa-bars" class="icon" @click="showMenu = !showMenu"/>
    <AxisMenu v-if="showMenu" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AxisMenu from "./AxisMenu.vue";

const router = useRouter();
const showMenu = ref<boolean>(false);

const goHomePage = () => router.push("/");
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--light-navy-blue);
  width: 100vw;
  height: 60px;
}

.logo-img {
  width: 90px;
  margin-left: 30px;
  cursor: pointer;
}

.icon {
  color: white;
  zoom: 2.5;
  margin-right: 15px;
  cursor: pointer;
}
</style>