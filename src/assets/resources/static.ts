export const STATIC_PARAMS = {
  placeholders: {
    search: {
      input: {
        name: 'Pikachu...',
        num_pokemon: '011...',
        generation_num: 'Generación 1...',
        type: 'Electrico...',
      },
      select: {
        name: 'Nombre',
        num_pokemon: 'Número',
        generation_num: 'Generación',
        type: 'Tipo',
      },
    },
  },
  background: {
    predeterminated: {
      title: 'BIENVENIDO A LA POKÉDEX',
      img: '../../../assets/img/Pokebola-pokeball-png-0.png',
      alt: 'Pokebola',
      color: '#57575a',
    },
    data: {
      generation: 'Generación:',
    },
  },
  cards: {
    color: '#f2be20',
  },
  form: {
    color: '#f2be20',
    button_main: '+ AGREGAR',
    secondary_button: 'Agregar Pokemon',
    labels: {
      label_name:{
        title: 'Nombre del pokemon',
        placeholder: 'Pikachu...',
        message_error: 'El nombre del pokemon es requerido.'
      },
      label_num_pokemon:{
        title: 'Número del pokemon',
        placeholder: '001...',
        message_error: 'El número del pokemon es requerido.'
      },
      label_generation_num:{
        title: 'Número de generación',
        placeholder: '1...',
        message_error: 'El número de generación es requerido.'
      },
      label_main_color:{
        title: 'Color principal',
        message_error: 'El color principal es requerido.'
      },
      label_icon:{
        title: 'Icono del pokemon',
        placeholder: 'https://...',
        message_error: 'El icono del pokemon es requerido.'
      },
      label_type:{
        title: 'Tipo del pokemon',
        placeholder: 'Eléctrico...',
        message_error: 'El tipo del pokemon es requerido.'
      }
    }
  }
};
