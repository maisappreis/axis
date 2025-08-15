<template>
  <div class="app-area">
    <Axis3D />
    <div>
      <button @click="goToInvite">
        Convites
      </button>
      <button @click="goToPrint">
        Impressão 3D
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Axis3D from "@/components/axis3D/Axis3D.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToInvite = () => router.push("/invite");
const goToPrint = () => router.push("/print");

</script>