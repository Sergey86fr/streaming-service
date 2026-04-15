import { Link } from "react-router-dom";
import styles from "./movie-card.module.css";
import cn from "classnames";
import { useState } from "react";
import type { IFilm, ISequelsAndPrequelsResponse } from "../../model/types";
import { Skeleton } from "../../../../shared/ui/skeleton/skeleton";
import { adaptToMovieCard } from "../../model/movie-adapter";
import { AddToFavoritesButton } from "../../../../features/add-to-favorites/ui/add-to-favorites-button/add-to-favorites-button";

export interface ITransfrormSequels extends ISequelsAndPrequelsResponse {
  kinopoiskId: number;
}

interface IMovieCardProps {
  movie: IFilm | ITransfrormSequels;
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const movieData = adaptToMovieCard(movie);
  return (
    <div className={cn(styles.movieCard)}>
      {isLoading && <Skeleton width={"100%"} height={"100%"} />}
      <div
        style={{
          width: "100%",
          height: "450px",
          overflow: "hidden",
          display: "flex",
          flex: 1,
        }}
      >
        {hasError && <div>📷 Нет изображения</div>}
        <Link to={`/movie/${movieData.id}`}>
          <img
            onLoad={() => {
              setIsLoading(false); // 👈 Убираем скелетон
            }}
            onError={() => {
              console.log("Ошибка загрузки!");
              setIsLoading(false); // 👈 Все равно убираем скелетон
              setHasError(true); // 👈 Показываем ошибку
            }}
            style={{ width: "100%", objectFit: "cover" }}
            src={movieData.posterUrlPreview}
            alt={movie.nameRu}
          />
        </Link>
      </div>
            <div style={{ fontSize:16, color:"#ffffffb3", padding:"4px 10px" }}>{movieData.title}</div>
      <AddToFavoritesButton film={movie as IFilm} style={{position:'absolute', bottom:0, right:0}} />
    </div>
  );
};
