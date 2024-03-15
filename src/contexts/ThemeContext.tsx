import {createContext, FC, ReactNode, useMemo, useState} from "react";
import {DefaultTheme, ThemeProvider} from "styled-components";
import {Light} from "../styles/themes/light.ts";

type ThemeContextProps = {
    children: ReactNode
}

type ThemeContextDataType = {
    setTheme: (v: DefaultTheme) => void;
}

const themeCtxInitialData: ThemeContextDataType = {
    setTheme: () => {
    },
}

export const ThemeContextData = createContext(themeCtxInitialData)

const ThemeContext: FC<ThemeContextProps> = ({children}) => {
    const [theme, setTheme] = useState(Light)

    const memoized = useMemo((): ThemeContextDataType => (
            {
                setTheme,
            }
        ),
        [theme]
    )

    return (
        <ThemeContextData.Provider value={memoized}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContextData.Provider>
    )
}

export default ThemeContext