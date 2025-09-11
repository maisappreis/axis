<template>
  <div class="invite-container">
    <div class="invite-content">
      <div class="bg bg1"></div>
      <div id="star-container"></div>
      <div class="diamonds diamond-one">
        <img src="@/assets/images/corporate/diamond.png" alt="diamond" />
      </div>
      <div class="diamonds diamond-two">
        <img src="@/assets/images/corporate/diamond.png" alt="diamond" />
      </div>

      <p class="title">Junte-se a nós em um</p>
      <h1 class="names">
        Jantar de <br> Celebração
      </h1>
      
      <p class="text">
        Somos gratos a todos os nossos colaboradores que diariámente dão suporte a nossa organização.
        Convidamos você a celebrar os 10 anos do nosso negócio.
      </p>
      <div class="diamond"></div>

      <!-- Dia e Horário -->
      <div class="flex-row">
        <h2 style="margin: 15px; color: white">
          <span>06.12.2026 | 10h00</span>
        </h2>
      </div>
      <span class="flex-column" style="margin: 10px 0; color: rgb(215, 215, 215);">
        <strong style="margin-bottom: 6px;">Restaurante Apollo </strong> 
        <span>Rua Exemplo de Rua Aqui, 123 - Centro, Criciúma -SC</span>
      </span>
      <div class="diamond"></div>
      <p style="max-width: 300px; margin: 15px 0; color: white">
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
          Ver local no mapa
        </button>
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
                <strong style="margin-bottom: 6px;">Restaurante Apollo </strong> 
                <span>Rua Exemplo de Rua Aqui, 123 - Centro, Criciúma -SC</span>
              </span>
              <button class="button" @click="openMap">
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

const { makeLittleStars } = useDataUtils();

const giftModalIsOpen = ref(false);
const localModalIsOpen = ref(false);

const confirmAttendance = () => {
  window.open("https://wa.link/rgsqsq", "_blank");
};

const openMap = () => {
  window.open('https://maps.app.goo.gl/2YUDsPEY4ieYZr6j7', '_blank');
};

onMounted(() => {
  makeLittleStars();
});
</script>

<style scoped>
.invite-content {
  padding-bottom: 40px;
}

.bg1 {
  background-image: url('@/assets/images/corporate/chic-black-1.png');
  opacity: 1;
  z-index: -2;
}

.title {
  color: white;
  margin: 5px 0;
  z-index: 2;
}

.names {
  font-family: 'Dancing Script', Arial, Helvetica, sans-serif;
  font-size: 60px;
  margin: 0 0 10px 0;
  color: white;
  z-index: 2;
}

.diamond {
  width: 10px;
  height: 10px;
  background-color: white;
  transform: rotate(45deg);
}

.text {
  font-size: 13px;
  color: rgb(216, 216, 216);
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
  background-color: rgb(132, 132, 132);
  color: white;
  font-size: 15px;
  border: 0;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(68, 68, 68);
}

/* Losangulos se movimentando */

.diamonds {
  position: absolute;
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
}

/* Direita → Esquerda */
.diamond-one {
  top: 1%;
  right: 30%;
  animation: moveCloudLeft 40s linear infinite alternate;
}

/* Esquerda → Direita */
.diamond-two {
  top: 25%;
  left: 30%;
  animation: moveCloudRight 40s linear infinite alternate;
}

.diamond-one img {
  width: 300px;
}

.diamond-two img {
  width: 400px;
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
  background: rgb(215, 215, 215);
  border-radius: 12px;
  border: 6px solid rgba(114, 114, 114, 0.8);
  padding: 20px;
  text-align: center;
  z-index: 10;
}
</style>
