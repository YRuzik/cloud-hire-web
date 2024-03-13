import styled from "styled-components";
import {useCallback, useContext, useEffect, useState} from "react";
import {ThemeContextData} from "../../../contexts/ThemeContext.tsx";
import {Light} from "../../../styles/themes/light.ts";
import {Dark} from "../../../styles/themes/dark.ts";

const ThemeTogglerWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    z-index: 9999999;
`

const ThemeToggler = () => {
    const {setTheme} = useContext(ThemeContextData)
    const [isOpen, setIsOpen] = useState(false)

    const onOpenHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === "]" || e.key === "ъ") {
            setIsOpen((prevState) => (!prevState))
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", onOpenHandler)
        return () => {
            window.removeEventListener("keydown", onOpenHandler)
        }
    }, [onOpenHandler]);

    return (
        <>
            {isOpen && <ThemeTogglerWrapper>
                <button onClick={() => setTheme(Light)}>
                    LIGHT
                </button>
                <button onClick={() => setTheme(Dark)}>
                    DARK
                </button>
            </ThemeTogglerWrapper>}
        </>
    )
}

export default ThemeToggler