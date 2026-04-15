import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type IThemeMode  =  'dark' | 'light'

export interface IThemeState {
    mode: IThemeMode;
}

const getTheme = ():IThemeMode => {
    const localTheme = localStorage.getItem('themeKino') as IThemeMode;
    if(localTheme) {
        return localTheme;
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
        return 'dark';
    }
    return 'light';
}


const initialState: IThemeState = {
    mode: getTheme(),
}


export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
          state.mode = state.mode === 'dark' ? 'light' : 'dark';
          localStorage.setItem('themeKino',state.mode)
        },
        setTheme: (state, action: PayloadAction<IThemeMode>) => {
            state.mode = action.payload;
            localStorage.setItem('themeKino', state.mode)
        }
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

