<template>
  <div class="list-view">
    <h1>Список покупок</h1>
    <!-- Форма для добавления нового товара -->
    <AddItem @addItem="addItem" />

    <!-- Список товаров -->
    <ShoppingList
      :items="items"
      @toggleItem="toggleItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import AddItem from "../components/AddItem.vue";
import ShoppingList from "../components/ShoppingList.vue";

const store = useStore();
const items = computed(() => store.getters.allItems);

const addItem = (item) => store.dispatch("addItem", item);
const toggleItem = (id) => store.dispatch("toggleItem", id);
const deleteItem = (id) => store.dispatch("deleteItem", id);
</script>

<style scoped>
/* Стили для списка покупок */
.list-view {
  font-size: 18px;
}

h1 {
  font-size: 24px;
  color: #4caf50;
  margin-bottom: 20px;
  text-align: center;
}
</style>
