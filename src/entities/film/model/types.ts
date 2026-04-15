export interface IFilm {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    }
  ];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export type FilmCollectionResponse = {
  total: number;
  totalPages: number;
  items: IFilm[];
};

export interface FilmsQueryParams {
  type: string | null;
  page: number;
}

export interface FilmsQueryParamsMain {
  countries?: number[];
  genres?: number[];
  order: string;
  type: string;
  year?: number;
  // yearFrom?: number;
  // yearTo?: number;
  page: number;
  keyword?: string;
}

interface IGenre {
  id: number;
  genre: string;
}

interface ICountry {
  id: number;
  country: string;
}

export interface IGenresAndCounriesResponse {
  genres: IGenre[];
  countries: ICountry[];
}

export interface IFilmDetails {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string | null;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}


export interface ISequelsAndPrequelsResponse {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: "SEQUEL" | "PREQUEL";
}
