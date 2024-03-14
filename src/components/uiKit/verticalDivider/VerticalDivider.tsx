import {FC} from "react";
import styled from "styled-components";

type verticalDividerProps = {
    color?: string;
    margin?: string;
}

const VerticalDividerWrapper = styled.div<verticalDividerProps>`
    border-left: 1px solid ${props => props.color ?? props.theme.themeColors.invertedBorderColor};
    height: 100%;
    width: 1px;
    margin: ${props => props.margin};
`

const VerticalDivider: FC<verticalDividerProps> = ({color, margin}) => {
    return (
        <VerticalDividerWrapper color={color} margin={margin}></VerticalDividerWrapper>
    )
}

export default VerticalDivider