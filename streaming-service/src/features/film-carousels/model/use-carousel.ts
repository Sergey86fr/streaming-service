import { carouselArr } from "../model/constants";
import type { ICarouselObj } from "../model/types";
import { UseCollectionMovies } from "./use-films-collection";

export const useCarousels = () => {
  const collections = UseCollectionMovies();
  const { isLoading, hasError } = collections;

  // Преобразуем конфигурации в карусели с данными
  const carousels: ICarouselObj[] = carouselArr.map((config) => ({
    title: config.title,
    url: config.url,
    data: collections[config.dataKey]?.data?.items,
  }));

  return {
    carousels,
    isLoading,
    hasError,
  };
};