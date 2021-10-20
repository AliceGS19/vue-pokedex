<template>
  <div id="pokemon">
    <div id="info">
      <h3 id="title">{{ pokemon.name }}</h3>
      <p>Peso: {{ pokemon.weight / 10 }}Kg</p>
      <p>Altura: {{ pokemon.height }}Cm</p>
      <p>Tipos:</p>
      <p v-for="typ in pokemon.types" v-bind:key="typ.type.name">
        {{ typ.type.name }}
      </p>
      <button
        type="button"
        v-if="isFavorite === false"
        id="fav-btn"
        @click.prevent="
          () => {
            saveFav(pokemon);
          }
        "
      >
        Favoritar pokémon!!
      </button>
      <button
        type="button"
        v-if="isFavorite === true"
        id="fav-btn"
        @click.prevent="
          () => {
            deleteFav(pokemon.id);
          }
        "
      >
        Desfavoritar pokémon!!
      </button>
    </div>
    <img :src="pokemon.sprites.front_default" id="pokeIMG" alt="pokeIMG" />
    <img
      src="../assets/star-icon.svg"
      v-if="isFavorite === true"
      id="favorite"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ipokemon } from "@/types/pokeAPI.interface";
import { mapState, mapMutations } from "vuex";

const PokemonCard = defineComponent({
  computed: {
    ...mapState(["favoritePokemons"]),
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  props: {
    pokemon: { type: Object as PropType<Ipokemon>, required: true },
    id: { type: Number as PropType<number>, required: true },
  },
  mounted() {
    this.isFav(this.id);
  },
  methods: {
    ...mapMutations(["PUSH_POKEMON", "DEL_POKEMON"]),
    saveFav(pokemon: Ipokemon) {
      this.PUSH_POKEMON(pokemon);
      this.isFav(pokemon.id);
      console.log(this.favoritePokemons);
    },
    deleteFav(id: number) {
      this.DEL_POKEMON(id);
      this.isFav(id);
      console.log(this.favoritePokemons);
    },
    isFav(id: number | undefined) {
      console.log(this.favoritePokemons);
      const copyFavorites: Array<Ipokemon> = this.favoritePokemons;
      if (copyFavorites.length !== 0) {
        if (
          copyFavorites.filter((poke: Ipokemon) => poke.id === id).length !== 0
        ) {
          this.isFavorite = true;
        } else this.isFavorite = false;
      } else this.isFavorite = false;
    },
  },
});

export default PokemonCard;
</script>

<style>
#info {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#pokemon {
  align-items: center;
  border: 1px gray solid;
  border-radius: 10px;
  display: flex;
  margin: auto;
  min-width: 25%;
  width: fit-content;
}
#pokeIMG {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#title {
  margin-left: 15px;
}
#favorite {
  width: 30px;
  margin: 20px;
  align-self: flex-start;
}
#fav-btn {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
