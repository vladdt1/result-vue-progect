<template>
  <form class="add-item-form" @submit.prevent="submitItem">
    <input
      class="form-input"
      v-model="name"
      placeholder="Название товара"
      required
    />
    <select class="form-select" v-model="category" required>
      <option value="Продукты">Продукты</option>
      <option value="Бытовые товары">Бытовые товары</option>
    </select>
    <button class="btn-submit" type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const name = ref("");
const category = ref("Продукты");
const emit = defineEmits();

const submitItem = () => {
  emit("addItem", {
    id: Date.now(),
    name: name.value,
    category: category.value,
    purchased: false,
  });
  name.value = "";
  category.value = "Продукты";
};
</script>

<style scoped>
/* Стили формы добавления */
.add-item-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
}

.form-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>
