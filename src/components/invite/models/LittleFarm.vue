<template>
  <!-- Tema Fazendinha -->
  <div class="invite-container">
    <div class="bg bg1"></div>
    <div class="bg bg2"></div>
    <div id="star-container"></div>
    <img src="@/assets/cloud.png" alt="cloud" class="cloud cloud-one" />
    <img src="@/assets/cloud.png" alt="cloud" class="cloud cloud-two" />
    <img src="@/assets/gift.png" alt="Presente" class="gift" @click="giftModalIsOpen = !giftModalIsOpen" />

    <h3 class="title">
      Chá de Bebê da
    </h3>
    <h1 class="kid-name">Maitê</h1>

    <p style="z-index: 2;">
      Estamos super felizes com a <br>
      chegada da nossa bebê e <br>
      queremos comemorar com você!
    </p>

    <div class="flex-row">
      <h2 class="day circle-text">
        <span>13/09</span>
      </h2>
      <h2 class="time circle-text">
        <span>11:00</span>
      </h2>
    </div>

    <div @click="localModalIsOpen = !localModalIsOpen">
      <h3 class="flex-row">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="table-icon"
        />
        Clique para ver o local
      </h3>
      <p>Confirme sua presenta até o dia 01/09</p>
    </div>
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
          <button class="button">
            Ver no mapa
          </button>
        </div>
      </div>
    </div>
    <!--
    <div class="gift">
      <p>Sua presença é o nosso maior presente! 🎁</p>
      <p>Mas caso queira presentear, nossa sugestão é:</p>
      <h4>Fraldas Pompers tamanho M</h4>
      <h4>Fraldas Pompers tamanho M</h4>
    </div>
    -->
    <div v-if="giftModalIsOpen" class="modal-overlay">
      <div class="modal">
        <span class="close" @click="giftModalIsOpen = !giftModalIsOpen" >
          &times;
        </span>
        <div class="modal-content">
          <p>Sua presença é o nosso maior presente! 🎁</p>
          <p>Mas caso queira presentear, nossa sugestão é:</p>
          <h4>Fraldas Pompers tamanho M</h4>
        </div>
      </div>
    </div>

    <div class="footer flex-column">
      <a @click="goToInvite">
        Precisando de um convite digital?
        Veja nossos modelos.
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToInvite = () => router.push("/invite");

const giftModalIsOpen = ref(false);
const localModalIsOpen = ref(false);

const changeBackground = () => {
  const bg1 = document.querySelector(".bg1") as HTMLElement | null;
  const bg2 = document.querySelector(".bg2") as HTMLElement | null;;

  let showingBg1 = true;

  setInterval(() => {
    if(bg1 && bg2) {
      if (showingBg1) {
        bg1.style.opacity = "0";
        bg2.style.opacity = "1";
      } else {
        bg1.style.opacity = "1";
        bg2.style.opacity = "0";
      }
    }
    
    showingBg1 = !showingBg1;
  }, 3000); // Altera a cada 3 segundos
};

const makeLittleStars = () => {
  const container = document.getElementById("star-container");
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // posição aleatória
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    // tamanho aleatório
    const size = Math.random() * 4 + 2;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // delay aleatório da animação
    star.style.animationDelay = (Math.random() * 3) + "s";

    container.appendChild(star);
  }
};

onMounted(() => {
  changeBackground();
  makeLittleStars();
});
</script>

<style>
.invite-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
}

.bg1 {
  background-image: url('@/assets/fazendinha-1.png');
  opacity: 1;
  z-index: -2;
}

.bg2 {
  background-image: url('@/assets/fazendinha-2.png');
  opacity: 0;
  z-index: -1;
}

.flex-row {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
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

.circle-text {
  width: 120px;
  height: 80px;
  border-radius: 50%;
  background: #ce8ec4;
  display: grid;
  place-items: center;
  color: white;
  margin: 5px 10px;
}

/* .gift {
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  border: 4px solid #ce8ec4;
  background-color: white;
} */

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

/* Estrelas piscando ao fundo */

.sky {
  position: relative;
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
}

#star-container {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none; /* não atrapalha clique */
}

.star {
  position: absolute;
  background: rgb(239, 91, 255);
  border-radius: 50%;
  opacity: 0;
  animation: twinkle 2s infinite;
  box-shadow: 0 0 6px rgba(253, 231, 252, 0.745);
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

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
  position: fixed;
  bottom: 150px;
  left: 50%;
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

/* Modal de sugestão do presente */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.modal {
  position: relative;
  background: rgb(254, 230, 247);
  border-radius: 12px;
  /* border: 6px solid #ce8ec4; */
  padding: 20px;
  text-align: center;
  z-index: 10;
}

.modal-content {
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  width: 15vw;
  height: fit-content; 
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}
</style>
