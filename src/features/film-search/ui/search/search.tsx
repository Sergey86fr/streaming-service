import { useState } from "react";
import { useSearch } from "../../model/use-search";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { SelectMovies } from "../../../film-select/ui";
import { Dropdown } from "../../../../shared/ui";
import cn from "classnames"
import styles from "./search.module.css"

export const Search = () => {

  const[isOpenDropdown, setIsOpenDropdown] = useState(false)
  
  const { inputValue, showSuggestions, data, 
    // isFetching,
     error, handleInputSearch, handleClickToSearchResult, searchRef} = useSearch()
  //   const handleReset = () => {
  //   setInputValue('');
  //   dispatch(setSearchParamsQuery({ keyword: '', page: 1 }));
  // };

    //  if (isFetching) return <div>Поиск...</div>;
  if (error) return <div>Ошибка поиска</div>;

  const handleToggleDropdownSearchMenu = () => {
      
     setIsOpenDropdown((prev) => !prev)
  }

    const handleCloseDropdown = () => {
        setIsOpenDropdown(false);
    };

  


  return (
    <div className={cn(styles.search)} ref={searchRef} >
      <input className={cn(styles.inputSearch)} value={inputValue} onChange={handleInputSearch} placeholder="Введите название фильма ..."/>
      <div className={cn(styles.searchMenuBtn)} onClick={handleToggleDropdownSearchMenu}>
      <TbAdjustmentsHorizontal className={cn(styles.searchMenuIcon)} 
      // color="#605f5f"  
      />
      </div>
       {/* {isFetching && (
          <div
            style={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span>Поиск...</span>

          </div>
        )} */}
      {showSuggestions && data && data.items.length > 0 && <div style={{position:"absolute", top:"100%", left:0, width:"100%", backgroundColor:"#fff", borderRadius:'5px',padding:5, color:"#000"}}>{data.items.map((item) => (
        <p key={item.kinopoiskId} onClick={() => handleClickToSearchResult(item.kinopoiskId)}>{item.nameRu}</p>
      ))}</div>}
        
      <Dropdown handleClose={handleCloseDropdown} children={<SelectMovies closeDropdown={handleCloseDropdown}/>} isOpen={isOpenDropdown} />
    </div>
  );
};
