export interface IpokeListTypes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ilist[];
}

export interface Ilist {
  name: string;
  url: string;
}

//generated with https://app.quicktype.io
export interface Ipokemon {
  height?: number;
  id: number | undefined;
  name?: string;
  sprites?: Sprites;
  types?: Type[];
  weight?: number;
}

export interface Sprites {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

export interface Type {
  slot?: number;
  type?: Ilist;
}
