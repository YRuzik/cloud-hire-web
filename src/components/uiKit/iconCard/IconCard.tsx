import CloudHireCard from "../cloudHireCard/CloudHireCard.tsx";
import {FC, ReactNode, useContext} from "react";
import Text from "../text/Text.tsx";
import styled, {ThemeContext} from "styled-components";

type textCardProps = {
    leadingIcon?: ReactNode;
    title: string;
    text: string;
}

const TextCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const TextCard: FC<textCardProps> = ({text, title, leadingIcon}) => {
    const styles = useContext(ThemeContext)
    return (
        <CloudHireCard widthPercent={30} height={300} decoration={{border: {color: styles?.themeColors.borderColor}}}>
            <TextCardWrapper>
                {leadingIcon}
                <Text color={styles?.textColors.invertedTextColor}>
                    <h3>
                        {title}
                    </h3>
                </Text>
                <Text maxLines={7} color={styles?.textColors.textSecondaryColor}>
                    {text}
                </Text>
            </TextCardWrapper>
        </CloudHireCard>
    )
}

export default TextCard