import { useSelector } from "react-redux";
import { useGetFilmsByParametresQuery, useGetFilmsQuery } from "../../../shared/api/kinopoiskApi";
import type { RootState } from "../../../app/store/store";

export const UseCollectionMovies = () => {
  // const page = useSelector((state:RootState) => state.queryParametres.page)
  const queryParams = useSelector((state: RootState) => state.carouselParametres);
  const { page, countries, genres, order, year } = queryParams;

  const filmsTopCollection = useGetFilmsByParametresQuery({
    type: "TOP_POPULAR_MOVIES",
    page: page,
  });

  const serialsTopCollection = useGetFilmsByParametresQuery({
    type: "POPULAR_SERIES",
    page: page,
  });

  const filmsCollection = useGetFilmsQuery({
    type: "FILM",
    order: order,
    year: year,
    page: page,
    countries: countries,
    genres: genres,
  });

  const serialsCollection = useGetFilmsQuery({
    type: "TV_SERIES",
    order: order,
    year:year,
    page: page,
    countries: countries,
    genres: genres,
  });

  const cartoonsCollection = useGetFilmsQuery({
    type: "FILM",
    order: order,
    year: year,
    page: page,
    countries: countries,
    genres: [18],
  });

  const isLoading =
    filmsTopCollection.isLoading ||
    serialsTopCollection.isLoading ||
    filmsCollection.isLoading ||
    serialsCollection.isLoading ||
    cartoonsCollection.isLoading;

    const hasError = 
     filmsTopCollection.error ||
    serialsTopCollection.error ||
    filmsCollection.error ||
    serialsCollection.error ||
    cartoonsCollection.error;

  return {
    filmsTopCollection,
    serialsTopCollection,
    filmsCollection,
    serialsCollection,
    cartoonsCollection,
    isLoading,
    hasError
  };
};
