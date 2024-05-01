export interface Pokemon {
  id?:string;
  nombre: string;
  color_principal: string;
  num_pokemon: string;
  num_generacion: string;
  icono_pokemon: string;
  tipo_pokemon: string;
  [key: string]: any;
}

export interface placeholderContent{
  nombre: string;
  num_pokemon: string;
  num_generacion: string;
  tipo_pokemon: string;
  [key: string]: any;
}
