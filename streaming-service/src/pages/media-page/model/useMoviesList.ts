import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../app/store/store"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { resetSearchParamsQuery, setSearchParamsQuery } from "../../../app/store/slices/search-query-slice"
import { MOVIE_LISTS } from "../../../features/navigation/model/top-lists"
import { useGetFilmsQuery } from "../../../shared/api/kinopoiskApi"

export const useMoviesList = () => {
        const initialPage = 1
            const {countries,genres,order, year, page, type} = useSelector((state:RootState) => state.searchQueryParametres)
          const [currentTitle, setCurrentTitle] = useState<string>("") 
        const location = useLocation()
         const dispatch = useDispatch();
        //  const navigate = useNavigate()
    
    
           useEffect(() => {
        // Проверяем, есть ли фильтры в state навигации
        if (location.state?.params) {
          dispatch(setSearchParamsQuery(location.state.params));
          
          // Очищаем state чтобы не применять повторно
          // navigate(location.pathname, { replace: true, state: {} });
        }
      }, [location.state, dispatch, location.pathname]);
    
           // Сбрасываем фильтры при размонтировании компонента
      useEffect(() => {
        return () => {
    
          dispatch(resetSearchParamsQuery());
        }
        
      }, [dispatch]);
    
    
    
        useEffect(() => {
        const itemToTop = MOVIE_LISTS.find((item) => item.url === location.pathname)
        if (itemToTop) {
          setCurrentTitle(itemToTop.title)
          dispatch(setSearchParamsQuery({type:itemToTop.type, page:initialPage }))
        }
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location.pathname])

      const genreMovies = location.pathname === "/cartoons" ? [18] : genres;

    const {data, error, isLoading} = useGetFilmsQuery({type,page, countries, genres: genreMovies, order, year},
        // { skip: !movieType }
    )
    console.log(data?.totalPages, 'tesr');
    

      const handleChangePage = (page:number) => {
      // setPageLoc(page)
       dispatch(setSearchParamsQuery({ page }))
    }
    

    return {
  currentTitle,
  data,
  error,
  isLoading,
  page,
   handleChangePage
    }
}