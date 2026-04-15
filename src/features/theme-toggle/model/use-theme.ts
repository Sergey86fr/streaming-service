import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store/store";
import { useEffect } from "react";

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // Применяем тему к корневому элементу
    document.documentElement.setAttribute('data-theme', theme);
    
    // // Опционально: добавляем класс к body для дополнительных стилей
    // if (theme === 'dark') {
    //   document.body.classList.add('dark-theme');
    //   document.body.classList.remove('light-theme');
    // } else {
    //   document.body.classList.add('light-theme');
    //   document.body.classList.remove('dark-theme');
    // }

      localStorage.setItem('themeKino', theme);
  }, [theme]);

  return { theme };
}