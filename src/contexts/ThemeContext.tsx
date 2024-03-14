import {createContext, FC, ReactNode, useMemo, useState} from "react";
import {DefaultTheme, ThemeProvider} from "styled-components";
import {Light} from "../styles/themes/light.ts";
import {IButtonDecoration} from "../interfaces/IStyles.ts";

type ThemeContextProps = {
    children: ReactNode
}

type ButtonStyles = {
    outlinedButton: IButtonDecoration
    elevatedButton: IButtonDecoration
    invertedButton: IButtonDecoration
}

type ThemeContextDataType = {
    setTheme: (v: DefaultTheme) => void;
    buttonStyles?: ButtonStyles
}

const themeCtxInitialData: ThemeContextDataType = {
    setTheme: () => {
    },
    buttonStyles: undefined
}

export const ThemeContextData = createContext(themeCtxInitialData)

const ThemeContext: FC<ThemeContextProps> = ({children}) => {
    const [theme, setTheme] = useState(Light)

    const memoized = useMemo((): ThemeContextDataType => (
            {
                setTheme,
                buttonStyles: {
                    outlinedButton: {
                        border: `1px solid ${theme.themeColors.backgroundColor}`,
                        borderRadius: theme.dimensions.minBorderRadius,
                        backgroundColor: '',
                        color: theme.textColors.invertedTextColor,
                        padding: '',
                    },
                    elevatedButton: {
                        border: '',
                        backgroundColor: theme.themeColors.brandColor,
                        borderRadius: theme.dimensions.minBorderRadius,
                        color: theme.themeColors.onBrandColor,
                        padding: '',
                    },
                    invertedButton: {
                        border: '',
                        backgroundColor: theme.themeColors.backgroundColor,
                        borderRadius: theme.dimensions.minBorderRadius,
                        color: theme.textColors.textColor,
                        padding: '',
                    }
                }
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