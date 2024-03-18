import styled from "styled-components";
import {FC, ReactNode} from "react";

type textProps = {
    children: ReactNode
    color?: string
    fontWeight?: number;
    fontFamily?: "Argentum" | "FiraMono";
    maxLines?: number;
}

const TextWrapper = styled.div<textProps>`
    color: ${props => props.color ?? props.theme.textColors.textColor};
    font-weight: ${props => props.fontWeight};
    font-family: ${props => props.fontFamily ?? "Argentum"};
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: ${props => props.maxLines};
    -webkit-box-orient: vertical;
    display: -webkit-box;
`

const Text: FC<textProps> = ({children, maxLines, color, fontWeight, fontFamily}) => {
    return (
        <TextWrapper color={color} fontWeight={fontWeight} fontFamily={fontFamily} maxLines={maxLines}>
            {children}
        </TextWrapper>
    )
}

export default Text