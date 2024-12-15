<template>
  <ul class="shopping-list">
    <ShoppingItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @toggleItem="$emit('toggleItem', item.id)"
      @deleteItem="$emit('deleteItem', item.id)"
    />
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import ShoppingItem from "./ShoppingItem.vue";

const props = defineProps({
  items: Array,
});
</script>

<style scoped>
/* Стили списка покупок */
.shopping-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
