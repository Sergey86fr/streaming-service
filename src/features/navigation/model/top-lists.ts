import type { ISidebarItem } from "./types";

export const TOP_LISTS: ISidebarItem[] = [
  {
    title: "Популярные фильмы",
    icon: "BsStars",
    url: "/popular_movies",
    type: "TOP_POPULAR_MOVIES",
  },
  {
    title: "Популярные сериалы",
    icon: "RiStarSFill",
    url: "/popular_series",
    type: "POPULAR_SERIES",
  },
  {
    title: "Топ 250 лучших фильмов",
    icon: "FaSortAmountDown",
    url: "/top_250_movies",
    type: "TOP_250_MOVIES",
  },
  {
    title: "Вампиры",
    icon: "GiVampireCape",
    url: "/vampire",
    type: "VAMPIRE_THEME",
  },
  {
    title: "Комиксы",
    icon: "FaBookOpen",
    url: "/comics",
    type: "COMICS_THEME",
  },
  {
    title: "Семейные фильмы",
    icon: "MdFamilyRestroom",
    url: "/family",
    type: "FAMILY",
  },
  {
    title: "Романтика",
    icon: "BsFillHeartFill",
    url: "/love",
    type: "LOVE_THEME",
  },
  {
    title: "Зомби",
    icon: "GiRaiseZombie",
    url: "/zombie",
    type: "ZOMBIE_THEME",
  },
  {
    title: "Катастрофы",
    icon: "GiMushroomCloud",
    url: "/catastrophe",
    type: "CATASTROPHE_THEME",
  },
];


export const MOVIE_LISTS: ISidebarItem[] = [
  {
    title: "Фильмы",
    icon: "BiCameraMovie",
    url: "/films",
    type: "FILM",
  },
  {
    title: "Сериалы",
    icon: "MdLiveTv",
    url: "/tv_series",
    type: "TV_SERIES",
  },
  {
    title: "Мультфильмы",
    icon: "TbMoodKidFilled",
    url: "/cartoons",
    type: "FILM",
  },
];
