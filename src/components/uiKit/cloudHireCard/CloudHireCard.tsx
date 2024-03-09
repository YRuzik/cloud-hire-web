import {CardWrapper} from "./CloudHireCard.style.tsx";
import {Themes} from "../../../styles/common.ts";
import useThemeMode from "../../../hooks/useThemeMode.ts";

const CloudHireCard = () => {
    const {themeToggler} = useThemeMode()
    return(
        <CardWrapper>
            <div>
                Привет, я карточка
            </div>
            <button onClick={() => themeToggler(Themes.light)}>
                Light
            </button>
            <button onClick={() => themeToggler(Themes.dark)}>
                Dark
            </button>
        </CardWrapper>
    )
}

export default CloudHireCard