export interface Pokemon {
  id?:string;
  nombre: string;
  num_pokemon: string;
  num_generacion: string;
  icono_pokemon: string;
  tipo_pokemon: string;
  [key: string]: any;
}
