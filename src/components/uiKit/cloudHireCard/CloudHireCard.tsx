import {FC, ReactNode} from "react";
import {ICardDecoration} from "../../../interfaces/IStyles.ts";
import Padding from "../padding/Padding.tsx";
import styled from "styled-components";

type cloudHireCardProps = {
    onClick?: () => void,
    decoration?: ICardDecoration
    children: ReactNode
    padding?: string
    height?: number
    widthPercent?: number;
}

const CardWrapper = styled.div<cloudHireCardProps>`
    background-color: ${props => props.decoration?.backgroundColor ?? props.theme.cardColors.cardColor};
    border-radius: ${props => props.decoration?.borderRadius ?? props.theme.dimensions.borderRadius};
    border-color: ${props => props.decoration?.border?.color ?? props.theme.themeColors.invertedBorderColor};
    border-style: ${props => props.decoration?.border?.style ?? "solid"};
    border-width: ${props => props.decoration?.border?.size ?? "1px"};
    margin: ${props => props.decoration?.margin ?? "0px"};
    height: ${props => props.height}px;
    width: ${props => props.widthPercent}%;
    box-shadow: 0 7px 20px 5px rgba(0,0,0,.1);
`

const CloudHireCard: FC<cloudHireCardProps> = ({
        children,
        widthPercent,
        decoration,
        onClick,
        padding,
        height
    }) => {
    return (
        <CardWrapper onClick={onClick} decoration={decoration} height={height} widthPercent={widthPercent}>
            <Padding customPadding={padding}>
                {children}
            </Padding>
        </CardWrapper>
    )
}

export default CloudHireCard