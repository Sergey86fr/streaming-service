import { FaRegBookmark } from "react-icons/fa6";
import { useFavorite } from "../../model/use-favorites";
import type { IFilm } from "../../../../entities/film";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../entities/user/lib/use-auth";
import type { CSSProperties } from "react";
import cn from "classnames"
import styles from "./add-to-favorites-button.module.css"


interface IAddToFavoritesButton{
  film: IFilm ;
  style?: CSSProperties;
  className?: string;
}

export const AddToFavoritesButton  = ({film, style, className}: IAddToFavoritesButton) => {

 const navigate = useNavigate();
  const { isAuthenticated } = useAuth()

    const { isFavorite, addToFavorites, removeFromFavorites} = useFavorite();

//  if (!film) {
//         return null;
//     }


  const isFavoriteFilm = isFavorite(film.kinopoiskId)

  const handleClickToFavoriteButton = () => {

if(!isAuthenticated) {
  navigate('/auth/login')
  return;
}

    if(isFavorite(film.kinopoiskId)) {
      removeFromFavorites(film.kinopoiskId)
    } else {
      addToFavorites(film)
    }
  }
    


    return (
        <button className={cn(styles.addToFavoritesButton, className || '', {
          [styles.isFavorites]:isFavoriteFilm
        })} style={{...style,}} onClick={handleClickToFavoriteButton}><FaRegBookmark className={cn(styles.addToFavoritesIcon)}  /></button>
    )
}