import {FC, ReactNode, useMemo} from "react";
import {themeGetter} from "../styles/common.ts";
import {ThemeProvider} from "styled-components";
import useThemeMode from "../hooks/useThemeMode.ts";

type ThemeContextProps = {
    children: ReactNode
}

const ThemeContext: FC<ThemeContextProps> = ({children}) => {
    const { theme } = useThemeMode();
    const themeMode = useMemo(() => themeGetter(theme), [theme])
    return (
        <ThemeProvider theme={themeMode}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContext