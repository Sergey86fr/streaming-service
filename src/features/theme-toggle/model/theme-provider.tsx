import type { ReactNode } from "react"
import { useTheme } from "./use-theme";


interface IThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}:IThemeProviderProps) => {
    useTheme();
    return  (
         <>{children}</>
    )
    
}