import { MoviesList } from "../../../entities/film";
import { BackButton, MovieListSkeleton } from "../../../shared/ui";
import { Pagination } from "../../../shared/ui/pagination/pagination";
import { useMoviesList } from "../model/useMoviesList";
import styles from "./media-page.module.css";
import cn from "classnames"


const MediaPage = () => {
  const { error, isLoading, data, currentTitle, page, handleChangePage } =
    useMoviesList();
  // console.log(data?.totalPages, 'этест');

  if (error) return <div>Error</div>;
  // if (isLoading) return <div>Loading@@@...</div>
  if (isLoading) return <MovieListSkeleton />;
  if (!data) return <div>Нет совпадений</div>;

  return (
    <div className={cn(styles.mediaPage)}>
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

export default MediaPage;
