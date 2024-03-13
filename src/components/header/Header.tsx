import CloudHireCard from "../uiKit/cloudHireCard/CloudHireCard.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import {HeaderActions, HeaderContainer, HeaderLogo, HeaderSpacer, HeaderWrapper} from "./Header.style.tsx";
import Text from "../uiKit/text/Text.tsx";
import {BaseDimensions} from "../../styles/themes/light.ts";
import SelectablePin from "../uiKit/selectablePin/SelectablePin.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    const styles = useContext(ThemeContext)
    return (
        <HeaderWrapper>
            <CloudHireCard decoration={{
                backgroundColor: styles?.cardColors.cardSecondaryColor,
                margin: BaseDimensions.margin,
                padding: BaseDimensions.padding,
                borderRadius: BaseDimensions.minBorderRadius
            }}>
                <HeaderContainer>
                    <HeaderLogo>
                        <Text>
                            CloudHire
                        </Text>
                    </HeaderLogo>
                    <HeaderActions>
                        <SelectablePin title={"Home"}/>
                        <SelectablePin title={"Plans"}/>
                        <SelectablePin title={"Contact"}/>
                        <SelectablePin title={"About"}/>
                        <SelectablePin title={"Community"}/>
                    </HeaderActions>
                    <HeaderSpacer/>
                    <Link to={"/"}>Get started</Link>
                </HeaderContainer>
            </CloudHireCard>
        </HeaderWrapper>
    )
}

export default Header