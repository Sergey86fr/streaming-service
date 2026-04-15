import cn from "classnames";
import styles from "./movies-top-page.module.css";
import { useMoviesListTop } from "../model/useMovieListTop";
import { BackButton, MovieListSkeleton } from "../../../shared/ui";
import { MoviesList } from "../../../entities/film";
import { Pagination } from "../../../shared/ui/pagination/pagination";

const MoviesTopPage = () => {
  const { error, isLoading, data, page, handleChangePage, currentTitle } =
    useMoviesListTop();

  if (error) return <div>Error</div>;
  // if (isLoading) return <div>Loading123...</div>
  if (isLoading) return <MovieListSkeleton />;
  if (!data) return <div>Нет совпадений</div>;

  return (
    <div className={cn(styles.topPage)}>
      <BackButton />
      <div>
        <h2 className={cn(styles.title)}>{currentTitle}</h2>
        <MoviesList movies={data.items} />

        <Pagination
          totalPages={data.totalPages}
          currentPage={page}
          onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default MoviesTopPage;
