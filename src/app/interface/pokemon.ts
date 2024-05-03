export interface Pokemon {
  id?:string;
  name: string;
  num_pokemon: string;
  main_color: string;
  generation_num: string;
  icon: string;
  type: string;
  [key: string]: any;
}

export interface placeholderContent{
  name: string;
  num_pokemon: string;
  generation_num: string;
  type: string;
  [key: string]: any;
}
export interface PokemonSearch {
  name: string;
  searchType: string;
}

