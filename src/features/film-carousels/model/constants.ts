import type { ICarouselConfig } from "./types";




 export const carouselArr: ICarouselConfig [] = [
    {
        title: "Популярные фильмы",
        url: "/popular_movies",
        dataKey: 'filmsTopCollection'
    },
    {
        title: "Популярные сериалы",
        url: "/popular_series",
        dataKey: 'serialsTopCollection'
    },
    {
        title: "Фильмы",
        url:  "/films",
        dataKey: 'filmsCollection'
    },
    {
        title: "Сериалы",
        url: "/tv_series",
        dataKey: 'serialsCollection'
    },
    {
        title: "Мультфильмы",
        url: "/cartoons",
        dataKey: 'cartoonsCollection'
    },
  ]