import {createContext, FC, ReactNode, useMemo, useState} from "react";
import {ThemeProvider} from "styled-components";
import {Light} from "../styles/themes/light.ts";
import {IStyles} from "../interfaces/IStyles.ts";

type ThemeContextProps = {
    children: ReactNode
}

type ThemeContextDataType = {
    setTheme: (v: IStyles) => void
}

const themeCtxInitialData: ThemeContextDataType = {
    setTheme: () => {
    }
}

export const ThemeContextData = createContext(themeCtxInitialData)

const ThemeContext: FC<ThemeContextProps> = ({children}) => {
    const [theme, setTheme] = useState(Light)

    const memoized = useMemo((): ThemeContextDataType => ({
        setTheme
    }), [])

    return (
        <ThemeContextData.Provider value={memoized}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContextData.Provider>
    )
}

export default ThemeContext