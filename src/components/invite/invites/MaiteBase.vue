<template>
  <!-- Tema Fazendinha -->
  <div class="invite-container">
    <div class="invite-content">
      <div class="bg bg1"></div>
      <div class="bg bg2"></div>
      <div id="star-container"></div>
      <img src="@/assets/images/childlike/LittleFarm/cloud.png" alt="cloud" class="cloud cloud-one" />
      <img src="@/assets/images/childlike/LittleFarm/cloud.png" alt="cloud" class="cloud cloud-two" />
      <!-- <img src="@/assets/images/childlike/LittleFarm/gift.png" alt="Presente" class="gift gift-1" @click="giftModalIsOpen = !giftModalIsOpen" /> -->
      <img src="@/assets/images/childlike/LittleFarm/gift-2.png" alt="Presente" class="gift gift-2" @click="giftModalIsOpen = !giftModalIsOpen" />

      <h3 class="title">Chá de Bebê da</h3>
      <h1 class="kid-name">Maitê</h1>

      <p style="z-index: 2;">
        Estamos super felizes com a <br>
        chegada da nossa bebê e <br>
        queremos comemorar com você!
      </p>

      <!-- Dia e Horário -->
      <div class="flex-row">
        <h2 class="day circle-text">
          <span>06/12</span>
        </h2>
        <h2 class="time circle-text">
          <span>10:00</span>
        </h2>
      </div>
      <p style="width: 200px; margin: 10px 0 10px 0; font-size: 14px;">
        Confirme sua presenta até o dia 22/11
      </p>

      <!-- Botões -->
      <button class="button"
        @click="localModalIsOpen = !localModalIsOpen">
        Ver local do evento
      </button>
      <button class="button" style="margin-top: 7px;"
        @click="confirmAttendance">
        Confirmar presença
      </button>

      <!-- Modal do local do evento -->
      <div v-if="localModalIsOpen" class="modal-overlay">
        <div class="modal">
          <span class="close" @click="localModalIsOpen = !localModalIsOpen" >
            &times;
          </span>
          <div class="modal-content">
            <h3 style="margin-top: 0;">
              O evento será na NOSSA CASA!
            </h3>
            <p>Rua Libero Joaquim Pierini, s/n</p>
            <p>Bairro Coloninha Zilli</p>
            <p>Criciúma</p>
            <button class="button" @click="openMap">
              Ver no mapa
            </button>
          </div>
        </div>
      </div>

      <!-- Modal do presente -->
      <div v-if="giftModalIsOpen" class="modal-overlay">
        <div class="modal">
          <span class="close" @click="giftModalIsOpen = !giftModalIsOpen" >
            &times;
          </span>
          <div class="modal-content">
            <h4>Sua presença é o nosso maior presente! 🎁</h4>
            <p>Mas caso queira presentear, nossa sugestão é:</p>
            <h4>Fraldas Huggies ou Pampers</h4>
            <h4>(tamanho {{ giftSize }})</h4>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDataUtils } from "@/utils/utils";
import FooterPage from "@/components/invite/FooterPage.vue";

const { makeLittleStars, changeBackground } = useDataUtils();

defineProps<{
  giftSize: string;
}>();

const giftModalIsOpen = ref(false);
const localModalIsOpen = ref(false);

const confirmAttendance = () => {
  // Criação de links para WhatsApp: https://criar.wa.link/
  window.open("https://wa.link/wgbqt8", "_blank");
};

const openMap = () => {
  window.open('https://maps.app.goo.gl/JTsgAvULJwV7GifCA', '_blank');
};

onMounted(() => {
  changeBackground();
  makeLittleStars();
});
</script>

<style scoped>
.bg1 {
  background-image: url('@/assets/images/childlike/LittleFarm/little-farm-1.png');
  opacity: 1;
  z-index: -2;
}

.bg2 {
  background-image: url('@/assets/images/childlike/LittleFarm/little-farm-2.png');
  opacity: 0;
  z-index: -1;
}

.title {
  font-family: 'Dancing Script', Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin: 0;
  z-index: 2;
}

.kid-name {
  font-family: 'Dancing Script', Arial, Helvetica, sans-serif;
  font-size: 80px;
  margin: 0;
  color: rgb(124, 0, 106);
  z-index: 2;
}

.day {
  margin-right: 10px;
}

.time {
  margin-left: 10px;
}

/* Circulos alternando de cor a cada segundo */

.circle-text {
  margin: 0 10px;
  width: 120px;
  height: 60px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  animation: changeColor 2s infinite alternate;
}

@keyframes changeColor {
  0%   { background-color: #ce8ec4; }
  50%  { background-color: #ffb347; }
  100% { background-color: #6ec6ff; }
}

/* Estrelas piscando ao fundo */

.star {
  background: rgb(239, 91, 255);
  box-shadow: 0 0 6px rgba(253, 231, 252, 0.745);
}

/* Botões */

.button {
  padding: 10px;
  background-color: rgb(124, 0, 106);
  color: white;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(174, 80, 160);
}

/* Nuvens se movimentando */

.cloud {
  position: absolute;
  opacity: 0.8;
  z-index: 1;
  pointer-events: none;
}

.cloud-one {
  top: 6%;
  right: 30%;
  width: 250px;
  animation: moveCloudLeft 40s linear infinite alternate;
}

.cloud-two {
  top: 20%;
  left: 30%;
  width: 200px;
  animation: moveCloudRight 40s linear infinite alternate;
}

/* Esquerda → Direita */
@keyframes moveCloudRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(300px);
  }
}

/* Direita → Esquerda */
@keyframes moveCloudLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px);
  }
}

/* Presente */

.gift {
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);  
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gift-1 {
  width: 150px;
}

.gift-2 {
  width: 200px;
}

@keyframes swing {
  0%   { transform: translateX(-50%) rotate(0deg); }
  25%  { transform: translateX(-50%) rotate(15deg); }
  50%  { transform: translateX(-50%) rotate(0deg); }
  75%  { transform: translateX(-50%) rotate(-15deg); }
  100% { transform: translateX(-50%) rotate(0deg); }
}

.gift {
  animation: swing 2s infinite ease-in-out;
}

/* Modal */

.modal {
  position: relative;
  background: rgb(254, 230, 247);
  border-radius: 12px;
  border: 6px solid #ce8ec4;
  padding: 20px;
  text-align: center;
  z-index: 10;
}
</style>
