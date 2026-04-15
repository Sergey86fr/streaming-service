import type { IMovieCardProps } from "../../../../features/film-carousels/model/types"



export const MoviePoster = ({film}:IMovieCardProps) => {
    return (
        <div style={{  height:"100%", width:"100%"}}>
            <img style={{width:"100%",height:"100%", objectFit:"cover"}} src={film.posterUrlPreview} alt={film.nameRu} />
        </div>
    )
}