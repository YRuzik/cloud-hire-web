import {FC} from "react";
import styled from "styled-components";
import Color from "color"
import Text from "../text/Text.tsx";

type colorizedLabelProps = {
    title: string
    backgroundColor?: string
    textColor?: string
}

const ColorizedLabelWrapper = styled.div<{textColor?: string, backgroundColor?: string}>`
    border: 1px solid ${props => Color(props.theme.themeColors.successColor).black(20).string()};
    background-color: ${props => props.theme.themeColors.successColor};
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.dimensions.minBorderRadius};
    display: inline-block;
`

const ColorizedLabel: FC<colorizedLabelProps> = ({textColor, backgroundColor, title}) => {
    return (
        <div>
            <ColorizedLabelWrapper textColor={textColor} backgroundColor={backgroundColor}>
                <Text fontFamily={"FiraMono"} color={textColor}>
                    {title}
                </Text>
            </ColorizedLabelWrapper>
        </div>
    )
}

export default ColorizedLabel