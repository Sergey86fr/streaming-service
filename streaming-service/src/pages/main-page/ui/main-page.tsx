import { Carousels } from "../../../features/film-carousels/ui";
import styles from "./main-page.module.css"
import cn from "classnames"


export const MainPage = () => {

 return (
  <div className={cn(styles.mainPage)}>
    <Carousels />
  </div>
 )
};

