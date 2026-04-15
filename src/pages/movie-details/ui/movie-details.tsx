import styles from "./movie-details.module.css";
import cn from "classnames";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffQuery } from "../../../shared/api/kinopoiskApi";
import { MovieCard } from "../../../entities/film";
import { AddToFavoritesButton } from "../../../features/add-to-favorites/ui/add-to-favorites-button/add-to-favorites-button";
import { TrailerButton } from "../../../features/trailer-player/ui/trailer-button";
import { VideoPlayer } from "../../../features/video-player/ui";
import { ErrorMessage, BackButton } from "../../../shared/ui";
import { ProfessionList } from "../../../shared/ui/profession-list/profession-list";


const MovieDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const filmResponse = useGetFilmQuery(id!);
  const sequelResponse = useGetSequelsAndPrequelsQuery(id!);
  const staffResponse = useGetStaffQuery(id!);

  console.log(sequelResponse.data, "сиквелы");

  if (
    filmResponse.isLoading ||
    sequelResponse.isLoading ||
    staffResponse.isLoading
  ) {
    return <div>Loading . . .</div>;
  }

  if (filmResponse.error || staffResponse.error) {
    return <ErrorMessage />;
  }

  const handlePlayFilm = () => {
    setShowVideoPlayer(true);
  };

  return (
    <div className={cn(styles.movieDetails)}>
      <div>
        <BackButton />
        <div className={cn(styles.movieDetailsWrapper)}>
          <img
            className={cn(styles.moviePoster)}
            src={filmResponse.data?.posterUrl}
            alt={filmResponse.data?.nameRu}
          />
          {filmResponse.data && (
            <AddToFavoritesButton film={filmResponse?.data} />
          )}
          <div>
            <h2>О фильме</h2>
            <span>Год производства {filmResponse.data?.year}</span>
            <span>
              Страна:{" "}
              {filmResponse.data?.countries.map((country, index) => (
                <span key={index}>
                  {country.country}
                  {index < filmResponse.data.countries.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
            <span>
              Жанр:
              {filmResponse.data?.genres.map((genre, index) => (
                <span key={index}>
                  {genre.genre}
                  {index < filmResponse.data.genres.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
            <ProfessionList
              professionKey="DIRECTOR"
              staff={staffResponse.data || []}
            />
            <ProfessionList
              professionKey="PRODUCER"
              staff={staffResponse.data || []}
            />
            <ProfessionList
              professionKey="ACTOR"
              staff={staffResponse.data || []}
            />
          </div>

          {filmResponse.data?.kinopoiskId && (
            <TrailerButton
              trailerId={filmResponse.data?.kinopoiskId}
            />
          )}


          <div>
            {!showVideoPlayer ? (
              <button onClick={handlePlayFilm}> смотреть онлайн</button>
            ) : (
              <VideoPlayer />
            )}
          </div>
          {sequelResponse.data && (
            <div className={cn(styles.sequelsTitle)}>Сиквелы и приквелы!</div>
          )}
          <div className={cn(styles.sequelsWrapper)}>
            {sequelResponse.data?.map((s) => (
              <MovieCard key={s.kinopoiskId} movie={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

