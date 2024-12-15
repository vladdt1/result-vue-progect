<template>
  <li class="shopping-item">
    <router-link :to="`/item/${item.id}`" class="item-link">{{
      item.name
    }}</router-link>
    <div class="actions">
      <button class="btn-action" @click="$emit('toggleItem')">
        {{ item.purchased ? "Отменить" : "Куплено" }}
      </button>
      <button class="btn-delete" @click="$emit('deleteItem')">Удалить</button>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object,
});
</script>

<style scoped>
/* Стили элемента списка */
.shopping-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* Стили для ссылок */
.item-link {
  font-size: 18px;
  color: #333;
  text-decoration: none;
}

/* Стили при наведении */
.item-link:hover {
  color: #4caf50;
}

/* Стили для темной темы */
body.dark .item-link {
  color: #f9f9f9; /* Белый текст для темной темы */
}

body.dark .item-link:hover {
  color: #81c784; /* Светло-зеленый при наведении */
}

/* Стили для действий */
.actions {
  display: flex;
  gap: 10px;
}

/* Кнопки */
.btn-action {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-action:hover {
  background-color: #45a049;
}

.btn-delete {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: darkred;
}
</style>
