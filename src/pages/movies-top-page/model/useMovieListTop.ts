import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TOP_LISTS } from "../../../features/navigation/model/top-lists";
import { useGetFilmsByParametresQuery } from "../../../shared/api/kinopoiskApi";


export const useMoviesListTop = () => {
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const [movieType, setMovieType] = useState<string>('TOP_POPULAR_MOVIES');
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const location = useLocation();


  // useEffect(() => {
  //     // eslint-disable-next-line react-hooks/set-state-in-effect
  //     setPage(initialPage)

  // },[location.pathname])

  useEffect(() => {
    const itemToTop = TOP_LISTS.find((item) => item.url === location.pathname);
    if (itemToTop) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMovieType(itemToTop.type);
      setPage(initialPage); // Сбрасываем страницу тут же
      setCurrentTitle(itemToTop.title);
    }
  }, [location.pathname, initialPage]);

  // const handleChangePage = (page: number) => {
  //   setPage(page);
  // };

  // type TmovieType = null |string
  // let movieType:TmovieType = null

  // const itemToTop = TOP_LISTS.find((item) => item.url === location.pathname)
  // if(itemToTop) {
  //   movieType = itemToTop.type
  // }

  const { data, error, isLoading } = useGetFilmsByParametresQuery(
    { type: movieType, page: page },
    // { skip: !movieType },
  );

  // console.log(data, error, isLoading);
  console.log(isLoading, "loading");

  // const totalPages: number[] = data?.totalPages
  //   ? Array.from({ length: data.totalPages }, (_, index) => index + 1)
  //   : [];
  // console.log(total, "total");

  
        const handleChangePage = (page:number) => {
        // setPageLoc(page)
        setPage(page)
      }

  return {
    data,
    error,
    isLoading,
    currentTitle,
    page,
    handleChangePage
  };
};
