import {BodyContainer} from "../../../styles/commonStyles.ts";
import {
    HostingSolutionsCards,
    HostingSolutionsHeadline,
    HostingSolutionsHeadlineSize,
    HostingSolutionsWrapper
} from "./HostingSolutions.style.tsx";
import Text from "../../uiKit/text/Text.tsx";
import TextCard from "../../uiKit/iconCard/IconCard.tsx";
import Padding from "../../uiKit/padding/Padding.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import Icon, {CloudHireIcons} from "../../uiKit/icon/Icon.tsx";

const HostingSolutions = () => {
    const styles = useContext(ThemeContext)
    return (
        <HostingSolutionsWrapper>
            <BodyContainer>
                <Padding customPadding={"10rem 0"}>
                    <Padding customPadding={"0 0 5rem 0"}>
                        <HostingSolutionsHeadline>
                            <HostingSolutionsHeadlineSize>
                                <Text color={styles?.textColors.invertedTextColor}>
                                    <h2>
                                        Our hosting solutions for your needs
                                    </h2>
                                </Text>
                            </HostingSolutionsHeadlineSize>
                        </HostingSolutionsHeadline>
                    </Padding>
                    <HostingSolutionsCards>
                        <TextCard
                            leadingIcon={<Icon icon={CloudHireIcons.smbShare} size={50}
                                               color={styles?.themeColors.dangerColor}/>}
                            title={"Shared Hosting"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                        <TextCard
                            leadingIcon={<Icon icon={CloudHireIcons.syncLock} size={50}
                                               color={styles?.baseColors.softBlue}/>}
                            title={"Shared Hosting"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                        <TextCard
                            leadingIcon={<Icon icon={CloudHireIcons.vpnKey} size={50}
                                               color={styles?.themeColors.successColor}/>}
                            title={"Shared Hosting"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                        <TextCard
                            leadingIcon={<Icon icon={CloudHireIcons.visibilityLock} size={50}
                                               color={styles?.themeColors.accent}/>}
                            title={"Shared Hosting"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                        <TextCard
                            leadingIcon={<Icon icon={CloudHireIcons.cloudUpload} size={50}
                                               color={styles?.themeColors.waitingColor}/>}
                            title={"Shared Hosting"}
                            text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                    </HostingSolutionsCards>
                </Padding>
            </BodyContainer>
        </HostingSolutionsWrapper>
    )
}

export default HostingSolutions