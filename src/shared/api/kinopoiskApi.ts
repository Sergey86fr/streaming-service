import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FilmCollectionResponse, FilmsQueryParams, FilmsQueryParamsMain, IFilm, IFilmDetails, IGenresAndCounriesResponse, ISequelsAndPrequelsResponse } from "../../entities/film/model/types";
import type { IActorDetailsResponse } from "../../entities/actor/model/types";
import type { ITransfrormSequels } from "../../entities/film/ui/movie-card/movie-card";
import type { IVideo } from "../../features/trailer-player/ui/trailer-player";


const kinopoiskApiKey = import.meta.env.VITE_API_KEY;

const excludeGenres = [
  "",
  "новости",
  "концерт",
  "церемония",
  "реальное ТВ",
  "игра",
  "ток-шоу",
];

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", kinopoiskApiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmsByParametres: builder.query<FilmCollectionResponse,FilmsQueryParams>({
      query: ({ type, page }) => ({
        url: `/v2.2/films/collections`,
        //или можно строку  `/v2.2/films/collections?type=${type}&page=${page}`
        params: {
          type,
          page,
        },
      }),
    }),

    getFilms: builder.query<FilmCollectionResponse, FilmsQueryParamsMain>({
      query: (
        params
        //   {
        //   countries,
        //   genres,
        //   order= 'NUM_VOTE',
        //   type= 'FILMS',
        //   year,
        //   page
        // }
      ) => {
        const queryParams = {
          countries: params.countries ? params.countries : undefined,
          genres: params.genres ? params.genres : undefined,
          order: params.order ? params.order : undefined,
          type: params.type ? params.type : undefined,
          yearFrom: params.year ? params.year : undefined,
          yearTo: params.year ? params.year : undefined,
          page: params.page ? params.page : undefined,
          keyword: params.keyword ? params.keyword : undefined,
        };

        return {
          url: `/v2.2/films`,
          params: queryParams,
        };
      },
    }),

    getGenresAndCountries: builder.query<IGenresAndCounriesResponse, void>({
      query: () => `/v2.2/films/filters`,
      transformResponse: (response: IGenresAndCounriesResponse) => ({
        ...response,
        genres: response.genres.filter(
          ({ genre }) => !excludeGenres.includes(genre)
        ),
      }),
    }),

    getFilm: builder.query<IFilm,string>({
      query: (id) => `/v2.2/films/${id}`,
    }),

    getSequelsAndPrequels: builder.query<ITransfrormSequels[], string>(
      {
        query: (id) => `/v2.1/films/${id}/sequels_and_prequels`,
        transformResponse: (response: ISequelsAndPrequelsResponse[]) => {
          const unique =  response.filter(
          (item, index, sequels) => 
            index === sequels.findIndex(t => t.filmId === item.filmId)
        );
          return unique.map((el) => ({ ...el, kinopoiskId: el.filmId }))
        }
      }
    ),

    getStaff: builder.query<IFilmDetails[], string>({
      query: (id) => `/v1/staff?filmId=${id}`,
    }),
    getStaffById: builder.query<IActorDetailsResponse, string>({
      query: (id) => {
        if (!id) {
          throw new Error("ID актера не указан");
        }
        return `/v1/staff/${id}`;
      },
    }),

    getVideoTrailer: builder.query<{items:IVideo[]}, number>({
      query:(id) => `v2.2/films/${id}/videos`
    })
  }),
});

export const {
  useGetFilmsByParametresQuery,
  useGetFilmsQuery,
  useGetGenresAndCountriesQuery,
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
  useGetStaffByIdQuery,
  useGetVideoTrailerQuery,
} = kinopoiskApi;
