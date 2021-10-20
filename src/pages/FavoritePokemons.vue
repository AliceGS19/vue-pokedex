<template>
  <div id="fav-pokemons">
    <h1>Pokémons Favoritos</h1>
    <router-link to="/">Pokedex</router-link>
    <p v-if="favPokemons.length === 0">Não há pokémons favoritos</p>
    <div v-if="favPokemons.length !== 0">
      <PokemonCard
        v-for="poke in favPokemons"
        v-bind:key="poke.id"
        :pokemon="poke"
        :id="poke.id"
      />
    </div>
  </div>
</template>
<style>
#fav-pokemons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 30%;
  margin-left: 30%;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { Ipokemon } from "../types/pokeAPI.interface";
import PokemonCard from "../components/PokemonCard.vue";

const FavoritePokemons = defineComponent({
  components: {
    PokemonCard,
  },
  computed: {
    ...mapState(["favoritePokemons"]),
  },
  data() {
    const favP: Ipokemon[] = [];
    return {
      favPokemons: favP,
    };
  },
  mounted() {
    const favoriteCopy: Ipokemon[] = this.favoritePokemons;
    this.favPokemons = favoriteCopy;
  },
});

export default FavoritePokemons;
</script>
