<template>
  <div class="footer">
    <img class="logo-img" src="@/assets/images/logo.png" alt="logo" @click="goHomePage">
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goHomePage = () => router.push("/");
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333c4d;
  width: 100vw;
  height: 30px;
}

.logo-img {
  width: 50px;
  cursor: pointer;
}
</style>