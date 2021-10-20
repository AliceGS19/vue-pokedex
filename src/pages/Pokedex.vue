<template>
  <div id="pokedex">
    <h1>Pokedex</h1>
    <router-link to="/favorites">Pokemons favoritos</router-link>
    <form id="searchContainer">
      <label id="searchBar" for="search">
        Pesquise um pokémon por ID:
        <input
          v-model="searchBar"
          placeholder="digite aqui"
          id="search"
          type="number"
        />
      </label>
      <button type="button" @click.prevent="handleSearch" id="searching">
        Pesquisar!
      </button>
    </form>
    <h2 v-if="loading === true">Loading...</h2>
    <PokemonCard :pokemon="pokemon" :id="pokemon.id" v-else />
    <div id="buttons">
      <button
        type="button"
        @click.prevent="previous"
        id="button"
        :disabled="prev == 0"
      >
        Pokémon anterior
      </button>
      <button type="button" @click.prevent="surprise" id="button">
        Me surpreenda
      </button>
      <button
        type="button"
        @click.prevent="next"
        id="button"
        :disabled="nextt == 0"
      >
        Pokémon posterior
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getPokemonApi } from "../services/api";
import PokemonCard from "../components/PokemonCard.vue";
import { useStore } from "vuex";

const Pokedex = defineComponent({
  setup() {
    const store = useStore();
    const favoritePokemons = ref(store.state);
    return {
      favoritePokemons,
    };
  },
  components: {
    PokemonCard,
  },
  data() {
    return {
      searchBar: 0,
      loading: true,
      isFavorite: false,
      prev: 0,
      nextt: 1,
      counter: 1,
      pokemon: {},
    };
  },
  mounted() {
    getPokemonApi(this.counter).then((response) => {
      this.pokemon = response;
      this.loading = false;
    });
    switch (this.counter) {
      case 1:
        this.prev = 0;
        break;
      case 898:
        this.nextt = 0;
        break;
    }
  },
  methods: {
    surprise() {
      this.loading = true;
      this.counter = 1 + Math.round(Math.random() * 897);
      switch (this.counter) {
        case 1:
          this.prev = 0;
          break;
        case 898:
          this.nextt = 0;
          break;
      }
      getPokemonApi(this.counter).then((response) => {
        this.pokemon = response;
        this.loading = false;
      });
    },
    next() {
      this.loading = true;
      this.counter++;
      if (this.prev === 0) this.prev = 1;
      if (this.counter === 898) this.nextt = 0;
      getPokemonApi(this.counter).then((response) => {
        this.pokemon = response;
        this.loading = false;
      });
    },
    previous() {
      this.loading = true;
      this.counter--;
      if (this.nextt === 0) this.nextt = 1;
      if (this.counter === 1) this.prev = 0;
      getPokemonApi(this.counter).then((response) => {
        this.pokemon = response;
        this.loading = false;
      });
    },
    handleSearch() {
      const absoluteIntegerSearching = Math.round(Math.abs(this.searchBar));
      if (absoluteIntegerSearching >= 1 && absoluteIntegerSearching <= 898) {
        this.loading = true;
        getPokemonApi(absoluteIntegerSearching).then((response) => {
          this.pokemon = response;
          this.counter = absoluteIntegerSearching;
          switch (this.counter) {
            case 1:
              this.prev = 0;
              break;
            case 898:
              this.nextt = 0;
              break;
          }
          this.searchBar = 0;
          this.loading = false;
        });
      } else {
        this.searchBar = 0;
      }
    },
  },
});
export default Pokedex;
</script>

<style>
#buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

#button {
  background-color: lightgreen;
  border: 1px solid green;
  color: black;
}

#button:disabled {
  background-color: gray;
  border: none;
}

#pokedex {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 30%;
  margin-left: 30%;
}

#searchBar {
  margin-bottom: 20px;
}
</style>
