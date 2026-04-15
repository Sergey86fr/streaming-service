import { useDispatch } from "react-redux";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGetGenresAndCountriesQuery } from "../../../shared/api/kinopoiskApi";
import { setSearchParamsQuery } from "../../../app/store/slices/search-query-slice";

export const useSelectMovies = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate()
    
      const { data, isLoading } = useGetGenresAndCountriesQuery();
    
      const [formData, setFormData] = useState({
        order: 'NUM_VOTE',
        country: '',
        genre: '',
        year: '',
      });
    
      
      const selectYearsList = new Array(80)
        .fill(null)
        .map((_, index) => ({
          title: new Date().getFullYear() - index,
          value: new Date().getFullYear() - index,
        }));
    
         const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
        const handleSubmit =  (e: FormEvent) => {
        e.preventDefault();
        //  dispatch(resetSearchParamsQuery());
        
        // Преобразуем данные формы в формат для Redux
        const params = {
          order: formData.order,
          countries: formData.country ? [Number(formData.country)] : [],
          genres: formData.genre ? [Number(formData.genre)] : [],
          year: formData.year ? Number(formData.year) : undefined,
          page: 1,
        };
        //  dispatch(resetParamsQuery())
        // dispatch(setSearchParamsQuery(params));

      
        
        const isOnFilmsPage = location.pathname.startsWith('/films');
        if (!isOnFilmsPage) {
          

     navigate(
       '/films', {
        state: {params}
       }
      );
        } else {
              dispatch(setSearchParamsQuery(params));
        }

        handleReset()
            
    
      };
    
       const handleReset = () => {
        setFormData({
          order: 'NUM_VOTE',
          country: '',
          genre: '',
          year: '',
        });
      };
      return {
        data,
        isLoading,
        selectYearsList,
        handleChange,
        handleSubmit,
        handleReset,
        formData
      }
}