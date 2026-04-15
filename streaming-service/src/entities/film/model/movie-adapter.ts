import type { ITransfrormSequels } from "../ui/movie-card/movie-card";
import type { IFilm } from "./types";

export interface IMovieCardData {
  id: number;
  title: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating?: number;
  year?: string;
  genre?: string;
  relationType?: "SEQUEL" | "PREQUEL";
  originalData: IFilm | ITransfrormSequels; // Для доступа к оригинальным данным
}

export const adaptToMovieCard = (
  data: IFilm | ITransfrormSequels,
): IMovieCardData => {
  const base = {
    posterUrl: data.posterUrl,
    posterUrlPreview: data.posterUrlPreview,
    originalData: data,
    title: data.nameRu ?? data.nameEn ?? data.nameOriginal,
    id: data.kinopoiskId
  };

  if ("relationType" in data) {
    return {
      ...base,
      relationType: data.relationType,
    };
}
return {
    ...base,
    rating: data.ratingKinopoisk,
    year: data.year,
    genre: data.genres[0].genre,
};
};
