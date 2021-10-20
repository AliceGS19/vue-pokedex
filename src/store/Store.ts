import { createStore, MutationTree } from "vuex";
import { Ipokemon } from "../types/pokeAPI.interface";

export type State = {
  favoritePokemons: Array<Ipokemon>;
};
const state: State = { favoritePokemons: [] };

export enum MutationTypes {
  SET_POKEMON = "PUSH_POKEMON",
  DEL_POKEMON = "DEL_POKEMON",
}

export type Mutations<S = State> = {
  [MutationTypes.SET_POKEMON](state: S, pokemon: Ipokemon): void;
  [MutationTypes.DEL_POKEMON](state: S, id: number): void;
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_POKEMON](state: State, pokemon: Ipokemon) {
    state.favoritePokemons.push(pokemon);
  },
  [MutationTypes.DEL_POKEMON](state: State, id: number) {
    state.favoritePokemons = state.favoritePokemons.filter(
      (poke) => poke.id !== id
    );
  },
};

export default createStore({
  state,
  mutations,
});
