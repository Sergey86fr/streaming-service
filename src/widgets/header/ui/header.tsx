import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../entities/user/lib/use-auth";
import cn from "classnames"
import styles from "./header.module.css"
import Lineicons from "@lineiconshq/react-lineicons";
import { MenuHamburger1Outlined } from "@lineiconshq/free-icons";
import { Dropdown, Logo } from "../../../shared/ui";
import { Search } from "../../../features/film-search/ui";
import { DropdownMenu } from "./dropdown-menu";
import { ThemeToggle } from "../../../features/theme-toggle/ui/theme-toggle";


export const Header = () => {
     const[isOpen, setIsOpen] = useState(false)

    

     const navigate = useNavigate();
  const { isAuthenticated, logout, refetch } = useAuth();
  console.log(isAuthenticated, 'click');
  

  const handleClictToExit = async () => {
    if(!isAuthenticated) navigate("/auth/login")
   await logout();
   await refetch()
  
     navigate("/")

   
  }

    const handleDropdownToggle = () => {
setIsOpen(prev => !prev)
    }
    return (
       <>
    
      <div className={cn(styles.header)}>
        <div className={cn(styles.leftGroup)}>
        <button  className={cn(styles.burgerMenu)} style={{ border:"none"}} onClick={handleDropdownToggle}>
          <Lineicons className={cn(styles.burgerMenuIcon)}  icon={MenuHamburger1Outlined}  />
          </button>
        <Logo className={cn(styles.logo)} />

        </div>
        <Search className={cn(styles.searchInput)} />
        <div className={cn(styles.rightGroup)}>

        <Link className={cn(styles.favoritesLink)} to={isAuthenticated?'/favorites':'/auth/login'} >Избранное</Link>
        {/* {isAuthenticated ?<button onClick={handleClictToExit}>выйти</button>: null } */}
        <ThemeToggle className={cn(styles.themeToggle)} />
        <button className={cn(styles.authBtn)} onClick={handleClictToExit}>{isAuthenticated? 'выйти':' войти'}</button>
        
        </div>
    
    
      </div>
        <Dropdown children={<DropdownMenu handleToggle={handleDropdownToggle}/>} handleClose={handleDropdownToggle} isOpen={isOpen} />
    </>
    )
}