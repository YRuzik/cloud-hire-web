import styled from "styled-components";
import {FC, ReactNode} from "react";

type textProps = {
    children: ReactNode
    color?: string
    fontWeight?: number;
    fontFamily?: "Argentum" | "FiraMono"
}

const TextWrapper = styled.div<textProps>`
    color: ${props => props.color ?? props.theme.textColors.textColor};
    font-weight: ${props => props.fontWeight};
    font-family: ${props => props.fontFamily ?? "Argentum"};
`

const Text: FC<textProps> = ({children, color, fontWeight, fontFamily}) => {
    return (
        <TextWrapper color={color} fontWeight={fontWeight} fontFamily={fontFamily}>
            {children}
        </TextWrapper>
    )
}

export default Text