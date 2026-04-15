import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { setSearchParamsQuery } from "../../../app/store/slices/search-query-slice";
import { useGetFilmsQuery } from "../../../shared/api/kinopoiskApi";
import { useDebounce } from "../../../shared/lib/hooks/useDebounce";

export const useSearch = () => {
    const searchState = useSelector(
    (state: RootState) => state.searchQueryParametres);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ inputValue, setInputValue] = useState(searchState.keyword || '')
    const [showSuggestions, setShowSuggestions] = useState(false);
     const searchRef = useRef<HTMLDivElement>(null);

     const debouncedValue = useDebounce(inputValue, 500)


    useEffect(() => {
        if (debouncedValue.trim().length >= 3) {
            dispatch(setSearchParamsQuery({keyword: debouncedValue}))
        } else if (debouncedValue.trim() === '' && searchState.keyword) {
            // Очищаем если стало пусто
            dispatch(setSearchParamsQuery({ keyword: '' }))
        }
    },[ debouncedValue, dispatch, searchState.keyword ])
    
    const { data, isFetching, error } = useGetFilmsQuery({...searchState});

         useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setInputValue("")
      }
    };
document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


   const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
   setInputValue(e.target.value)
  //  dispatch(resetSearchParamsQuery())
    setShowSuggestions(e.target.value.trim().length > 2);
   }

   const handleClickToSearchResult = (id: number) => {
     navigate(`/movie/${id}`)
     setShowSuggestions(false)
     setInputValue("")
      dispatch(setSearchParamsQuery({ keyword: '' }));
   }

   return {
    inputValue,
    showSuggestions,
    data,
    isFetching,
    error,
    handleInputSearch,
    handleClickToSearchResult,
    searchRef
   }
}