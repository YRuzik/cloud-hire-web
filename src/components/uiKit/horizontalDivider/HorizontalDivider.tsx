import {FC} from "react";
import styled from "styled-components";

type horizontalDividerProps = {
    color?: string;
    margin?: string;
}

const HorizontalDividerWrapper = styled.div<horizontalDividerProps>`
    border-bottom: 2px solid ${props => props.color ?? props.theme.themeColors.invertedBorderColor};
    height: 2px;
    width: 100%;
    margin: ${props => props.margin};
`

const HorizontalDivider: FC<horizontalDividerProps> = ({color, margin}) => {
    return (
        <HorizontalDividerWrapper color={color} margin={margin}></HorizontalDividerWrapper>
    )
}

export default HorizontalDivider