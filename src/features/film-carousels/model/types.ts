import type { ReactNode } from "react";
import type { IFilm } from "../../../entities/film/model/types";

export interface ICarouselObj {
  title: string;
  url: string;
  data: IFilm[] | undefined;
}

export interface ICarouselConfig {
  // id: string;
  title: string;
  url: string;
  // Для получения данных
  dataKey: keyof CarouselData;
  // Дополнительные параметры
  // params?: Record<string, unknown>;
}

export interface CarouselData {
  filmsTopCollection: { data?: { items: IFilm[] } };
  serialsTopCollection: { data?: { items: IFilm[] } };
  filmsCollection: { data?: { items: IFilm[] } };
  serialsCollection: { data?: { items: IFilm[] } };
  cartoonsCollection: { data?: { items: IFilm[] } };
}

export interface IMovieCardProps {
    film:IFilm;
}

export interface CarouselItemProps {
  children: ReactNode;
  style?: React.CSSProperties;
}



