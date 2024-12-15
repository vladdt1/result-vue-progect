<template>
  <div>
    <h1>Настройки</h1>
    <div class="setting">
      <label>
        <input type="checkbox" v-model="darkMode" @change="toggleTheme" />
        Темная тема
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// Реактивное состояние темы
const darkMode = computed({
  get: () => store.getters.isDarkMode, // Получаем текущую тему
  set: (value) => store.dispatch("toggleDarkMode"), // Изменяем тему
});

// Переключение темы
const toggleTheme = () => {
  const body = document.body;
  if (darkMode.value) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

// Применяем начальную тему при загрузке
toggleTheme();
</script>

<style scoped>
.setting {
  margin: 20px 0;
}

label {
  font-size: 18px;
  cursor: pointer;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
