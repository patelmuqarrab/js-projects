import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    tMode:"light",
    tDark: () => {},
    tLight: () => {},
})
// In createContext you can give both variables and methods


export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}
// the above export reduces you work i.e you just have to import useTheme and you can access ThemeContext
