import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  terrorFilms = {
    section:"TERROR",
  films : [
    {
      name: 'Apostol',
      photo: '../assets/Terror/apostol.jpg',
    },
    {
      name: 'Calle terror',
      photo: '../assets/Terror/calleterror.jpg',
    },
    {
      name: 'Infierno bajo el agua',
      photo: '../assets/Terror/infiernoagua.webp',
    },
    {
      name: 'Multiple',
      photo: '../assets/Terror/multiple.webp',
    },
    {
      name: 'Reflejos',
      photo: '../assets/Terror/reflejos.webp',
    },
    {
      name: 'Malasaña 32',
      photo: '../assets/Terror/malasana.webp',
    },
  ]


};
dramaFilms = {
  section:"DRAMA",
  films : [
  {
    name: '1917',
    photo: '../assets/Drama/1917.webp',
  },
  {
    name: 'arrival',
    photo: '../assets/Drama/arrival.webp',
  },
  {
    name: 'El club de la lucha',
    photo: '../assets/Drama/clublucha.webp',
  },
  {
    name: 'Naufrago',
    photo: '../assets/Drama/naufrago.webp',
  },
  {
    name: 'Salvar al soldado ryan',
    photo: '../assets/Drama/salvaralsoldado.webp',
  },
  {
    name: 'Scarface',
    photo: '../assets/Drama/scarface.webp',
  },
]
};
actionFilms = {
  section:"ACCIÓN",
  films : [
  {
    name: 'Equalizer 2',
    photo: '../assets/Accion/equalizer2.webp',
  },
  {
    name: 'Heat',
    photo: '../assets/Accion/heat.webp',
  },
  {
    name: 'John wick 2',
    photo: '../assets/Accion/johnwick2.webp',
  },
  {
    name: 'renacido',
    photo: '../assets/Accion/renacido.webp',
  },
  {
    name: 'Guerra Mundial Z',
    photo: '../assets/Accion/worldwarz.webp',
  },
  {
    name: 'Kill Bill',
    photo: '../assets/Accion/killbill2.webp',
  },
]
};
comedyFilms = {
  section:"COMEDIA",
films : [
    {
      name: 'rick y morty',
      photo: '../assets/Comedia/rickandmorty.webp',
    },
    {
      name: 'cazafantasmas',
      photo: '../assets/Comedia/cazafantasmas.webp',
    },
    {
      name: 'dictador',
      photo: '../assets/Comedia/dictador.webp',
    },
    {
      name: 'erase una vez en hollywood',
      photo: '../assets/Comedia/erasehollywood.webp',
    },
    {
      name: 'family guy',
      photo: '../assets/Comedia/family guy.webp',
    },
    {
      name: 'scary movie 3',
      photo: '../assets/Comedia/scarymovie3.webp',
    },
  ]
  };
  animeFilms = {
    section:"ANIME",
  films : [
      {
        name: 'ajin',
        photo: '../assets/Anime/ajin.jpg',
      },
      {
        name: 'el castillo ambulante',
        photo: '../assets/Anime/castilloambulante.webp',
      },
      {
        name: 'chihiro',
        photo: '../assets/Anime/chihiro.webp',
      },
      {
        name: 'evangelion',
        photo: '../assets/Anime/evangelion.webp',
      },
      {
        name: 'gundam',
        photo: '../assets/Anime/gundam.webp',
      },
      {
        name: 'el castillo en el cielo',
        photo: '../assets/Anime/laputa.webp',
      },
      {
        name: 'mononoke',
        photo: '../assets/Anime/mononoke.webp',
      },
      {
        name: 'ninokuni',
        photo: '../assets/Anime/ninokuni.jpg',
      },
      {
        name: 'perfect blue',
        photo: '../assets/Anime/perfectblue.webp',
      },
      {
        name: 'porco rosso',
        photo: '../assets/Anime/porcorosso.webp',
      },
    ]
    };
  
};

 






