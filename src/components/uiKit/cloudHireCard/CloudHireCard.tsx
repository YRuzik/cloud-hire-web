import {FC, ReactNode} from "react";
import {ICardDecoration} from "../../../interfaces/IStyles.ts";
import Padding from "../padding/Padding.tsx";
import styled from "styled-components";

type cloudHireCardProps = {
    onClick?: () => void,
    decoration?: ICardDecoration
    children: ReactNode
    padding?: string
    margin?: string
}

const CardWrapper = styled.div<cloudHireCardProps>`
    background-color: ${props => props.decoration?.backgroundColor ?? props.theme.cardColor};
    border-radius: ${props => props.decoration?.borderRadius ?? props.theme.borderRadius};
    border-color: ${props => props.decoration?.border?.color ?? props.theme.borderColor};
    border-style: ${props => props.decoration?.border?.style ?? "solid"};
    border-width: ${props => props.decoration?.border?.size ?? "1px"};
    margin: ${props => props.decoration?.margin ?? "0px"};
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