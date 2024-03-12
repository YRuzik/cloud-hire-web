import CloudHireCard from "../uiKit/cloudHireCard/CloudHireCard.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import {IStyles} from "../../interfaces/IStyles.ts";
import {HeaderWrapper} from "./Header.style.tsx";

const Header = () => {
    const styles = useContext(ThemeContext) as IStyles
    return (
        <CloudHireCard decoration={{backgroundColor: styles.cardSecondaryColor, margin: "10px"}}>
            <HeaderWrapper>

            </HeaderWrapper>
        </CloudHireCard>
    )
}

export default Header