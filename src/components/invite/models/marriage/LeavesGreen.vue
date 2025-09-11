<template>
  <div class="invite-container">
    <div class="invite-content">
      <div class="bg bg1"></div>
      <div class="bg bg2"></div>
      <div id="star-container"></div>
      <div class="leaf leaf-one">
        <img src="@/assets/images/marriage/leaf-1.png" alt="leaf" />
      </div>
      <div class="leaf leaf-two">
        <img src="@/assets/images/marriage/leaf-2.png" alt="leaf" />
      </div>
      <img src="@/assets/images/marriage/gift.png" alt="Presente" class="gift" @click="giftModalIsOpen = !giftModalIsOpen" />

      <h1 class="names">
        Mariana <br>
        & Rafael
      </h1>
      
      <p class="text">
        Convidam para o seu casamento
      </p>
      <div class="diamond"></div>

      <!-- Dia e Horário -->
      <div class="flex-row">
        <h2 style="margin: 15px;">
          <span>06.12.2026 | 10h00</span>
        </h2>
      </div>
      <div class="diamond"></div>
      <p style="max-width: 300px; margin: 15px 0; color: black">
        Confirme sua presenta até o dia 22/11/2025
      </p> 

      <!-- Botões -->
      <div class="button-area">
        <button class="button" style="margin-top: 7px;"
          @click="confirmAttendance">
          Confirmar presença
        </button>
        <button class="button"
          @click="localModalIsOpen = !localModalIsOpen">
          Ver local do evento
        </button>
      </div>

      <div style="display: flex; max-width: 350px;">
        <h4 style="margin: 15px 15px 5px 15px;">
          Gostaria de nos presentear?
        </h4>
      </div>
      
      <!-- Modal do local do evento -->
      <div v-if="localModalIsOpen" class="modal-overlay">
        <div class="modal">
          <span class="close" @click="localModalIsOpen = !localModalIsOpen" >
            &times;
          </span>
          <div class="modal-content">
            <p class="flex-column align-center">
              <span class="flex-column" style="margin: 5px;">
                <strong style="margin-bottom: 6px;">CERIMÔNIA: </strong> 
                <span>Igreja Nosssa Senhora, 123 - Centro, Criciúma -SC</span>
              </span>
              <button class="button" @click="openMap">
                Ver no mapa
              </button>
              <span class="flex-column" style="margin: 15px;">
                <strong style="margin-bottom: 6px;">RECEPÇÃO:</strong> Centro de Eventos Luz
                Rodovia das Amoras, 1000
              </span>
              <button class="button">
                Ver no mapa
              </button>
            </p>
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
            <p>Mas caso queira nos dar um mimo, poderia ser via PIX:</p>
            <h4>CHAVE_PIX_AQUI</h4>
            <button class="button">
              Copiar chave PIX
            </button>
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
  background-image: url('@/assets/images/marriage/leaves-green-1.png');
  opacity: 1;
  z-index: -2;
}

.bg2 {
  background-image: url('@/assets/images/marriage/leaves-green-2.png');
  opacity: 0;
  z-index: -1;
}

.names {
  font-family: 'Dancing Script', Arial, Helvetica, sans-serif;
  font-size: 60px;
  margin: 0;
  color: rgb(140, 140, 88);
  z-index: 2;
}

.diamond {
  width: 10px;
  height: 10px;
  background-color: rgb(140, 140, 88);
  transform: rotate(45deg);
}

.text {
  color: black;
  width: 300px;
  z-index: 2;
}

.button-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.button {
  margin: 10px 0;
  padding: 10px;
  width: 220px;
  background-color: rgb(140, 140, 88);
  color: white;
  font-size: 15px;
  border: 0;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(106, 106, 67);
}

/* Folhas se movimentando */

.leaf {
  position: absolute;
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
}

/* Folha indo da direita para a esquerda */
.leaf-one {
  top: 10%;
  right: 30%;
  animation: moveCloudLeft 40s linear infinite alternate;
}

/* Folha indo da esquerda para a direita */
.leaf-two {
  top: 20%;
  left: 30%;
  animation: moveCloudRight 40s linear infinite alternate;
}

.leaf-one img {
  width: 80px;
  animation: spin 20s linear infinite;
}

.leaf-two img {
  width: 60px;
  animation: spin 20s linear infinite;
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

/* Gira 360° */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Presente */

.gift {
  position: absolute;
  bottom: 10vh;
  left: 57%;
  transform: translateX(-50%);
  width: 150px;
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
  background: rgb(235, 225, 223);
  border-radius: 12px;
  border: 6px solid rgb(106, 106, 67, 0.8);
  padding: 20px;
  text-align: center;
  z-index: 10;
}
</style>
