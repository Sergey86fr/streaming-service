import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../app/store/store"
import type { IFilm } from "../../../entities/film"
import { addToFavorites, removeFromFavorites } from "../../../app/store/slices/favorites-slice"
import { useCallback } from "react"
import { useAuth } from "../../../entities/user/lib/use-auth"




export const useFavorite = () => {
 const favorites = useSelector((state:RootState) => state.favorites.items)
 const dispatch = useDispatch()
  const { user } = useAuth();

 const addToFavoritesHandler = useCallback((film:IFilm ) => {
     if (!user) return;
    //  console.log(user, 'сейчас');
     
     dispatch(addToFavorites(film))

 },[dispatch, user])

 const removeFromFavoritesHandler = useCallback((filmId:number) => {
     if (!user) return;
     dispatch(removeFromFavorites(filmId))
 },[dispatch, user])

  const isFavorite = useCallback((filmId: number) => {
    return favorites.some((f) => f.kinopoiskId === filmId)
  }, [favorites]);
  
    return {
        favorites,
        isFavorite,
        addToFavorites:addToFavoritesHandler,
        removeFromFavorites: removeFromFavoritesHandler,
    }
}