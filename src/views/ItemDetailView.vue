<template>
  <div>
    <h1>Детали товара</h1>
    <p>Название: {{ item.name }}</p>
    <p>Категория: {{ item.category }}</p>
    <p>Статус: {{ item.purchased ? "Куплено" : "Не куплено" }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const item = computed(() =>
  store.state.items.find((i) => i.id === Number(route.params.id))
);
</script>
