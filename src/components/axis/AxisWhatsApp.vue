<template>
  <a
    :href="whatsappLink"
    class="whatsapp-fab"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Abrir WhatsApp para ${label}`"
  >
    <img src="@/assets/images/page/whatsapp.png" alt="WhatsApp" />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  phone: {
    type: String,
    required: false,
    default: "5548996030183"
  },
  text: {
    type: String,
    required: false,
    default: "Olá! Gostaria de mais informações sobre os seus serviços."
  },
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

const whatsappLink = `https://wa.me/${props.phone}?text=${encodeURIComponent(props.text)}`;

</script>

<style scoped>
.whatsapp-fab {
  position: fixed;
  right: 20px;
  bottom: 50px;
  max-width: 80px;
  max-height: 80px;
  width: 15vw;
  display: inline-grid;
  place-items: center;
  background: #2AB200;
  border-radius: 35%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  z-index: 10000;
  text-decoration: none;
  transition: transform .12s ease, box-shadow .12s ease;
  overflow: hidden;
}

.whatsapp-fab:hover {
  transform: translateY(-9px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.22);
}

.whatsapp-fab:active {
  transform: translateY(-1px) scale(.98);
}

.whatsapp-fab img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  pointer-events: none;
  display: block;
}
</style>
