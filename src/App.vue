<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  background-color: var(--gray-light-color);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

.app-area {
  display: flex;
  flex-direction: column;
}
</style>
