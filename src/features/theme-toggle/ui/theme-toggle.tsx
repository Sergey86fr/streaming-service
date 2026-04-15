
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../app/store/store";
import { toggleTheme } from "../../../app/store/slices/theme-slice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import cn from "classnames"
import styles from "./theme-toggle.module.css"


export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state:RootState) => state.theme.mode);


    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    };

    return (
     <div 
      className={cn(styles.themeToggle, {
        [styles.dark]: theme === 'dark',
        // [styles.light]: theme === 'light',
      })}
      onClick={handleToggleTheme}
    >
      <div className={cn(styles.toggleTrack)}>
        <div className={cn(styles.toggleIcons)}>
          <MdOutlineLightMode />
          <MdOutlineDarkMode />
        </div>
        <div className={cn(styles.toggleThumb, {
            [styles.dark]: theme === 'dark',
            // [styles.light]: theme === 'light',
        })} />
      </div>
    </div>
    )
}