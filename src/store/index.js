import { createStore } from "vuex";

export default createStore({
  state: {
    // Список покупок
    items: [
      { id: 1, name: "Хлеб", category: "Продукты", purchased: false },
      { id: 2, name: "Молоко", category: "Продукты", purchased: false },
    ],
    // Состояние темной темы
    darkMode: false,
  },
  mutations: {
    // Добавление товара
    addItem(state, item) {
      state.items.push(item);
    },
    // Переключение состояния товара
    toggleItem(state, itemId) {
      const item = state.items.find((i) => i.id === itemId);
      if (item) item.purchased = !item.purchased;
    },
    // Удаление товара
    deleteItem(state, itemId) {
      state.items = state.items.filter((i) => i.id !== itemId);
    },
    // Переключение темы
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    toggleItem({ commit }, itemId) {
      commit("toggleItem", itemId);
    },
    deleteItem({ commit }, itemId) {
      commit("deleteItem", itemId);
    },
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    },
  },
  getters: {
    itemsByCategory: (state) => (category) => {
      return state.items.filter((item) => item.category === category);
    },
    allItems: (state) => state.items,
    isDarkMode: (state) => state.darkMode, // Геттер для состояния темной темы
  },
});
