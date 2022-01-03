import axios from "axios";
import { Ilist, Ipokemon } from "@/types/pokeAPI.interface";

const listUrl = process.env.URL || "https://pokeapi.co/api/v2/pokemon";
export function pokeListApi(): Promise<Ilist> {
  let list: Ilist | null = null;
  console.log(process.env.URL)
  const result: Promise<Ilist> = axios
    .get<Ilist>(listUrl)
    .then(function (response) {
      list = response.data;
      return list;
    });
  return result;
}

export async function getPokemonApi(
  identity: number
): Promise<Ipokemon | undefined> {
  const getPokemonlink = listUrl + "/" + identity;
  async function getPokemon(): Promise<Ipokemon | undefined> {
    try {
      interface Idata {
        data: Ipokemon;
      }
      const response: Idata = await axios.get(getPokemonlink);
      return response.data;
    } catch {
      return;
    }
  }
  const result = await getPokemon();
  return result;
}
