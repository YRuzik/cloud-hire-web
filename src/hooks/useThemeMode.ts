import {useCallback, useEffect, useState} from "react";
import {Themes} from "../styles/common.ts";

export const useThemeMode = () => {
    const [theme, setTheme] = useState(Themes.light);

    const setMode = useCallback((mode: Themes) => {
        window.localStorage.setItem('theme-cloud-hire', mode);
        setTheme(mode);
    }, [])

    const themeToggler = useCallback((key: Themes) => {
        setMode(key)
        console.log(key)
    }, [])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme-cloud-hire');
        localTheme && setTheme(Themes.light);
    }, []);

    return { theme, themeToggler };
};

export default useThemeMode;