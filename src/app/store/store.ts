import { configureStore } from '@reduxjs/toolkit';
import queryReducer  from './slices/current-query-slice';
import { kinopoiskApi } from '../../shared/api/kinopoiskApi';
import searchQueryReducer  from './slices/search-query-slice';
import carouselReducer  from './slices/carousel-slice';
import favoritesReducer from "./slices/favorites-slice"
import { authApi } from '../../entities/user/api/auth-api';
// import { setupListeners } from '@reduxjs/toolkit/query';
import  themeReducer  from "./slices/theme-slice"

export const store = configureStore({
  reducer: {
    queryParametres: queryReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    searchQueryParametres: searchQueryReducer,
    carouselParametres: carouselReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
    // searchQueryParametres: searchQuerySlice.reducer,
  },


      middleware: (getDefaultMiddleware) =>
  
    getDefaultMiddleware().concat(kinopoiskApi.middleware).concat(authApi.middleware),
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

