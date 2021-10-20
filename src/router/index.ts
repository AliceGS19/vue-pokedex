import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Pokedex from "../pages/Pokedex.vue";
import FavoritePokemons from "../pages/FavoritePokemons.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/favorites",
    name: "FavoritePokemons",
    component: FavoritePokemons,
  },
  {
    path: "/",
    name: "Pokedex",
    component: Pokedex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
