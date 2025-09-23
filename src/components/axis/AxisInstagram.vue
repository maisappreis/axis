<template>
  <a
    :href="instagramLink"
    class="instagram-fab"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Abrir Instagram para ${label}`"
  >
    <img src="@/assets/images/page/ig.png" alt="WhatsApp" />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: false,
    default: "contact"
  },
  openInApp: { 
    type: Boolean,
    default: true
  }
});

const instagramLink = `https://www.instagram.com/axis3d_impressao3d/`;
</script>

<style scoped>
.instagram-fab {
  position: fixed;
  right: 20px;
  bottom: 120px;
  max-width: 80px;
  max-height: 80px;
  width: 15vw;
  display: inline-grid;
  place-items: center;
  background: #FE0062;
  border-radius: 35%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  z-index: 10000;
  text-decoration: none;
  transition: transform .12s ease, box-shadow .12s ease;
  overflow: hidden;
}

.instagram-fab:hover {
  transform: translateY(-9px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.22);
}

.instagram-fab:active {
  transform: translateY(-1px) scale(.98);
}

.instagram-fab img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  pointer-events: none;
  display: block;
}
</style>
