import {FC, ReactNode} from "react";
import {ICardDecoration} from "../../../interfaces/IStyles.ts";
import Padding from "../padding/Padding.tsx";
import styled from "styled-components";

type cloudHireCardProps = {
    onClick?: () => void,
    decoration?: ICardDecoration
    children: ReactNode
    padding?: string
}

const CardWrapper = styled.div<cloudHireCardProps>`
    background-color: ${props => props.decoration?.backgroundColor ?? props.theme.cardColor};
    border-radius: ${props => props.decoration?.borderRadius ?? props.theme.borderRadius};
    border: 1px solid ${props => props.theme.borderColor};
`

const CloudHireCard: FC<cloudHireCardProps> = ({children, decoration, onClick, padding}) => {
    return (
        <CardWrapper onClick={onClick} decoration={decoration}>
            <Padding customPadding={padding}>
                {children}
            </Padding>
        </CardWrapper>
    )
}

export default CloudHireCard