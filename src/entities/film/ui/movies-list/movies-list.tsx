import { MovieCard, type IFilm } from "../..";
import styles from "./movies-list.module.css"
import cn from "classnames"

interface IMoviesListProps {
    movies: IFilm[];
    // totalPages:number[];
    // handleChangePage: (page:number) => void;
}

export const MoviesList = ({movies}:IMoviesListProps) => {



  

    return (
        <>
              <div className={cn(styles.moviesList)} style={{display:"flex",flexWrap:"wrap", gap:20}}>
                {/* {!movies && <div>Loader . . .</div>} */}
        {movies.map((movie) => (
         <MovieCard movie={movie} key={movie.kinopoiskId} />
        ))}

      

          </div>
         
        </>

    )
}