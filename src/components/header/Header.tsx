import CloudHireCard from "../uiKit/cloudHireCard/CloudHireCard.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import {HeaderWrapper} from "./Header.style.tsx";

const Header = () => {
    const styles = useContext(ThemeContext)
    return (
        <CloudHireCard decoration={{backgroundColor: styles?.cardColors.cardSecondaryColor, margin: "10px"}}>
            <HeaderWrapper>

            </HeaderWrapper>
        </CloudHireCard>
    )
}

export default Header