<template>
  <main class="main-container">
    <RouterView />
  </main>
  
</template>

<style>
body, #app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>