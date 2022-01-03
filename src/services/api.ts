import axios from "axios";
import dotenv from "dotenv"
import { Ilist, Ipokemon } from "@/types/pokeAPI.interface";

dotenv.config();

const listUrl = process.env.URL || "";
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
