import axios from "axios";
import { Ilist, Ipokemon } from "@/types/pokeAPI.interface";
import { InFPokemon } from "@/types/nonFiltredPokemon";
const listUrl = "https://pokeapi.co/api/v2/pokemon";
export function pokeListApi(): Promise<Ilist> {
  let list: Ilist | null = null;
  const result: Promise<Ilist> = axios
    .get<Ilist>(listUrl)
    .then(function (response) {
      list = response.data;
      return list;
    });
  return result;
}

export function getPokemonApi(identity: number): Promise<Ipokemon> {
  const getPokemonlink = listUrl + "/" + identity;
  let pokemon: Ipokemon = { id: 0 };
  const getPokemon: Promise<Ipokemon> = axios
    .get<InFPokemon>(getPokemonlink)
    .then(function (response) {
      const copy: Ipokemon = { id: 0 };
      Object.keys(response.data).forEach((key) => {
        switch (key) {
          case "height":
            copy["height"] = response.data.height;
            break;
          case "id":
            copy["id"] = response.data.id;
            break;
          case "name":
            copy["name"] = response.data.name;
            break;
          case "sprites":
            copy["sprites"] = response.data.sprites;
            break;
          case "types":
            copy["types"] = response.data.types;
            break;
          case "weight":
            copy["weight"] = response.data.weight;
            break;
        }
      });
      pokemon = copy;
      return pokemon;
    });
  return getPokemon;
}
