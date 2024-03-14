import CloudHireCard from "../uiKit/cloudHireCard/CloudHireCard.tsx";
import {useCallback, useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import {HeaderActions, HeaderContainer, HeaderLogo, HeaderSpacer, HeaderWrapper} from "./Header.style.tsx";
import Text from "../uiKit/text/Text.tsx";
import {BaseDimensions} from "../../styles/themes/light.ts";
import SelectablePin from "../uiKit/selectablePin/SelectablePin.tsx";
import {Link} from "react-router-dom";
import {v4} from "uuid";
import VerticalDivider from "../uiKit/verticalDivider/VerticalDivider.tsx";

const Header = () => {
    const pinTitles = ["Home", "Plans", "Contact", "About", "Community"]

    const [selectedPin, setSelectedPin] = useState("Home")
    const styles = useContext(ThemeContext)

    const onSelectHandler = useCallback((pin: string) => {
        setSelectedPin(pin)
    }, [])

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
                    <VerticalDivider margin={"0 3rem"}/>
                    <HeaderActions>
                        {pinTitles.map((title) => <SelectablePin key={v4()} title={title}
                                                                 isSelected={selectedPin === title}
                                                                 onClick={() => onSelectHandler(title)}/>)}
                    </HeaderActions>
                    <HeaderSpacer/>
                    <Link to={"/"}>Get started</Link>
                </HeaderContainer>
            </CloudHireCard>
        </HeaderWrapper>
    )
}

export default Header