import {FC, ReactNode} from "react";
import styled from "styled-components";

type paddingProps = {
    children: ReactNode;
    customPadding?: string;
}

const PaddingWrapper = styled.div<paddingProps>`
    padding: ${props => props.customPadding ?? props.theme.dimensions.padding};
    height: 100%;
`

const Padding: FC<paddingProps> = ({children, customPadding}) => {
    return (
        <PaddingWrapper customPadding={customPadding}>
            {children}
        </PaddingWrapper>
    )
}

export default Padding