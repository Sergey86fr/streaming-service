import { MovieCard } from "../../../entities/film";
import { useFavorite } from "../../../features/add-to-favorites/model/use-favorites";
import { BackButton } from "../../../shared/ui";
import styles from "./favorite-page.module.css";
import cn from "classnames";

const FavoritesPage = () => {
  const { favorites } = useFavorite();

  return (
      <div className={cn(styles.favoritePage)}>
      <BackButton />
      <h2>Избранное</h2>
        {favorites.length === 0 && <span>Пока нет избранных фильмов</span>}
        <div className={cn(styles.favoriteList)}>
        {favorites.map((f) => (
          <div key={f.kinopoiskId}>
            <MovieCard movie={f} />
            {/* <AddToFavoritesButton film={f} style={{position:'absolute', bottom:0, right:0}} /> */}
          </div>
        ))}
        </div>
      </div>
  );
};

export default FavoritesPage;
