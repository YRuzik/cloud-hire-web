import {BodyContainer} from "../../../styles/commonStyles.ts";
import Padding from "../../uiKit/padding/Padding.tsx";
import Text from "../../uiKit/text/Text.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";

const News = () => {
    const styles = useContext(ThemeContext)
    return (
        <BodyContainer>
            <Padding customPadding={"10rem 0"}>
                <Text>
                    <h2>Keep up with the latest</h2>
                </Text>
                <Text color={styles?.textColors.textSecondaryColor}>
                    <p>Stay updated on new releases and features, guides, and community updates.</p>
                </Text>
            </Padding>
        </BodyContainer>
    )
}

export default News