import styled from "styled-components";
import {FC, ReactNode} from "react";

type textProps = {
    children: ReactNode
    color?: string
    fontWeight?: number;
}

const TextWrapper = styled.div<textProps>`
    color: ${props => props.color ?? props.theme.textColors.textColor};
    font-weight: ${props => props.fontWeight};
`

const Text: FC<textProps> = ({children, color, fontWeight}) => {
    return (
        <TextWrapper color={color} fontWeight={fontWeight}>
            {children}
        </TextWrapper>
    )
}

export default Text