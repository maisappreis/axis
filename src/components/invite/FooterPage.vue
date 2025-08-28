<template>
  <div class="footer flex-column">
    <a @click="goToInvite">
      Precisando de um convite digital?
      Veja nossos modelos.
    </a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goToInvite = () => router.push("/invite");
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;

  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 12px;
  background-color: rgb(45, 45, 45);
  color: white;
  cursor: pointer;
}
</style>