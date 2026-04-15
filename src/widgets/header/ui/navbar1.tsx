// import { useState } from "react";
// import styles from "./navbar.module.css"
// import cn from "classnames"
// import { Lineicons } from "@lineiconshq/react-lineicons";
// import { MenuHamburger1Outlined } from "@lineiconshq/free-icons"; 
// import { Link, useNavigate} from "react-router-dom";
// import { DropdownMenu } from "./dropdown-menu";
// import { useAuth } from "../../../entities/user/lib/use-auth";
// import { Dropdown, Logo } from "../../../shared/ui";
// import { Search } from "../../../features/film-search/ui";



// export const Navbar1 = () => {
//     const[isOpen, setIsOpen] = useState(false)

    

//      const navigate = useNavigate();
//   const { isAuthenticated, logout, refetch } = useAuth();
//   console.log(isAuthenticated, 'click');
  

//   const handleClictToExit = async () => {
//    await logout();
//    await refetch()
  
//      navigate("/")

   
//   }

//     const handleDropdownToggle = () => {
// setIsOpen(prev => !prev)
//     }



//     // useEffect(() => {
//     //   async function getMovies() {
//     //   const resp = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1', {
//     //       headers: {
//     //           "Content-Type": "application/json",
//     //           "X-API-KEY": API_KEY,
//     //       },
//     //   });
//     //   const respData = await resp.json();
//     //   console.log(respData);
//     // }

//     // getMovies()

//     // },[])




//   return (
//     <>
    
//       <div className={cn(styles.navbar)}>
//         <div style={{display:'flex', alignItems:'center', gap:30}}>
//         <button style={{backgroundColor:"#000", border:"none"}} onClick={handleDropdownToggle}>
//           <Lineicons  icon={MenuHamburger1Outlined} color='#fff' />
//           </button>
//         <Logo />
//         <Search />
//         <Link to={isAuthenticated?'/favorites':'/auth/login'} style={{color:'white'}}>Избранное</Link>
//         {isAuthenticated ?<button onClick={handleClictToExit}>выйти</button>: null }
//         <button onClick={handleClictToExit}>{isAuthenticated? 'выйти':' войти'}</button>/
//         </div>
    
    
//         <Dropdown children={<DropdownMenu/>} handleToggle={handleDropdownToggle} isOpen={isOpen} />
//       </div>
//     </>
//   );
// };
