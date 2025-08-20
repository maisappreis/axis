<template>
  <div class="invite-container">
    <div id="star-container"></div>
    <img src="@/assets/cloud.png" alt="cloud" class="cloud cloud-one" />
    <img src="@/assets/cloud.png" alt="cloud" class="cloud cloud-two" />
     <!-- Tema Fazendinha -->

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

    <div>
      <h2 class="flex-row">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="table-icon"
        />
        Local: Minha Casa
      </h2>
      <p>Confirme sua presenta até o dia 01/09</p>
    </div>
    <div class="gift">
      <h3>
        Sugestão de presente
      </h3>
      <h4>Fraldas Pompers tamanho M</h4>
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
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToInvite = () => router.push("/invite");

onMounted(() => {
  const container = document.getElementById("star-container");

  console.log('container', container)
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
});
</script>

<style>
.invite-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url('@/assets/fazendinha.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.flex-row {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px 0;
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
}

.gift {
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  border: 4px solid #ce8ec4;
  background-color: white;
}

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
</style>
