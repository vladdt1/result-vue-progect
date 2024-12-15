<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/list" class="nav-link">Список покупок</router-link>
      <router-link to="/settings" class="nav-link">Настройки</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
/* Стили навигации */
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px 0;
  background-color: #4caf50;
  border-radius: 5px;
}

body.dark nav {
  background-color: #2e7d32;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
