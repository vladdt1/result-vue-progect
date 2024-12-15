import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import ItemDetailView from "../views/ItemDetailView.vue";
import Settings from "../components/Settings.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/list", name: "list", component: ListView },
  { path: "/item/:id", name: "itemDetail", component: ItemDetailView },
  { path: "/settings", name: "settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
