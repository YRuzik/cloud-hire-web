import {BodyContainer} from "../../../styles/commonStyles.ts";
import enterprise_cloud from "../../../assets/img/enterprise-cloud.png"

import {
    WelcomeBlockContent,
    WelcomeBlockImage,
    WelcomeBlockImageWrapper, WelcomeBlockOurPartners,
    WelcomeBlockWrapper
} from "./WelcomeBlock.styles.tsx";
import ColorizedLabel from "../../uiKit/colorizedLabel/ColorizedLabel.tsx";
import Text from "../../uiKit/text/Text.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import CloudHireButton from "../../uiKit/cloudHireButton/CloudHireButton.tsx";
import HorizontalDivider from "../../uiKit/horizontalDivider/HorizontalDivider.tsx";

import appleLogo from "../../../assets/img/sponsors/apple.svg"
import diorLogo from "../../../assets/img/sponsors/dior.svg"
import renaultLogo from "../../../assets/img/sponsors/renault.svg"
import tronLogo from "../../../assets/img/sponsors/tron.svg"
import underArmorLogo from "../../../assets/img/sponsors/under-armor.svg"
import InfinityScroll from "../../uiKit/infinityScroll/InfinityScroll.tsx";


const WelcomeBlock = () => {
    const theme = useContext(ThemeContext)
    const sponsorsArray = [appleLogo, diorLogo, renaultLogo, tronLogo, underArmorLogo]
    return (
        <BodyContainer>
            <WelcomeBlockWrapper>
                <WelcomeBlockContent>
                    <ColorizedLabel textColor={theme?.themeColors.onSuccessColor} title={"Unleash the power of cloud base"}/>
                    <Text>
                        <h1>
                            Empowering your cloud and growth
                        </h1>
                    </Text>
                    <Text color={theme?.textColors.textSecondaryColor}>
                        <p>
                            Empowering your journey through cutting - edge cloud solutions, revolutionizing efficiency
                            and fostering innovation in the digital landscape.
                        </p>
                    </Text>
                    <CloudHireButton>
                        Learn more
                    </CloudHireButton>
                    <WelcomeBlockOurPartners>
                        <Text color={theme?.textColors.textSecondaryColor} fontFamily={"FiraMono"}>
                            Our trusted partners
                        </Text>
                        <HorizontalDivider margin={"1rem 0"}/>
                        <InfinityScroll imgArray={sponsorsArray}/>
                    </WelcomeBlockOurPartners>
                </WelcomeBlockContent>
                <WelcomeBlockImageWrapper>
                    <WelcomeBlockImage src={enterprise_cloud}/>
                </WelcomeBlockImageWrapper>
            </WelcomeBlockWrapper>
        </BodyContainer>
    )
}

export default WelcomeBlock