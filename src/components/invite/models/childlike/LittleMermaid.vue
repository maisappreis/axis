<template>
  <!-- Tema Pequena Sereia -->
  <div class="invite-container">
    <div class="invite-content">
      <div class="bg bg1"></div>
      <div class="bg bg2"></div>
      <div id="star-container"></div>
      <img src="@/assets/images/childlike/LittleMermaid/fish-1.png" alt="fish" class="fish fish-one" />
      <img src="@/assets/images/childlike/LittleMermaid/fish-2.png" alt="fish" class="fish fish-two" />
      <img src="@/assets/images/childlike/LittleMermaid/gift.png" alt="Presente" class="gift" @click="giftModalIsOpen = !giftModalIsOpen" />

      <h3 class="title">Aniversário de 1 ano</h3>
      <h1 class="kid-name">Maitê</h1>

      <p class="text">
        Você está convidado para essa aventura de tirar o felogo!
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
      <strong style="width: 200px; margin: 10px 0 20px 0; color: white">
        Confirme sua presenta até o dia 22/11
      </strong>

      <!-- Botões -->
      <div class="button-area">
        <button class="button"
          @click="localModalIsOpen = !localModalIsOpen">
          Ver local do evento
        </button>
        <button class="button" style="margin-top: 7px;"
          @click="confirmModalIsOpen = !confirmModalIsOpen">
          Confirmar presença
        </button>
      </div>
      

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
            <p>Rua Exemplo de Rua Aqui, 123</p>
            <p>Bairro Centro</p>
            <p>Criciúma - SC</p>
            <button class="button" @click="openMap">
              Ver no mapa
            </button>
          </div>
        </div>
      </div>

      <!-- Modal de confirmação de presença -->
      <div v-if="confirmModalIsOpen" class="modal-overlay">
        <div class="modal">
          <span class="close" @click="confirmModalIsOpen = !confirmModalIsOpen" >
            &times;
          </span>
          <div class="modal-content">
            <img src="@/assets/gifs/congratulations.gif" alt="congratulations" width="150" height="150">
            <h3 style="margin-top: 0;">
              Ficamos muito felizes com sua presença!
            </h3>
            <button class="button" @click="confirmAttendance">
              Enviar confirmação por WhatsApp
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
            <h4>Roupas tamanho P</h4>
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

const giftModalIsOpen = ref(false);
const localModalIsOpen = ref(false);
const confirmModalIsOpen = ref(false);

const confirmAttendance = () => {
  window.open("https://wa.link/rgsqsq", "_blank");
};

const openMap = () => {
  window.open('https://maps.app.goo.gl/2YUDsPEY4ieYZr6j7', '_blank');
};

onMounted(() => {
  changeBackground();
  makeLittleStars();
});
</script>

<style scoped>
.bg1 {
  background-image: url('@/assets/images/childlike/LittleMermaid/little-mermaid-1.png');
  opacity: 1;
  z-index: -2;
}

.bg2 {
  background-image: url('@/assets/images/childlike/LittleMermaid/little-mermaid-2.png');
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
  color: rgb(255, 247, 0);
  z-index: 2;
}

.text {
  color: white;
  width: 300px;
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
  border-radius: 40%;
  display: grid;
  place-items: center;
  color: white;
  animation: changeColor 2s infinite alternate;
}

@keyframes changeColor {
  0%   { background-color: rgb(130, 80, 162); }
  50%  { background-color: rgb(231, 88, 55); }
  100% { background-color: rgb(189, 171, 14); }
}

.button-area {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 300px;
}

.button {
  padding: 10px;
  background-color: rgb(231, 88, 55);
  color: white;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(186, 55, 26);
}

/* Peixes se movimentando */

.fish {
  position: absolute;
  opacity: 0.8;
  z-index: 1;
  pointer-events: none;
}

.fish-one {
  top: 10%;
  right: 30%;
  width: 100px;
  animation: moveCloudLeft 40s linear infinite alternate;
}

.fish-two {
  top: 20%;
  left: 30%;
  width: 80px;
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
  bottom: 12vh;
  left: 57%;
  transform: translateX(-50%);
  width: 220px;
  cursor: pointer;
  transition: transform 0.3s ease;
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
  background: rgb(224, 253, 255);
  border-radius: 12px;
  border: 6px solid #0d6b9d;
  padding: 20px;
  text-align: center;
  z-index: 10;
}
</style>
