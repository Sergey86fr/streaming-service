import type { FormEvent } from "react";
import { selectOrdersList } from "../../model/select-order-list";
import { useSelectMovies } from "../../model/use-select-movies";

interface ISelectMoviesProps {
  closeDropdown: () => void;
}

export const SelectMovies = ({closeDropdown}:ISelectMoviesProps) => {
  const {
    isLoading,
    handleSubmit,
    formData,
    handleChange,
    data,
    selectYearsList,
    // handleReset,
  } = useSelectMovies();

  if (isLoading) {
    return <div className="loading">Загрузка фильтров...</div>;
  }

const handleSubmitForm = (e:FormEvent) => {
  handleSubmit(e)
  closeDropdown()
}

  return (
    <form onSubmit={handleSubmitForm} style={{display:'flex', flexDirection:'column', gap:20}}>
      <label htmlFor="order" style={{color:'#000'}}>Сортировка</label>
      <select
        value={formData.order}
        onChange={handleChange}
        name="order"
        id="order"
      >
        {selectOrdersList.map((order) => (
          <option key={order.title} value={order.value}>
            {order.title}
          </option>
        ))}
      </select>

      <label  style={{color:'#000'}} htmlFor="country">Страна</label>
      <select
        value={formData.country}
        onChange={handleChange}
        name="country"
        id="country"
      >
        <option value="">Все страны</option>
        {data?.countries.map((country) => (
          <option key={country.country} value={country.id}>
            {country.country}
          </option>
        ))}
      </select>

      <label  style={{color:'#000'}} htmlFor="genre">Жанр</label>
      <select
        value={formData.genre}
        onChange={handleChange}
        name="genre"
        id="genre"
      >
        <option value="">Все жанры</option>
        {data?.genres.map((genre) => (
          <option key={genre.genre} value={genre.id}>
            {genre.genre}
          </option>
        ))}
      </select>

      <label  style={{color:'#000'}} htmlFor="year">Дата выхода</label>
      <select
        value={formData.year}
        onChange={handleChange}
        name="year"
        id="year"
      >
        <option value="">Все годы</option>
        {selectYearsList.map((year) => (
          <option key={year.title} value={year.value}>
            {year.title}
          </option>
        ))}
      </select>
      <button style={{padding:5,borderRadius:5, backgroundColor:"#fff", border: '1px solid', cursor:'pointer', marginTop:20}} type="submit">Применить фильтры</button>
      {/* <button onClick={handleReset}>Сбросить фильтры</button> */}
    </form>
  );
};

//4.50
