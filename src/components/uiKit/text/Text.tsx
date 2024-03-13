import styled from "styled-components";
import {FC, ReactNode} from "react";

type textProps = {
    children: ReactNode
    color?: string
}

const TextWrapper = styled.div<textProps>`
    color: ${props => props.color ?? props.theme.textColors.textColor};
`

const Text: FC<textProps> = ({children, color}) => {
    return (
        <TextWrapper color={color}>
            {children}
        </TextWrapper>
    )
}

export default Text