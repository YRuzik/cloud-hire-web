import {BodyContainer} from "../../../styles/commonStyles.ts";
import enterprise_cloud from "../../../assets/img/enterprise-cloud.png"

import {
    WelcomeBlockContent,
    WelcomeBlockImage,
    WelcomeBlockImageWrapper,
    WelcomeBlockWrapper
} from "./WelcomeBlock.styles.tsx";
import ColorizedLabel from "../../uiKit/colorizedLabel/ColorizedLabel.tsx";
import Text from "../../uiKit/text/Text.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";

const WelcomeBlock = () => {
    const theme = useContext(ThemeContext)
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
                </WelcomeBlockContent>
                <WelcomeBlockImageWrapper>
                    <WelcomeBlockImage src={enterprise_cloud}/>
                </WelcomeBlockImageWrapper>
            </WelcomeBlockWrapper>
        </BodyContainer>
    )
}

export default WelcomeBlock