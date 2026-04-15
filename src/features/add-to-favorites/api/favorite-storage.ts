import type { IFilm } from "../../../entities/film";

const FAVORITES_STORAGE_KEY = "favorite_films";

export interface IUserFavoritesData {
  [userId:number] : IFilm[];
}

export const favoriteStorage = {
  getFavoritesForUser: (userId: number): IFilm[] | null => {
    try {
      const data = localStorage.getItem(FAVORITES_STORAGE_KEY);
      const allFavorites = data ? JSON.parse(data) : {};
      return allFavorites[userId] || [];
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  setFavoritesForUser: (userId: number, favorites: IFilm[]) => {
    try {
      const data = localStorage.getItem(FAVORITES_STORAGE_KEY);
      const allFavorites: IUserFavoritesData = data ? JSON.parse(data) : {};
      allFavorites[userId] = favorites;
      const jsonString = JSON.stringify(allFavorites);
      localStorage.setItem(FAVORITES_STORAGE_KEY, jsonString);
    } catch (error) {
      console.log(error);
    }
  },
};
