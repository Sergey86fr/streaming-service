import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFilm } from "../../../entities/film";
import { favoriteStorage } from "../../../features/add-to-favorites/api/favorite-storage";


export interface IFavoriteState {
  items: IFilm[];
  userId: number | null;
}

// export interface IAllFavoritesData {
//   [userId:number] : IFilm[];
// }

const initialState: IFavoriteState = {
items:[],
// favoriteStorage.getFavorites() || [],
userId: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {

    setUserId: (state, action: PayloadAction<number | null>) => {
       const id  = action.payload;
       console.log('🔵 setUserId вызван с id:', id);
       state.userId = id;
       if(id) {
        state.items = favoriteStorage.getFavoritesForUser(id) || []
       } else {
        state.items = [];
       }
       console.log('📊 Текущее состояние items после setUserId:', state.items);
    },
   addToFavorites: (state, action: PayloadAction<IFilm>) => {
     console.log('➕ addToFavorites вызван');
      console.log('state.userId:', state.userId);
      console.log('фильм:', action.payload);
    if(! state.userId) return;
     console.warn('⚠️ Нет userId, пропускаем');
    const film = action.payload;
    if(state.items.some((item) => item.kinopoiskId === film.kinopoiskId)) {
      return
    }
    state.items.push(film)
    favoriteStorage.setFavoritesForUser(state.userId, state.items)
   },

   removeFromFavorites: (state, action: PayloadAction<number>) => {
    if( !state.userId) return;
    const filmId= action.payload;
    state.items = state.items.filter(item => item.kinopoiskId !== filmId)
    favoriteStorage.setFavoritesForUser(state.userId, state.items)
   },

   clearFavorites: (state) => {
    if(!state.userId) return;
    state.items = [];
    favoriteStorage.setFavoritesForUser(state.userId, state.items);
   },

  //  setFavorites: (state, action: PayloadAction<IFilm[]>) => {
  //   state.items = action.payload
  //  }

  },
});

export const {
  setUserId,
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  // setFavorites
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
