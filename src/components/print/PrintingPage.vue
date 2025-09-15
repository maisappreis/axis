<template>
  <div class="page-container">
    <AxisHeader />
    <div class="page-header">
      <div class="page-title">
        <h1 style="width: 80vw;">Impressões 3D</h1>
        <h3 style="max-width: 400px">
          Infelizmente, no momento, não estamos conseguindo pegar novas demandas de impressão 3D.
          Peço desculpas não poder atender neste momento.
        </h3>
      </div>
      <h3 class="menu">
        SOLICITAR ORÇAMENTO
      </h3>
    </div>
    <AxisFooter />
  </div>
</template>

<script setup lang="ts">
import AxisHeader from "@/components/axis/AxisHeader.vue";
import AxisFooter from "@/components/axis/AxisFooter.vue";
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: white;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.page-header {
  margin-top: 30px;
  width: 100vw;
  height: 100vh;
}

.page-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  margin: 0;
  height: 80vh;

  background-image: url('@/assets/images/3d-print-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.menu {
  background-color: #e4e4e4;
  color: var(--dark-navy-blue);
  width: 100vw;
  padding: 24px 0;
  margin: 0;
  cursor: pointer;
}

.menu:hover {
  background-color: var(--dark-navy-blue);
  color: white;
}
</style>